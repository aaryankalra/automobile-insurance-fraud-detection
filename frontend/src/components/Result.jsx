import React from "react";

const Result = ({ probability }) => {
  return (
    <div className="result-card text-center">
      <h2 className="text-2xl font-bold">Fraud Probability</h2>
      <div className="text-3xl">{(probability * 100).toFixed(2)}%</div>
    </div>
  );
};

export default Result;
