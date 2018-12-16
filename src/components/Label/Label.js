import React from 'react';

export default function Label(props) {
  const style = {
    color: props.invalidValue ? '#ffffff' : '#ffffff', 
  };

  return (
    <label style={style} htmlFor={props.htmlFor}>{props.text}</label>
  );
}
