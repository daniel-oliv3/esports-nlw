import './styles/main.css';
import logoImg from '../src/assets/Logo.png';

function App() {
  
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="">
          <img src="/imagem1.png" alt="" />
        </a>
        <a href="">
          <img src="/imagem2.png" alt="" />
        </a>
        <a href="">
          <img src="/imagem3.png" alt="" />
        </a>
        <a href="">
          <img src="/imagem4.png" alt="" />
        </a>
        <a href="">
          <img src="/imagem5.png" alt="" />
        </a>
        <a href="">
          <img src="/imagem6.png" alt="" />
        </a>
      </div>

    </div>
  )
}

export default App
