import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white text-center py-4">
      <div className="container">
      <img src="src\assets\img\hotd1.png" alt="GOT" style={{ width: '70rem', height: '8rem' }}/>
        <p>Recuerden ver la segunda temporada el 16 de junio en Max</p>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe 
            width="914" 
            height="514" 
            src="https://www.youtube.com/embed/-nbh77bt9jY" 
            title="La Casa del Dragón - Segunda Temporada | Trailer Oficial | Max" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
