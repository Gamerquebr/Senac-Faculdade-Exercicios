# 4. Digamos que o número de chinchilas de uma fazenda triplica a cada ano, após o primeiro ano.
# Elaborar um programa que leia o número inicial de chinchilas e anos e informe ano a ano o número
# médio previsto de chinchilas da fazenda. O número inicial de chinchilas deve ser maior ou igual a 2
# (um casal). 
num_chinc = 0
while True:
    num_chinc = int(input("Número de Chincilas: "))
    if (num_chinc > 1):
        break

    print("O número inicial de Chincilas precisa ser no mínimo 2!")

num_cria = int(input("Anos de criação: "))

for i in range(1, num_cria + 1):
    print(f"{i}° Ano: {num_chinc} chincilas")
    num_chinc = num_chinc * 3