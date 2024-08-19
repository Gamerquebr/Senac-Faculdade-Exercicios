# 3. Elaborar um programa que leia o nome de um produto e o número de etiquetas a serem
# impressas desse produto. Exiba as etiquetas com o nome do produto, com no máximo 2 etiquetas
# por linha, conforme exemplo de execução do programa, demonstrado a seguir.

nome = input("Produto: ")
num = int(input("N° de etiquetas: "))

for i in range(1, num + 1):
    if (i % 2 == 0):
        print(nome)
    else:
        print(f"{nome}", end="\t")