import React, { useState } from "react";
import "./Costs.css";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import CostList from "./CostList";
const Costs = (props) => {
  const [selectedYear, setSelecedtYear] = useState("2021");
  const yearChangeHandler = (year) => {
    setSelecedtYear(year);
  };

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <CostList costs = {filteredCosts} />
      </Card>
    </div>
  );
};

export default Costs;
