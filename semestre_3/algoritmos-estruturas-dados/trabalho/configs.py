from settings import settings

def select_config(user_input):
    match user_input:
        case "1":
            change_difficulty()
        case "2":
            change_grid_size()
        case "3":
            change_language()
        case "4":
            clear_leaderboard()
        case "5":
            return 200

def change_difficulty():
    for i, difficulty in enumerate(DIFFICULTIES.items(), start=1):
        if (difficulty[1] == cur_difficulty):
            print(f"{i}. {game_text["difficulty"][difficulty[0]]} [X]")
        else:
            print(f"{i}. {game_text["difficulty"][difficulty[0]]}")

def change_grid_size():
    pass
def change_language():
    pass
def clear_leaderboard():
    pass
