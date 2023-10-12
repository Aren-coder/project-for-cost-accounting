import React from "react";
import "./CostDate.css";
const CostDate = (props) => {
  const month = props.date.toLocaleString("en", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en", { day: "2-digit" });
  return (
    <div className="cost-date">
      <div className="cost-date__month">{month}</div>
      <div className="cost-date__year">{year}</div>
      <div className="cost-date__day">{day}</div>
    </div>
  );
};

export default CostDate;
