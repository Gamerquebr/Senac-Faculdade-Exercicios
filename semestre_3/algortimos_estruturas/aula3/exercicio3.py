palavra = input("Palavra: ")

print("Descubra:", end=" ")
for letra in palavra:
    if letra == palavra[0]:
        print(letra.upper(), end=" ")
    else:
        print("_", end=" ")