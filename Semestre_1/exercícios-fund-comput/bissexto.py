x = int(input("Digite um ano: "))

if x % 4 == 0 and x % 100 != 0 or x % 400 == 0:
    print("O ano informado é bissexto")
else:
    print("O ano informado não é bissexto")