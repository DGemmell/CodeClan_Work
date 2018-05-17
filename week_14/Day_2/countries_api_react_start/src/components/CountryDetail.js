import React from 'react';

const CountryDetail = (props) => {
  if(!props.country) return null;

  let flagStyles = {
    width: "300px"
  }
  return (
    <article>
    <h3>
      {props.country.name}
    </h3>
    <img
      style={flagStyles}
      src={props.country.flag}
      alt={props.country.name} />
  </article>
  )
}

export default CountryDetail;
