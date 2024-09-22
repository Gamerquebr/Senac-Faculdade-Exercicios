from getkey import getkey, keys

while(True):
    key = getkey()
    if key == keys.UP:
        print("Cima")
    elif key == keys.DOWN:
        print("Baixo")
    elif key == keys.LEFT:
        print("Esquerda")
    elif key == keys.RIGHT:
        print("Direita")

