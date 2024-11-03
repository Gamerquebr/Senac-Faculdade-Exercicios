import threading
import queue
import art

from input import listen_input
from state import game_state
from render import render_game
from helpers import clear_screen
from configs import select_config
from settings import settings

def main():
    text = settings.get_game_text("main_menu")

    while True:
        clear_screen()

        art.tprint("Pybrinha")

        print(text["start_opt"])
        print(text["leader_opt"])
        print(text["conf_opt"])
        print(text["leave_opt"])

        user_input = input(text["input_ask"])

        match user_input:
            case "1":
                run_game()
            case "2":
                leaderboard()
            case "3":
                select_config()
            case "4":
                art.tprint(text["goodbye"])
                break


def leaderboard():
    pass

def select_config():
    text = settings.get_game_text("configs_menu")

    while True:
        clear_screen()

        art.tprint(text["greet"])

        print(text["difficulty_opt"])
        print(text["grid_opt"])
        print(text["lang_opt"])
        print(text["leader_opt"])
        print(text["leave_opt"])

        user_input = input(text["input_ask"])

        if(select_config() is not None):
            return



def run_game():
    input_q = queue.Queue(1)
    state_q = queue.Queue(1)

    state_q.put(settings.get_game_grid())

    t1 = threading.Thread(target=listen_input, args=[input_q])
    t2 = threading.Thread(target=render_game, args=[state_q])
    t3 = threading.Thread(target=game_state, args=[state_q, input_q])

    t1.start()
    t2.start()
    t3.start()

    t1.join()
    t2.join()
    t3.join()

main()
