import React from "react";
import figure from "../assets/figure.png";
import figure1 from "../assets/figure (1).png";
import figure2 from "../assets/figure (2).png";
import figure3 from "../assets/figure (3).png";
import figure4 from "../assets/figure (4).png";
import figure5 from "../assets/figure (5).png";
import figure6 from "../assets/figure (6).png";
import figure7 from "../assets/figure (7).png";
import figure8 from "../assets/figure (8).png";
import figure9 from "../assets/figure (9).png";
import figure10 from "../assets/figure (10).png";
import figure11 from "../assets/figure (11).png";
import figure12 from "../assets/figure (12).png";
import figure13 from "../assets/figure (13).png";
import figure14 from "../assets/figure (14).png";
import figure15 from "../assets/figure (15).png";
import figure16 from "../assets/figure (16).png";
import figure17 from "../assets/figure (17).png";
import figure18 from "../assets/figure (18).png";
import dt1 from "../assets/dt (1).png";
import dt2 from "../assets/dt (2).png";
import dt3 from "../assets/dt (3).png";
import dt4 from "../assets/dt (4).png";
import dt5 from "../assets/dt (5).png";
import rf1 from "../assets/rf (1).png";
import rf2 from "../assets/rf (2).png";
import rf3 from "../assets/rf (3).png";
import rf4 from "../assets/rf (4).png";
import rf5 from "../assets/rf (5).png";

const Figures = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">Target Variable</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        <div className="bg-gray-200 p-4">
          <img src={figure} alt="Figure 1" className="h-[20rem] w-full" />
          <p className="text-lg text-center mt-2">
            Target Value (Fraud) Distribution
          </p>
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-2">Distribution Plots</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        <div className="bg-gray-200 p-4">
          <img src={figure1} alt="Figure 2" className="h-[20rem] w-full" />
          <p className="text-lg text-center mt-2">Accident Area Distribution</p>
        </div>
        <div className="bg-gray-200 p-4">
          <img src={figure2} alt="Figure 3" className="h-[20rem] w-full" />
          <p className="text-lg text-center mt-2">Agent Type Distribution</p>
        </div>
        <div className="bg-gray-200 p-4">
          <img src={figure3} alt="Figure 4" className="h-[20rem] w-full" />
          <p className="text-lg text-center mt-2">
            Age of Policy Holder Distribution
          </p>
        </div>
        <div className="bg-gray-200 p-4">
          <img src={figure4} alt="Figure 5" className="h-[20rem] w-full" />
          <p className="text-lg text-center mt-2">
            Age of Vehicle Distribution
          </p>
        </div>
        <div className="bg-gray-200 p-4">
          <img src={figure5} alt="Figure 6" className="h-[20rem] w-full" />
          <p className="text-lg text-center mt-2">
            Average Day Delay Distribution
          </p>
        </div>
        <div className="bg-gray-200 p-4">
          <img src={figure6} alt="Figure 7" className="h-[20rem] w-full" />
          <p className="text-lg text-center mt-2">
            Average Month Delay Distribution
          </p>
        </div>
        <div className="bg-gray-200 p-4">
          <img src={figure7} alt="Figure 8" className="h-[20rem] w-full" />
          <p className="text-lg text-center mt-2">
            Average Week Delay Distribution
          </p>
        </div>
        <div className="bg-gray-200 p-4">
          <img src={figure8} alt="Figure 9" className="h-[20rem] w-full" />
          <p className="text-lg text-center mt-2">Base Policy Distribution</p>
        </div>
        <div className="bg-gray-200 p-4">
          <img src={figure9} alt="Figure 10" className="h-[20rem] w-full" />
          <p className="text-lg text-center mt-2">
            Days b/w Policy and Accident Distribution
          </p>
        </div>
        <div className="bg-gray-200 p-4">
          <img src={figure10} alt="Figure 11" className="h-[20rem] w-full" />
          <p className="text-lg text-center mt-2">
            Days b/w Policy and Claim Distribution
          </p>
        </div>
        <div className="bg-gray-200 p-4">
          <img src={figure11} alt="Figure 12" className="h-[20rem] w-full" />
          <p className="text-lg text-center mt-2">Fault Distribution</p>
        </div>
        <div className="bg-gray-200 p-4">
          <img src={figure12} alt="Figure 13" className="h-[20rem] w-full" />
          <p className="text-lg text-center mt-2">Gender Distribution</p>
        </div>
        <div className="bg-gray-200 p-4">
          <img src={figure13} alt="Figure 14" className="h-[20rem] w-full" />
          <p className="text-lg text-center mt-2">
            Marital Status Distribution
          </p>
        </div>
        <div className="bg-gray-200 p-4">
          <img src={figure14} alt="Figure 15" className="h-[20rem] w-full" />
          <p className="text-lg text-center mt-2">No. of Cars Distribution</p>
        </div>
        <div className="bg-gray-200 p-4">
          <img src={figure15} alt="Figure 16" className="h-[20rem] w-full" />
          <p className="text-lg text-center mt-2">
            Past No. of Claims Distribution
          </p>
        </div>
        <div className="bg-gray-200 p-4">
          <img src={figure16} alt="Figure 17" className="h-[20rem] w-full" />
          <p className="text-lg text-center mt-2">
            Police Report Filed Distribution
          </p>
        </div>
        <div className="bg-gray-200 p-4">
          <img src={figure17} alt="Figure 18" className="h-[20rem] w-full" />
          <p className="text-lg text-center mt-2">
            Vehicle Category Distribution
          </p>
        </div>
        <div className="bg-gray-200 p-4">
          <img src={figure18} alt="Figure 19" className="h-[20rem] w-full" />
          <p className="text-lg text-center mt-2">Vehicle Price Distribution</p>
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-2">Metric Plots</h1>
      <h1 className="text-xl mt-2 mb-2">Random Forest Classifier</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
        <div className="bg-gray-200 p-4">
          <img src={rf1} alt="Random Forest 1" className="h-[20rem] w-full" />
          <p className="text-lg text-center mt-2">
            Predicted Probability Distribution
          </p>
        </div>
        <div className="bg-gray-200 p-4">
          <img src={rf2} alt="Random Forest 2" className="h-[20rem] w-full" />
          <p className="text-lg text-center mt-2">
            Confusion Matrix (at Threshold = 0.40)
          </p>
        </div>
        <div className="bg-gray-200 p-4">
          <img src={rf3} alt="Random Forest 3" className="h-[20rem] w-full" />
          <p className="text-lg text-center mt-2">Top 15 Feature Importance</p>
        </div>
        <div className="bg-gray-200 p-4">
          <img src={rf4} alt="Random Forest 4" className="h-[20rem] w-full" />
          <p className="text-lg text-center mt-2">
            Overall Metrics (at Threshold = 0.40)
          </p>
        </div>
        <div className="bg-gray-200 p-4">
          <img src={rf5} alt="Random Forest 5" className="h-[20rem] w-full" />
          <p className="text-lg text-center mt-2">Precision-Recall Curve</p>
        </div>
      </div>
      <h1 className="text-xl mt-2 mb-2">Decision Tree Classifier</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
        <div className="bg-gray-200 p-4">
          <img src={dt1} alt="Decision Tree 1" className="h-[20rem] w-full" />
          <p className="text-lg text-center mt-2">
            Confusion Matrix (at Threshold = 0.40)
          </p>
        </div>
        <div className="bg-gray-200 p-4">
          <img src={dt2} alt="Decision Tree 2" className="h-[20rem] w-full" />
          <p className="text-lg text-center mt-2">Top 15 Feature Importance</p>
        </div>
        <div className="bg-gray-200 p-4">
          <img src={dt3} alt="Decision Tree3" className="h-[20rem] w-full" />
          <p className="text-lg text-center mt-2">
            Overall Metrics (at Threshold = 0.40)
          </p>
        </div>
        <div className="bg-gray-200 p-4">
          <img src={dt4} alt="Decision Tree4" className="h-[20rem] w-full" />
          <p className="text-lg text-center mt-2">Precision-Recall Curve</p>
        </div>
        <div className="bg-gray-200 p-4">
          <img src={dt5} alt="Decision Tree 5" className="h-[20rem] w-full" />
          <p className="text-lg text-center mt-2">
            Predicted Probability Distribution
          </p>
        </div>
      </div>
    </div>
  );
};

export default Figures;
