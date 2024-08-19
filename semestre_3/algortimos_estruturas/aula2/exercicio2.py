# 2. Um número é dito perfeito, quando é igual a soma dos seus divisores (exceto com o próprio
# número). Ler um número, exibir os seus divisores e informar se ele é ou não perfeito.
import functools

num = int(input("Número: "))
num_divs = [i for i in range(1, num) if num % i == 0]
sum = functools.reduce(lambda sum, item: sum + item, num_divs)

print(f"Dividores do {num}: {', '.join(map(str, num_divs))}")
print(f"Soma dos divisores: {sum}")
print(f"Portanto, {num} {'é' if sum == num else 'não é'} um natural perfeito")