import React, { useState } from 'react';
import Calendar from './Calendar';
import Range from './Range';
import SwitchToggle from './SwitchToggle';

const Filter = ({ close }) => {
  const [dateFrom, setDateFrom] = useState(new Date());
  const [dateTo, setDateTo] = useState(new Date());
  const [calendarVisible, setCalendarVisible] = useState(false);

  const formatDate = date => {
    const monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
  
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  };

  return (
    <div className="filter">
      <div className="filter__top">
        <img src="/icons/filter.svg" alt="filter icon" />
        <h1 className="filter__header">filters</h1>
        <img onClick={() => close(false)} src="/icons/cross-icon-light.svg" alt="cross icon" />
      </div>

      <div className="filter__content">
        <h2 className="filter__name">Date Filter</h2>
        <div className="filter__date-wrapper">

          <div className="filter__date" onClick={() => setCalendarVisible(!calendarVisible)}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h2 className="filter__name">From</h2>
              <img src="/icons/pencil-icon.svg" alt="pencil icon" />
            </div>
            <span className="filter__date-number">{formatDate(dateFrom)}</span>
          </div>

          <div className="filter__date" onClick={() => setCalendarVisible(!calendarVisible)}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h2 className="filter__name">To</h2>
              <img src="/icons/pencil-icon.svg" alt="pencil icon" /> 
            </div>
            <span className="filter__date-number">{formatDate(dateTo)}</span>
          </div>

        </div>
      </div>

      {calendarVisible && <Calendar setTo={setDateTo} setFrom={setDateFrom} />}

      <div className="filter__content">
        <h2 className="filter__name">Client Filter</h2>
        <input className="filter__input" type="text" placeholder="Search a client by name" />
        <img className="filter__image-search" src="/icons/search.svg" alt="search icon" />
        <button className="filter__button" type="button">Carrefour</button>
        
        <h2 className="filter__name">Record Range</h2>
        <Range />

        <h2 className="filter__name">Business case filter</h2>

        <div className="filter__buttons">
          <button className="filter__button" type="button">Reducción de mora</button>
          <button className="filter__button filter__button--disable" type="button">Lorem ipsum</button>
          <button className="filter__button filter__button--disable" type="button">Reducción de mora</button>
          <button className="filter__button filter__button--disable" type="button">Lorem ipsum</button>
          <img className="filter__more" src="/icons/more.svg" alt="more icon" />
        </div>

        <h2 className="filter__name">Phase filter</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '10px' }}>
          <SwitchToggle title="Uploading" />
          <SwitchToggle title="Executing model" />
          <SwitchToggle title="Simulation" />
          <SwitchToggle title="Enrichment" />
          <SwitchToggle title="Executing B.Case" />
        </div>
      </div>

      <div className="filter__bottom">
        <span className="filter__clear">Clear filters</span>
        <button className="filter__button">Save filters</button>
      </div>
    </div>
  )
};

export default Filter;