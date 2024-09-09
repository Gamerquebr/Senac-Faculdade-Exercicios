import threading
import queue
import os
import time

def main():
    game = createGame(9, 9)
    game[4][4] = "o"
    renderFrame(game)

    runGame(game)


def runGame(state):
    q = queue.Queue(2)

    t1 = threading.Thread(target=listenInput, args=(q, ))
    t2 = threading.Thread(target=renderGame, args=(state, q, ))

    t1.start()
    t2.start()

    t1.join()
    t2.join()

def listenInput(q):
    while(True):
        key = input()
        q.put(key)

def renderGame(state, q):
    while(True):
        renderFrame(state)
        print(q.get())
        time.sleep(0.50)
        os.system("cls")


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

