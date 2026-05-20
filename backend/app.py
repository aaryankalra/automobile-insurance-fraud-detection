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

rf_model = joblib.load("models/rf_model.pkl")
dt_model = joblib.load("models/dt_model.pkl")

with open("data/feature_list.json", "r") as f:
    FEATURE_LIST = json.load(f)

with open("data/cat_features.json", "r") as f:
    CAT_FEATURES = json.load(f)


class PredictionInput(BaseModel):
    model: str
    threshold: float
    data: dict


@app.get("/metadata")
def metadata():
    return {
        "features": FEATURE_LIST,
        "categorical": CAT_FEATURES
    }


@app.post("/predict")
def predict(payload: PredictionInput):

    input_data = payload.data

    df = pd.DataFrame([input_data])

    df = df[FEATURE_LIST]

    if payload.model == "random_forest":
        model = rf_model
    else:
        model = dt_model

    prob = model.predict_proba(df)[0][1]

    return {
        "fraud_probability": round(float(prob), 4),
        "threshold": payload.threshold
    }