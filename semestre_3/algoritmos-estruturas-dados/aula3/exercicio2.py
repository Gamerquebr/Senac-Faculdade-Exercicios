nome = input("Nome: ").split(" ")

if len(nome) == 1:
    print("Esse nome não é composto, burro.")
    exit()

print(f"Nome no crachá: {nome[0].upper()}")

