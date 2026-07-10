from fastapi import FastAPI
from pydantic import BaseModel
from optimizer import optimize
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class OptimizeRequest(BaseModel):
    dataset: str


@app.get("/")
def home():
    return {"message": "VRP Backend Running 🚚"}


@app.post("/optimize")
def optimize_route(request: OptimizeRequest):
    result = optimize(request.dataset)
    return result