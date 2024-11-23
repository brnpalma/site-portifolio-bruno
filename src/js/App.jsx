/* eslint-disable*/
import { useEffect, useState, createContext } from 'react';
import './App.scss';
import { MoveUp } from 'lucide-react';
import Header from './components/Header';
import Banner from './components/Banner';
import Sobre from './components/Sobre';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contato from './components/Contato';
import Slider from './components/Slider';

export const AppContext = createContext({});

function App() {
  //voltar ao inicio
  const [showBtn, setShowBtn] = useState(false);
  const [showSlider, setShowSlider] = useState(false);
  const [sliderImages, setSliderImages] = useState(null);

  const verificarScroll = () => {
    const currentY = window.scrollY;
    if (currentY > 83) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', verificarScroll);
    return () => window.removeEventListener('scroll', verificarScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <AppContext.Provider
      value={{
        showSlider,
        setShowSlider,
        sliderImages,
        setSliderImages,
      }}
    >
      <div className="App">
        <Header />
        <Banner />
        <Sobre />
        <Skills />
        <Portfolio />
        <Contato />
        {showBtn && (
          <button className="back-to-top-btn-mobile" onClick={scrollTop}>
            Voltar ao topo
            <MoveUp color="#fff" size={15} />
          </button>
        )}
        {showSlider && (
          <Slider>
            {sliderImages.map((image, index) => (
              <img key={index} src={image.imgURL} alt={image.imgAlt} />
            ))}
          </Slider>
        )}
      </div>
    </AppContext.Provider>
  );
}

export default App;
