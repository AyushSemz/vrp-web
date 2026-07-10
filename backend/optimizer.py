from algorithm.bee_colony import BeeColony
from utils import tools, common


def optimize(dataset_name):
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

    # Solve
    solution = abc.solve(
        alpha=0.1,
        delta=0.01,
        gen_alpha=0.01,
        gen_betta=25
    )

    # Compute results
    routes = common.get_routes(solution)
    distance = common.compute_solution(problem, solution)

    return {
        "distance": float(distance),
        "routes": [route.tolist() for route in routes]
    }