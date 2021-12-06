import React from 'react'

export const CardList = (props) => {
  return (
    <div
      className={`modal__wrapper ${props.isOpened ? `open` : `close`}`}
      style={{ ...props.style }}
    >
      <div className='modal__body'>
        <div className='modal__close' onClick={() => props.onModalClose(!props.isOpened)}>
          ×
        </div>
        <h2>{props.title}</h2>
        <hr />
        {props.children}
      </div>
    </div>
  )
}

{
  /* <img onClick={() => setIsfoto(!isfoto)} src={foto.foto1} alt='yes' />
<img src={foto.foto2} alt='yes' />
<img src={foto.foto3} alt='yes' />
<img src={foto.foto4} alt='yes' />
<img src={foto.foto5} alt='yes' />
<img src={foto.foto6} alt='yes' />
<img src={foto.foto7} alt='yes' />
<img src={foto.foto8} alt='yes' />
<img src={foto.foto9} alt='yes' /> */
}
