import React from "react";
import { useState, useEffect } from "react";
import Result from "./Result.jsx";

const Form = () => {
  const [metadata, setMetadata] = useState(null);
  const [formData, setFormData] = useState({});
  const [model, setModel] = useState("random_forest");
  const [result, setResult] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/metadata`)
      .then((res) => res.json())
      .then((data) => {
        setMetadata(data);

        const init = {};

        data.features.forEach((feature) => {
          if (data.categorical[feature]) {
            init[feature] = data.categorical[feature][0];
          } else {
            init[feature] = "";
          }
        });

        setFormData(init);
      });
  }, []);

  const handleChange = (feature, value) => {
    setFormData({
      ...formData,
      [feature]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${API_URL}/predict`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        data: formData,
      }),
    });

    const data = await response.json();

    setResult(data);
  };

  if (!metadata)
    return (
      <div className="flex justify-center items-center h-screen text-lg">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen py-10 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-xl">
        <h1 className="text-2xl font-bold mb-8 text-center">
          Predict Fraud Probability
        </h1>

        <p className="text-xl mb-3">Enter Details</p>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {metadata.features.map((feature) => {
              const isCategorical = metadata.categorical[feature];

              return (
                <div className="flex flex-col" key={feature}>
                  <label className="mb-2 text-sm font-medium text-gray-700">
                    {feature}
                  </label>

                  {isCategorical ? (
                    <select
                      value={formData[feature]}
                      onChange={(e) => handleChange(feature, e.target.value)}
                      className="border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      {metadata.categorical[feature].map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type="number"
                      value={formData[feature]}
                      onChange={(e) => handleChange(feature, e.target.value)}
                      className="border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  )}
                </div>
              );
            })}
          </div>

          <p className="text-xl mt-10 mb-2">Select Model</p>

          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">
              Model
            </label>

            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="border md:w-1/3 border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {metadata.available_models.map((modelName) => (
                <option key={modelName} value={modelName}>
                  {modelName
                    .replaceAll("_", " ")
                    .replace(/\b\w/g, (c) => c.toUpperCase())}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="mt-10 w-full cursor:pointer bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 transition"
          >
            Predict Fraud Probability
          </button>
        </form>

        {result && (
          <div className="mt-10">
            <Result result={result} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
