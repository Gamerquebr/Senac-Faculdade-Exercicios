function Resposta({resposta}: {resposta: number}){
  if (resposta == 0){
    return (<h3 className="errado">Errou, você é um fracasso e todos te odeiam, isso é obviamente um Ganso &gt;:(</h3>)
  } else if (resposta == 1){
    return (<h3 className="certo">Acertou! Isso é um Pato! parabéns :)</h3>)
  } else{
    return (null)
  }
}

export default Resposta;
