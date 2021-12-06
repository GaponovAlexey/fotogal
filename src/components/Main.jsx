import { useState } from 'react'
import { CardList } from './pages/CardList'

const srs = 'https://random.imagecdn.app/400/150'

const foto = {
  foto1: 'https://source.unsplash.com/400x400?mountain',
  foto2: 'https://source.unsplash.com/400x400?nature',
  foto3: 'https://source.unsplash.com/400x400?valley',
  foto4: 'https://source.unsplash.com/400x400?beach',
  foto5: 'https://source.unsplash.com/400x400?ocean',
  foto6: 'https://source.unsplash.com/400x400?water',
  foto7: 'https://source.unsplash.com/400x400?trees',
  foto8: 'https://source.unsplash.com/400x400?lake',
  foto9: 'https://source.unsplash.com/400x400?cliff',
}

export const Main = () => {
  const [modal, setModal] = useState({
    madal1: false,
    madal2: false
  })
  
  const Fotogal = () => {
    return (
      <div className='grid' onClick={() => setModal({...modal, madal2: true})}>
        <img src={foto.foto1} alt='yes' />
        <img src={foto.foto2} alt='yes' />
        <img src={foto.foto3} alt='yes' />
        <img src={foto.foto4} alt='yes' />
        <img src={foto.foto5} alt='yes' />
        <img src={foto.foto6} alt='yes' />
        <img src={foto.foto7} alt='yes' />
        <img src={foto.foto8} alt='yes' />
        <img src={foto.foto9} alt='yes' />
      </div>
    )
  }

  return (
    <div>
      <CardList
        title={'hello from react1'}
        isOpened={modal.madal1}
        onModalClose={setModal}
      >
        <img src={foto.foto1} alt='yes' />
      </CardList>

      <CardList
        title={'hello from react2'}
        isOpened={modal.madal2}
        onModalClose={setModal}
      >
        <img src={foto.foto1} alt='yes' />
      </CardList>

      <Fotogal />
    </div>
  )
}
