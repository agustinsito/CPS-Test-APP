import DarkMode from './LightMode/LightMode';

export const Header = () => {
  // Definir una variable de estado para controlar el modo de visualizació

  // Función para cambiar el modo de visualización


  return (
    <header>
      <nav>
        <div className="header-links">
          <a href="#" className="container-logo">
            CPSTEST.com
            <img className="logo-header" src="/favicon.ico" />
          </a>
          
          <a href="#" className='asdasd'>

          <DarkMode/>
          </a>
        </div>
      </nav>
    </header>
  );
};
