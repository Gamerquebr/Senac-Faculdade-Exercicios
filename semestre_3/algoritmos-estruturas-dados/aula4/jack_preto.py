import random
import time

naipes = "♠♥♣♦"
extras = "JQKA"

baralho = []

def monta_baralho():
    for i in range(2, 11):
        for naipe in naipes:
            baralho.append(str(i)+naipe)
    
    for extra in extras:
        for naipe in naipe:
            baralho.append(extra+naipe)

monta_baralho()

contador = 0
while True:
    num = random.randint(0, len(baralho) - 1)
    carta = baralho.pop(num)

    contador += 1
    print(f"Sua {contador} carta é: {carta}")
    time.sleep(2)

    if contador >= 2:
            outra = input("Deseja outra carta (S/N)?").upper()
            if outra == "N":
                break


