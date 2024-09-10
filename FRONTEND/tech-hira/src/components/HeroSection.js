import React, { useEffect, useState } from 'react';
import Bg from './media/bg.mp4';
import './style/HeroSection.css';

const Hero = () => {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const infoList = [
    "Welcome to Tech - Hira, where innovation meets execution",
    "Empowering businesses with future-proof digital solutions",
    "Crafting bespoke software tailored to accelerate your growth",
    "Navigating the evolving tech landscape, with you at the forefront"
  ];
  

  const typingSpeed = 50; // Speed of typing effect
  const pauseDuration = 4000; // Duration of pause between text changes

  useEffect(() => {
    let typingInterval;
    let clearTimeoutId;

    const typeText = (text, callback) => {
      let index = 0;
      setText(""); // Clear text before typing
      typingInterval = setInterval(() => {
        setText(text.substring(0, index + 1));
        index++;
        if (index > text.length) {
          clearInterval(typingInterval);
          clearTimeoutId = setTimeout(callback, pauseDuration);
        }
      }, typingSpeed);
    };

    const startTyping = () => {
      typeText(infoList[currentIndex], () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % infoList.length);
      });
    };

    startTyping();

    return () => {
      clearInterval(typingInterval);
      clearTimeout(clearTimeoutId);
    };
  }, [currentIndex]);

  return (
    <section className="hero">
      <video className="background-video" autoPlay muted loop>
        <source src={Bg} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <div className="hero-message">
          <h2>{text}</h2>
        </div>
        <a href="#services" className="cta-btn">Discover Our Services</a>
      </div>
    </section>
  );
};

export default Hero;
