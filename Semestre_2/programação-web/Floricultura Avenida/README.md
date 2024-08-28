# Floricultura Avenida

## Floricultura avenida tem como objetivo reservar e gerenciar flores é dividida em 4 páginas:
- Home
- Login
- Registro
- Admin

## Interação
O usuário poderá criar uma conta e registrar-se, após isso ele é redirecionado para homepage.

Lá ele vê uma lista de flores adicionadas pelo administrador, ele pode reservar essas flores,
após ele reservar uma flor, ele pode cancelar tal reserva.

Após a reservar a flor, ela some da lista dos outros usuários e vai para uma lista de "reservas
do usuário.

O usuário pode filtrar pelos preços das flores, podendo ser crescente ou decrescente.

## Como objetos para o localStorage temos:
- Conta 
    - Nome: string
    - Senha: string
    - Admin: boolean
- Flores
    - Nome: string
    - Valor: string
    - Reservado: boolean
    - Nome_do_dono: string