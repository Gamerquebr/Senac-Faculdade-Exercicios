senha = input("Senha: ")

tamanho = len(senha)
tem_minuscula = False
tem_maiuscula = False
tem_numero = False

if tamanho < 8 or tamanho > 12:
    exit()

for letra in senha:
    if letra.islower():
        tem_minuscula = True
    elif letra.isupper():
        tem_maiuscula = True
    elif letra.isdigit():
        tem_numero = True

if tem_numero and tem_minuscula and tem_maiuscula:
    print("Senha aprovada! :)")
else:
    print("Senha inválida! :(")