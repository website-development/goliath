import React, { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 
import { DateRange } from 'react-date-range';

const Calendar = ({ setTo, setFrom }) => {
  const [date, setDate] = useState({ 
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  });


  const handleChange = date => {
    setDate(date.selection);
    setTo(date.selection.endDate);
    setFrom(date.selection.startDate);
  };

  return (
    <DateRange
      onChange={(date) => handleChange(date)}
      ranges={[date]}
      rangeColors={['#FDD226', '#FF5753']}
    />
  );
};

export default Calendar;