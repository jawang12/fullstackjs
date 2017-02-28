import React from 'react';

const HelloWorld = ({ example }) => {
  return (
    <h1>{ example }</h1>
  );
};

HelloWorld.propTypes = {
  example: React.PropTypes.string
};

export default HelloWorld;
