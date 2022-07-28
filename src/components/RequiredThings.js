import React, { useState, useEffect } from "react";
import requiredItems from "../helpers/requiredItems";

const RequiredThings = (props) => {
  const [items, setItems] = useState({});

  useEffect(
    () => {
      console.log(props);
      setItems(requiredItems[props.results.weather[0].main]);
    },
    // eslint-disable-next-line
    [props.results.weather]
  );

  return (
    <div className="required-things-container">
      {Object.keys(items).length > 0 && (
        <>
          <h1>Don't forget to bring your</h1>
          <div className="required-things">
            {Object.keys(items).map((item, i) => (
              <div className="card-item" key={`${item} ${i}`}>
                <div className="face face1">
                  <div className="content">
                    <div className="icon">
                      <img src={items[item]} alt="" />
                    </div>
                  </div>
                </div>
                <div className="face face2">
                  <div className="content">
                    <h3>{item}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default RequiredThings;
