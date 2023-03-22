function Card(props){
    return(
        <div>
            <img src={props.usuario.imagem}/>
            <h1>Nome: {props.usuario.nome}</h1>
            <h2>Idade: {props.usuario.idade} anos</h2>
            <a href={props.usuario.github} target="_blank">
                <box-icon type="logo" name="github" color="blue" size="md" title="github"></box-icon>
            </a>
            <a href={props.usuario.linkedin} target="_blank">
                <box-icon type="logo" name="linkedin" color="blue" size="md" title="linkedin"></box-icon>
            </a>
        </div>
    )
}

export default Card