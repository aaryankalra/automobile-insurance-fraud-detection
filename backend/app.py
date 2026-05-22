from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pandas as pd
import joblib
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

rf_pipeline = joblib.load("models/rf_model.pkl")
brf_pipeline = joblib.load("models/brf_model.pkl")
dt_pipeline = joblib.load("models/dt_model.pkl")
et_pipeline = joblib.load("models/et_model.pkl")

with open("data/feature_list.json", "r") as f:
    FEATURE_LIST = json.load(f)

with open("data/cat_features.json", "r") as f:
    CAT_FEATURES = json.load(f)

MODELS = {
    "random_forest": {
        "pipeline": rf_pipeline,
        "threshold": 0.40
    },

    "balanced_random_forest": {
        "pipeline": brf_pipeline,
        "threshold": 0.40
    },

    "decision_tree": {
        "pipeline": dt_pipeline,
        "threshold": 0.40
    },

    "extra_trees": {
        "pipeline": et_pipeline,
        "threshold": 0.55
    }
}

class PredictionInput(BaseModel):
    model: str
    data: dict

@app.get("/metadata")
def metadata():
    return {
        "features": FEATURE_LIST,
        "categorical": CAT_FEATURES,
        "available_models": list(MODELS.keys())
    }

@app.post("/predict")
def predict(payload: PredictionInput):

    model_name = payload.model

    if model_name not in MODELS:
        return {
            "error": f"Invalid model name. Choose from: {list(MODELS.keys())}"
        }

    pipeline = MODELS[model_name]["pipeline"]
    threshold = MODELS[model_name]["threshold"]

    input_data = payload.data

    df = pd.DataFrame([input_data])

    df = df[FEATURE_LIST]

    fraud_probability = pipeline.predict_proba(df)[0][1]

    prediction = (
        "Fraud"
        if fraud_probability >= threshold
        else "Not Fraud"
    )

    return {
        "model": model_name,
        "fraud_probability": round(float(fraud_probability), 4),
        "threshold": threshold,
        "prediction": prediction
    }