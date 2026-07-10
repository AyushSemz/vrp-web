import time

from algorithm.bee_colony import BeeColony
from utils import tools, common


def optimize(dataset_name):
    # Start timer
    start_time = time.perf_counter()

    # Load benchmark
    problem = tools.get_problem(f"benchmarks/{dataset_name}")

    # Create ABC solver
    abc = BeeColony(problem)

    abc.set_params(
        n_epoch=200,
        n_initials=30,
        n_onlookers=20,
        search_limit=50
    )

    # Run optimization
    solution = abc.solve(
        alpha=0.1,
        delta=0.01,
        gen_alpha=0.01,
        gen_betta=25
    )

    # End timer
    execution_time = time.perf_counter() - start_time

    # Compute results
    routes = common.get_routes(solution)
    distance = common.compute_solution(problem, solution)

    return {
        "status": "success",
        "dataset": dataset_name,
        "distance": round(float(distance), 2),
        "vehicles": len(routes),
        "iterations": 200,
        "execution_time": round(execution_time, 2),
        "routes": [route.tolist() for route in routes]
    }