import React from "react"
import "./styles.css"

export default () => {
  return (
    <div className="filter-logo">
      <img className="filter-logo__image"
        src={require("./filter.png")}
        srcSet={`
           ${require('./filter@2x.png')} 2x,
           ${require('./filter@3x.png')} 3x
        `}
        alt="фильтр"/>
    </div>
  );
}
