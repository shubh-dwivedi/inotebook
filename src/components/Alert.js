import React from 'react'

export const Alert = (props) => {
  const capitalize = (word) => {
    if(word === "danger") word="error";
    const lowerCase=word.toLowerCase();
    return word.charAt(0).toUpperCase() + lowerCase.slice(1);
  }
  return (
    <div style={{height: '45px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
          {capitalize(props.alert.type)} : {props.alert.msg}
        </div>}
    </div>
  )
}
