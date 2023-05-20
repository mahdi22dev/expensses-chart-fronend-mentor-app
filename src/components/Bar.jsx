import React from "react";
import { chartData } from "../data";
const Bar = ({ onMouseLeave, onMouseEnter, barHovered }) => {
  return (
    <>
      {chartData.map((expenses) => {
        const { amount, day, id } = expenses;
        const hieght = amount * 4;
        hieght.toString();
        return (
          <div className="bar-container" key={id}>
            <div
              className={id == barHovered ? "bar-modal active" : "bar-modal"}
              style={{
                height: "30px",
                position: "absolute",
                bottom: `${hieght + 130}px`,
                left: `${id * 69}px`,
              }}
            >{`$ ${amount}`}</div>
            <div
              className={id == 3 ? "bar bar-bgcolor" : "bar"}
              onMouseEnter={() => {
                onMouseEnter(id);
              }}
              onMouseLeave={onMouseLeave}
              style={{ height: hieght, bottom: "25%", left: `${id * 70}px` }}
            ></div>
            <div
              className="day"
              style={{ bottom: "20%", left: `${id * 72}px` }}
            >
              {day}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Bar;
