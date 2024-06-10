import React, { useEffect, useRef, useState } from 'react';

const Footer = () => {
  const iframeRef = useRef(null);
  const [player, setPlayer] = useState(null);
  const [lastTime, setLastTime] = useState(0);

  useEffect(() => {
    const onYouTubeIframeAPIReady = () => {
      const newPlayer = new YT.Player(iframeRef.current, {
        events: {
          onReady: (event) => {
            setPlayer(event.target);
          },
          onStateChange: (event) => {
            if (event.data === YT.PlayerState.PAUSED) {
              setLastTime(event.target.getCurrentTime());
            }
          },
        },
      });
    };

    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    } else {
      onYouTubeIframeAPIReady();
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (player) {
          if (entry.isIntersecting) {
            player.seekTo(lastTime);
            player.playVideo();
          } else {
            setLastTime(player.getCurrentTime());
            player.pauseVideo();
          }
        }
      },
      {
        threshold: 0.5, 
      }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => {
      if (iframeRef.current) {
        observer.unobserve(iframeRef.current);
      }
    };
  }, [player, lastTime]);

  return (
    <footer className="text-white text-center py-4">
      <div className="container">
        <img src="src/assets/img/hotd1.png" alt="GOT" style={{ width: '70rem', height: '8rem' }} />
        <p>Recuerden ver la segunda temporada el 16 de junio en Max</p>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            ref={iframeRef}
            width="914"
            height="514"
            src="https://www.youtube.com/embed/-nbh77bt9jY?enablejsapi=1" 
            title="La Casa del Dragón - Segunda Temporada | Trailer Oficial | Max"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <img src="src/assets/img/hotd2.jpg" alt="Coleccion CHF" style={{ width: '914px', height: '34rem' }} />
      </div>
    </footer>
  );
};

export default Footer;
