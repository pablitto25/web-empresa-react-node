import React from 'react';

function CopyButton({ text }) {
  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('El texto ha sido copiado al portapapeles');
    } catch (err) {
      console.error('Error al copiar el texto: ', err);
    }
  };

  return (
    <button onClick={handleClick}>
      Copiar texto
    </button>
  );
}

export default CopyButton;