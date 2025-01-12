import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';

const images = [
    {
      src: './images/black_and_orange_flycatcher.jpg',
      alt: 'Black-and-orange flycatcher',
      captions: 'The black-and-orange flycatcher or black-and-rufous flycatcher is a species of flycatcher endemic to the central and southern Western Ghats'
    },
    {
      src: './images/brown_boobok.jpg',
      alt: 'Brown boobook',
      captions: 'The brown boobook, also known as the brown hawk-owl, is an owl which is a resident breeder in south Asia from India'
    },
    {
      src: './images/Malabar_trogan.jpg',
      alt: 'Malabar trogon',
      captions: 'It is found in the forests of India and Sri Lanka.'
    },
    {
        src: './images/Nilgiri_flycatcher.jpg',
        alt: 'Nilgiri flycatcher',
        captions:'The Nilgiri flycatcher is an Old World flycatcher with a very restricted range in the hills of southern India.'
      }
  ];
 // Sample React Component for Bootstrap Carousel
export const  Carousal = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {images.map((image, idx) => (
        <Carousel.Item key={idx} >
          <img  className="d-block w-100 imgstyle"
            src={image.src}
            alt={image.alt}
          />
            <Carousel.Caption>
            <p>{image.captions}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    
  );
}