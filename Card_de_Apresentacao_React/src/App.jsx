import './App.css'
import Card from "./components/CardApresentacao"

function App() {
  const usuario = {
    nome: 'William Moura',
    idade: 31,
    imagem:'https://avatars.githubusercontent.com/u/86812365?s=96&v=4',
    alt: 'Foto William Moura',
    github: 'https://github.com/williammmoura',
    linkedin: 'https://www.linkedin.com/in/williammontedemoura/',
  }

  return (
    <div>
      <Card usuario = {usuario} />      
    </div>
  )
}

export default App
