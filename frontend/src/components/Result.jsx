import React from "react";

const Result = ({ probability }) => {
  return (
    <div className="result-card">
      <h2>Fraud Probability</h2>
      <div className="probability">{(probability * 100).toFixed(2)}%</div>
    </div>
  );
};

export default Result;
