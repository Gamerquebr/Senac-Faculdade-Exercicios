# 1. A entrada para um clube de pesca custa R$ 20,00 por pessoa e cada pessoa tem direito a levar um
# peixe. Peixes extras custam 12,00. Elabore um programa que leia o número de pessoas de uma
# família que foram ao clube e o número de peixes obtidos na pescaria. Informe o valor a pagar.

npessoa = int(input("N° Pessoas: "))
npeixe = int(input("N° Peixes: "))

print(f"Pagar R$: {(20 * npessoa) + (12 * (0 if npeixe < npessoa else npeixe - npessoa))}")