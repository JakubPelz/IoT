import React from 'react';

const MidContentDisplay = ({ MidData, activeComponent }) => {
  return (
    <>
      {MidData.filter(
        (component) => MidData.indexOf(component) === activeComponent
      ).map((component) => {
        return <div>{component}</div>;
      })}
    </>
  );
};

export default MidContentDisplay;
