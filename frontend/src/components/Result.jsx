import React from "react";

const Result = ({ result }) => {
  const probability = result.fraud_probability;

  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-6">Prediction Result</h2>

      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-500">Model</p>
          <p className="text-xl font-semibold">
            {result.model
              .replaceAll("_", " ")
              .replace(/\b\w/g, (c) => c.toUpperCase())}
          </p>
        </div>

        <div>
          <p className="text-lg text-gray-500">Fraud Probability</p>

          <p className="text-6xl font-bold">
            {(probability * 100).toFixed(2)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Result;
