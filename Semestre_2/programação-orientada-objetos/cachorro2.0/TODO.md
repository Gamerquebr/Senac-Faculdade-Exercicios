# Requisitos
> Cada passo deve apresentar seus respectivos testes em **jest**

## Classe chamada app:

### Métodos:
- start
    - Começa o programa


## Classe chamada animal:

### Objetos:
- nome

    - O nome do animal, pode ser passado como parâmetro na criação da classe,
      se não específicado recebe o nome de "Animal"
    
- energia

    - Quantidade total de energia do animal, é iniciado com um valor aleatório 
      entre 50 e 100

    - se for **maior que 100** o animal entra em estado de choque e explode, se for 
      **menor que 0** o animal morre de cansaço

- felicidade

    - Quantidade total de felicidade do animal, é iniciado com um valor aleatório
      entre 50 e 100
    
    - Se for **maior que 100** o animal entra em overdose e morre, se for **menor 
      que 0** o animal entra em depressão e se mata

- pesoInicial

    - Peso inicial dado ao animal em Kg, seu valor deve ser passado como parâmetro 
      na criação da classe e não pode ser modificado

- peso

    - Quantidade do peso atual do animal, seu valor inical é baseado no *pesoInicial*
    
    - Se for **3x maior que o *pesoInicial*** o animal entra em obesidade mórbida 
      e tem um ataque cardiáco (morrendo no processo), se for **um terço do 
      *pesoInicial*** o animal some do universo de tão magro

- natureza
    
    - Basicamente um modificador que dita o quanto um método vai afetar o animal

    - esse valor é selecionado aleatóriamente na criação do animal, podendo ser 
      entre 1.0 e 3.0, não podendo ser modificado.

### Métodos:
- comer
    
    - Permite o animal comer

    - Aumenta sua *felicidade* com base no seu 
      **(*valor* + númeroAleatório(entre 5 e 10) x *natureza*)**

    - Aumenta seu *peso* com base no seu
      **(*valor* + númeroAleatório(entre 5 e 10) x *natureza* x 0.025 x valorInicial)**
    
    - Reduz sua *energia* com base no seu
      **(*valor* - númeroAleatório(entre 5 e 10) x *natureza*)**

- dormir

    - Permite o animal dormir, aceita um parâmetro que representa quantas horas totais
    de sono

    - Se esse valor for null, menor ou igual a zero o cachorro não irá dormir

    - Aumenta sua *energia* com base no seu
      **(*valor* + horas totais de sono x *natureza*)**

    - Reduz sua *felicidade* com base no seu
      **(*valor* - horas totais de sono x *natureza*)**

    - Reduz seu *peso* com base no seu
      **(*valor* - *valorInicial* x horas totais de sono x 0.025)**
        

## Classe chamada cachorro que extende animal:

### Objetos:
- porte

    - Porte do cachorro, é selecionado com base no seu *pesoInicial*
        - **mini**: Menor que 5Kg
        - **pequeno**: Maior que 5Kg e menor que 10Kg
        - **pequenoMédio**: Maior que 10Kg e menor que 15Kg
        - **médio**: Maior que 15Kg e menor que 20Kg
        - **médioGrande**: Maior que 20Kg e menor que 25Kg
        - **grande**: Maior que 25Kg e menor que 30Kg
        - **gigante**: Maior que 30Kg e menor que 35Kg
        - **colossal**: Maior que 35Kg
        

- raça

    - Raça do cachorro, seu valor inicial é **Viralata** se nenhum parâmetro for
      passado

### Métodos:
- latir

    - Permite o cachorro latir, aceita um parâmetro que dita quantas vezes o 
      cachorro irá latir

    - Se esse valor for null, menor ou igual a zero o cachorro irá latir somente 
      uma vez

    - Latir aumenta sua *felicidade* e *energia* com base no
      **(*valor* + númeroAleatório(entre 0 e 2) x *natureza*)**

    - Latir reduz seu *peso* com base no
      **(*valor* - *valorInicial* x 0.025)**
    

- brincar

    - Permite o cachorro brincar, aceita um parâmetro que representa quanto tempo
      em horas o cachorro ficou brincando

    - Se esse valor for null, menor ou igual a zero o cachorro não irá brincar

    - Brincar aumenta sua felicidade com base no
      **(*valor* + horas totais de brincadeira x *natureza*)**

    - Brincar diminui sua energia com base no
      **(*valor* - horas totais de brincadeira x *natureza*)**
    
    - Brincar diminui seu peso com base no
      **(*valor* - *valorInicial* x horas totais de brincadeira x 0.05)**

