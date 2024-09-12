import threading
import queue
import os
from getkey import getkey, keys



def main():
    game = createGame(9, 9)

    runGame(game)


def runGame(stateInitial):
    input = queue.Queue(1)
    state_q = queue.Queue(1)

    state_q.put(stateInitial)

    t1 = threading.Thread(target=listenInput, args=(input, ))
    t2 = threading.Thread(target=renderGame, args=(state_q, ))
    t3 = threading.Thread(target=changeState, args=(state_q, stateInitial, input))

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

def changeState(state_q, state, input):
    state_q.put(state)

    while(True):
        input_current = input.get()

        if input_current == 0:
            state[0][0] = "u"
            state_q.put(state)
        elif input_current == 1:
            state[0][0] = "d"
            state_q.put(state)
        elif input_current == 2:
            state[0][0] = "l"
            state_q.put(state)
        elif input_current == 3:
            state[0][0] = "r"
            state_q.put(state)

def createGame(sizeX, sizeY):
    return [[" "] * sizeX for _ in range(sizeY)]

def renderFrame(state):
    sizeX = len(state)
    sizeY = len(state[0])

    print("_"* (1 + sizeX * 2))

    for row in range(sizeX):
        for col in range(sizeY):
            print(f"|{state[row][col]}", end="")
        print("|")

    print("‾"* (1 + sizeX * 2))

main()

