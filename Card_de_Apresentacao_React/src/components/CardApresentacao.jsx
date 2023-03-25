import "./CardApresentacao.css"

function Card({usuario}){
    return(
        <div className="cardApresenta">
            <img className="imgFoto" src={usuario.imagem}/>
            <div className="cardDados">
                <h1>{usuario.nome}</h1>
                <h2>Idade: {usuario.idade} anos</h2>
                <div className="CardLogoContatos">
                    <a href={usuario.github} target="_blank">
                        <img src="../assets/Logo_github.png" />
                    </a>
                    <a href={usuario.linkedin} target="_blank">
                        <img src="../assets/Logo_linkedin.png" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card