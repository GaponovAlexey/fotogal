import { CardList } from "./pages/CardList"

const srs = 'https://random.imagecdn.app/400/150'

export const Main = () => {
  
  return (
    <div className='main' style={{ backgroundColor: 'green', gap: 22 }}>
      <div className='grid' >
      <img src='https://source.unsplash.com/400x400?mountain' alt='yes' />
      <img src='https://source.unsplash.com/400x400?nature' alt='yes' />
      <img src='https://source.unsplash.com/400x400?valley' alt='yes' />
      <img src='https://source.unsplash.com/400x400?beach' alt='yes' />
      <img src='https://source.unsplash.com/400x400?ocean' alt='yes' />
      <img src='https://source.unsplash.com/400x400?water' alt='yes' />
      <img src='https://source.unsplash.com/400x400?trees' alt='yes' />
      <img src='https://source.unsplash.com/400x400?lake' alt='yes' />
      <img src='https://source.unsplash.com/400x400?cliff' alt='yes' />
      </div>
    </div>
  )
}
