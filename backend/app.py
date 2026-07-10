from fastapi import FastAPI
from pydantic import BaseModel
from optimizer import optimize

app = FastAPI()


class OptimizeRequest(BaseModel):
    dataset: str


@app.get("/")
def home():
    return {"message": "VRP Backend Running 🚚"}


@app.post("/optimize")
def optimize_route(request: OptimizeRequest):
    result = optimize(request.dataset)
    return result