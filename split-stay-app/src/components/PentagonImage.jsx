import React from 'react';

const styles = {
    ImageContainer: {
      width: '70px',
      height: '70px',
      borderRadius: '100000px',
      position: 'absolute',
    },
  };
  
  // Add a media query to hide the image on screens smaller than 768px width
  const mediaQuery = '@media screen and (max-width: 768px)';
  
  const PentagonImage = ({ image, style }) => {
    return (
      <img
        src={image}
        alt="Pentagon Image"
        style={{
          ...styles.ImageContainer,
          [mediaQuery]: {
            display: 'none', // Hide on smaller screens
          },
          ...style,
        }}
      />
    );
  };
  
export default PentagonImage;
