import threading
import queue
import os
import time
import random
from getkey import getkey, keys

def main():
    game = createGame(18, 18)

    runGame(game)


def runGame(stateInitial):
    input = queue.Queue(1)
    state_q = queue.Queue(1)

    state_q.put(stateInitial)

    t1 = threading.Thread(target=listenInput, args=[input])
    t2 = threading.Thread(target=renderGame, args=[state_q])
    t3 = threading.Thread(target=gameState, args=[state_q, stateInitial, input])

    t1.start()
    t2.start()
    t3.start()

    t1.join()
    t2.join()
    t3.join()

def listenInput(input):
    while(True):
        key = getkey()
        if key == keys.UP:
            input.put(0)
        elif key == keys.DOWN:
            input.put(1)
        elif key == keys.LEFT:
            input.put(2)
        elif key == keys.RIGHT:
            input.put(3)

def renderGame(state):
    clear = 'cls' if os.name == 'nt' else 'clear'
    os.system(clear)

    while(True):
        if not state.empty():
            os.system(clear)
            renderFrame(state.get())

def gameState(state_q, state, input):
    sizeY = len(state)
    sizeX = len(state[0])

    head = [sizeY // 2, sizeX // 2]
    buffer = [head]
    snake_size = 3

    update_head(state, head, "v")
    state_q.put(state)

    input_current = input.get()
    generate_fruit(state, sizeX, sizeY)

    while(True):
        time.sleep(0.1)

        if not input.empty():
            input_current = input.get()

        if snake_size <= len(buffer):
            update_tail(state, buffer)

        match input_current:
            case 0:
                update_head(state, head, "o")
                buffer.append(head.copy())

                head[0] -= 1
                if (tile_have_fruit(state, head)):
                    snake_size += 1
                    generate_fruit(state, sizeX, sizeY)

                update_head(state, head, "ʌ")
                state_q.put(state)
            case 1:
                update_head(state, head, "o")
                buffer.append(head.copy())

                head[0] += 1
                if (tile_have_fruit(state, head)):
                    snake_size += 1
                    generate_fruit(state, sizeX, sizeY)

                update_head(state, head, "v")
                state_q.put(state)
            case 2:
                update_head(state, head, "o")
                buffer.append(head.copy())

                head[1] -= 1
                if (tile_have_fruit(state, head)):
                    snake_size += 1
                    generate_fruit(state, sizeX, sizeY)

                update_head(state, head, "<")
                state_q.put(state)
            case 3:
                update_head(state, head, "o")
                buffer.append(head.copy())

                head[1] += 1
                if (tile_have_fruit(state, head)):
                    snake_size += 1
                    generate_fruit(state, sizeX, sizeY)

                update_head(state, head, ">")
                state_q.put(state)


def generate_fruit(state, sizeX, sizeY):
    rand_x = random.randint(0, sizeX - 1)
    rand_y = random.randint(0, sizeY - 1)
    state[rand_y][rand_x] = "@"

def tile_have_fruit(state, head):
    if (state[head[0]][head[1]] == "@"):
        return True
    else:
        return False

def update_head(state, head, char):
    state[head[0]][head[1]] = char

def update_tail(state, buffer):
    tail = buffer.pop(0)
    state[tail[0]][tail[1]] = " "

def createGame(sizeX, sizeY):
    return [[" "] * sizeX for _ in range(sizeY)]

def renderFrame(state):
    sizeY = len(state)
    sizeX = len(state[0])

    print("╔" + "═" * (1 + sizeX * 2) + "╗")

    for row in range(sizeY):
        print("║", end=" ")
        for col in range(sizeX):
            print(f"{state[row][col]}", end=" ")
        print("║")

    print("╚" + "═" * (1 + sizeX * 2) + "╝")

main()
