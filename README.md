# Automobile Insurance Fraud Detection System

An ML-powered application for detecting fraudulent automobile insurance claims using Random Forest and Decision Tree.

The system predicts the probability of fraud based on claim-related inputs and provides visual insights into key fraud indicators.

---

# Team Members

1. Aaryan Kalra (2210990015)
2. Aaditya Bhalla (2210990004)
3. Aaditya Sharma (2210990005)
4. Kanwarjeet Saini (2210990474)

Group G-25 (Cybersecurity)

---

# Features

- Fraud probability prediction
- Multiple ML models support:
  - Random Forest
  - Decision Tree
- Adjustable sensitivity threshold
- Visual image-based fraud insights
- Fraud probability counter
- Modern responsive frontend
- FastAPI backend API
- React-based frontend interface

---

# Tech Stack

## Frontend
- React
- Vite
- HTML
- CSS
- JavaScript
- Tailwind

## Backend
- FastAPI
- Python
- Scikit-learn
- Pandas
- Joblib

## Machine Learning
- Random Forest Classifier
- Decision Tree Classifier

---

# Dataset

The dataset contains motor insurance claim records with various categorical and numerical features related to:

- Vehicle details
- Policy holder information
- Accident information
- Claim history
- Policy details

The target variable identifies whether a claim is fraudulent or non-fraudulent.

### Dataset Credits

- [Source (Kaggle)](https://www.kaggle.com/datasets/shivamb/vehicle-claim-fraud-detection)
- [Author (Kaggle)](https://www.kaggle.com/shivamb)

---

# Machine Learning Workflow

1. Data Cleaning
2. Feature Engineering
3. Encoding Categorical Features
4. Model Training
5. Model Evaluation
6. Fraud Probability Prediction
7. Frontend Integration

---

# Fraud Indicators Visualized

The project includes visualization analysis for:
- Vehicle Category
- Vehicle Price
- Accident Area
- Police Report Filed
- Past Number of Claims
- Age of Vehicle
- Age of Policy Holder
- Agent Type
- Delay-related Features
- Base Policy
- Gender Distribution
- Fault Distribution

---

# Backend Setup

## Navigate to Backend

```bash
cd backend
```

## Install Dependencies

```bash
pip install -r requirements.txt
```

## Run FastAPI Server

```bash
uvicorn app:app --reload
```

---

# Frontend Setup

## Navigate to Frontend

```bash
cd frontend
```

## Install Dependencies

```bash
npm install
```

## Run React App

```bash
npm run dev
```

---

### Request Body

```json
{
  "data": {
    "Fault": "Policy Holder",
    "Gender": "Male"
    ...
  },
  "model": "random_forest",
  "threshold": 0.30
}
```

### Response

```json
{
  "fraud_probability": 82.45
}
```

---

# Future Improvements

- User authentication
- Database integration
- SHAP explainability
- CSV bulk prediction
- PDF report generation
- Dashboard analytics
- Real-time fraud monitoring
- Cloud deployment

---

# Screenshots

---

# Learning Outcomes

This project demonstrates:
- Building a predictive system
- Machine Learning model deployment
- Fraud analytics and data visualization
- Studying patterns and trends in fraud
- Balancing metrics to choose best model
- Increasing accuracy by hyperparameter tuning
- API development using FastAPI
- Frontend-backend integration
# License

This project is intended for educational and academic purposes.
