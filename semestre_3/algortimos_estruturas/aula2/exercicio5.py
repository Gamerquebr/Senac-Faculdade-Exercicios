# 5. Elaborar um programa que leia ‘n’ números, até ser digitado 0. Ao final, exiba quantos números
# foram digitados, a soma dos números e qual o maior número digitado.
import functools

print("Informe números ou 0 para sair")

num = -1
num_arr = []

while True:
    num = int(input("Número: "))

    if num == 0:
        break

    num_arr.append(num)

print("-" * 20)

quantidade = len(num_arr)
soma = functools.reduce(lambda sum, item: sum + item, num_arr)
maior = functools.reduce(lambda n, n_next: n_next if n_next > n else n, num_arr)

print(f"Números digitados {quantidade}")
print(f"Soma dos número: {soma}")
print(f"Maior número: {maior}")
