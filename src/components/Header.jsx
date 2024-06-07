import React from 'react';

const Header = () => {
  return (
    <header className="text-white text-center py-3">
      <div className="container">
        <div className="row">
          <div className="col">
            <img src="src\assets\img\Casa_Stark_escudo.webp" alt="Imagen1" className="img-fluid" style={{ width: '12rem', height: '12rem' }}/>
          </div>
          <div className="col">
          <img src="src\assets\img\got0.png" alt="GOT" style={{ width: '60rem', height: '10rem' }}/>
            <p className="lead">
              Game of Thrones es una serie de televisión de fantasía medieval creada por David Benioff y D. B. Weiss. Está basada en la serie de novelas Canción de hielo y fuego, del autor George R. R. Martin.
            </p>
          </div>
          <div className="col">
            <img src="src\assets\img\Casa_Targaryen_estandarte.webp" alt="Imagen2" className="img-fluid" style={{ width: '12rem', height: '12rem' }} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
