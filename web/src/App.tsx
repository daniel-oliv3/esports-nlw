import { MagnifyingGlassPlus } from 'phosphor-react';
import { GameBanner } from './components/GameBanner';
import './styles/main.css';
import logoImg from '../src/assets/Logo.png';
import { CreateAdBanner } from './components/CreateAdBanner';
import { useState } from 'react';


function App() {
  
  const [hasUserClickedOnButton, setHasUserClickedOnButton] = useState(false);

  function handleButtonClick(){
    setHasUserClickedOnButton(true);
  }


  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.
      </h1>

      <button onClick={handleButtonClick}>Botão</button>

      { hasUserClickedOnButton ? 'Usuario clicou' : null }

      <div className="grid grid-cols-6 gap-6 mt-16">
        
        <GameBanner bannerUrl="../public/imagem1.png" title="League of Legends" adsCount={5} />
        <GameBanner bannerUrl="../public/imagem2.png" title="Dota 2" adsCount={3} />
        <GameBanner bannerUrl="../public/imagem3.png" title="Counter Striker" adsCount={1} />
        <GameBanner bannerUrl="../public/imagem4.png" title="World of Warcraft" adsCount={9} />
        <GameBanner bannerUrl="../public/imagem5.png" title="Apex Legends" adsCount={7} />
        <GameBanner bannerUrl="../public/imagem6.png" title="Fortnite" adsCount={4} />

      </div>

      <CreateAdBanner />
    </div>
  )
}

export default App
