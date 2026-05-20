import React from "react";

const About = () => {
  return (
    <div className="bg-white p-8 mt-10">
      <h2 className="text-2xl font-semibold mb-6">About This Project</h2>

      <div className="space-y-4  leading-7">
        <ul className="list-disc list-inside md:ml-11">
          <li>
            This project is an Automobile Insurance Fraud Detection System built
            by using ML models to predict the probability of fraudulent
            insurance claims.
          </li>

          <li>
            The application allows users to input various claim-related,
            vehicle-related and customer-related details through a simple
            interactive form interface.
          </li>

          <li>
            Two machine learning models are integrated into the system:
            <ul className="list-decimal ml-15">
              <li>Random Forest</li>
              <li>Decision Tree</li>
            </ul>
          </li>

          <li>
            Users can select the preferred model and adjust the prediction
            threshold dynamically.
          </li>

          <li>
            The tech stack for website:
            <ul className="list-disc ml-15">
              <li>The backend is developed using FastAPI</li>
              <li>
                The frontend is built using ReactJS and Tailwind CSS for a clean
                and responsive UI.
              </li>
            </ul>
          </li>

          <li>
            After submission, the selected model processes the input data and
            returns the predicted fraud probability in real time.
          </li>
        </ul>
      </div>
      <h2 className="text-2xl font-semibold my-6">Team Members</h2>
      <ol className="list-decimal ml-5 md:ml-15">
        <li>Aaryan Kalra (2210990015)</li>
        <li>Aaditya Bhalla (2210990004)</li>
        <li>Aaditya Sharma (2210990005)</li>
        <li>Kanwarjeet Saini (2210990474)</li>
      </ol>
    </div>
  );
};

export default About;
