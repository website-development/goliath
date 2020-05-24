import React from 'react';

import ContentTop from '../components/ContentTop';
import Card from '../components/Card';
import ShortTable from '../components/ShortTable';
import DatasetGraph from '../components/DatasetGraph';

const HomePage = () => {
  const path = '/images/functions/';
  const functions = [
    {
      text: 'New project',
      bg: `${path}typewriter.jpeg`,
      icon: `${path}plus-icon.svg`,
    },
    {
      text: 'See projects',
      bg: `${path}dog.jpeg`,
      icon: `${path}eye-icon.svg`
    },
    {
      text: 'Users',
      bg: `${path}woman.jpeg`,
      icon: `${path}user.svg`
    },
    {
      text: 'Admin',
      bg: `${path}notebook.jpeg`,
      icon: `${path}settings.svg`
    },
    {
      text: 'Billing',
      bg: `${path}man.jpeg`,
      icon: `${path}credit-card.svg`
    },
    {
      text: 'Support',
      bg: `${path}phone.jpeg`,
      icon: `${path}contact.svg`
    }
  ];
  const projects = [
    {
      name: 'Project Number 1',
      owner: 'reducción de mora',
      company: 'Carrefour'
    },
    {
      name: 'Project Number 2',
      owner: 'reducción de mora',
      company: 'Carrefour'
    },
    {
      name: 'Project Number 3',
      owner: 'reducción de mora',
      company: 'Carrefour'
    }
  ];

  return (
    <div className="content">
      <ContentTop 
        layout={
          <h1
            className="content__heading"
          >
            Home<span style={{ opacity: '0.3' }}> sweet home</span>
          </h1>
        }
      />
      <h2 className="home__subheading">Functions</h2>

      <div className="home__middle">
        {functions.map(func => (
          <Card  key={func.text} text={func.text} bg={func.bg} icon={func.icon} />
        ))}
      </div>
      <h2 className="home__subheading">Shortcuts</h2>

      <div className="home__bottom">
          <ShortTable projects={projects} />
          <DatasetGraph />
      </div>
    </div>
  );
};

export default HomePage;