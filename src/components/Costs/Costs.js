import React, { useState } from "react";
import "./Costs.css";
import CostItem from "./CostItem";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
const Costs = (props) => {
  const [selectedYear, setSelecedtYear] = useState("2021");
  const yearChangeHandler = (year) => {
    setSelecedtYear(year);
  };

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        {props.costs.map((cost) => (
          <CostItem
            date={cost.date}
            description={cost.description}
            amount={cost.amount}
          />
        ))}
      </Card>
    </div>
  );
};

export default Costs;
