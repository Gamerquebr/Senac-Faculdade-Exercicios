import threading
import queue

from input import listen_input
from state import game_state
from render import render_game

def main():
    game = create_game(18, 18)

    run_game(game)


def run_game(initial_game_state):
    input_q = queue.Queue(1)
    state_q = queue.Queue(1)

    state_q.put(initial_game_state)

    t1 = threading.Thread(target=listen_input, args=[input_q])
    t2 = threading.Thread(target=render_game, args=[state_q])
    t3 = threading.Thread(target=game_state, args=[state_q, input_q])

    t1.start()
    t2.start()
    t3.start()

    t1.join()
    t2.join()
    t3.join()

def create_game(sizeX, sizeY):
    return [[" "] * sizeX for _ in range(sizeY)]

main()
