import React, { useRef, useState } from "react";
import Bar from "./Bar";

const Barchart = () => {
  const [barHovered, setBarhoverd] = useState(null);
  const onMouseEnter = (itemid) => {
    setBarhoverd(itemid);
  };
  const onMouseLeave = () => {
    setBarhoverd(null);
  };
  return (
    <div className="barchart">
      <h3 className="barchart-title">Spending - Last 7 days</h3>
      <Bar
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        barHovered={barHovered}
      />
      <div className="divider" style={{ bottom: "20%" }}></div>
      <div className="totals" style={{ bottom: "0%" }}>
        <div className="current-month-total">
          <p className="month-total">Total this month</p>
          <p className="month-total-estimate">$478.33</p>
        </div>
        <div className="last-month-total">
          <p className="increase-value">+2.4%</p>
          <p>from last month</p>
        </div>
      </div>
    </div>
  );
};

export default Barchart;
