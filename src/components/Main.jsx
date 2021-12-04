import { CardList } from "./pages/CardList"

const srs = 'https://random.imagecdn.app/300/150'

export const Main = () => {
  
  return (
    <div className='main' style={{ backgroundColor: 'green', gap: 22 }}>
      <div className='main-conteiner' >
      <CardList srs={srs }/>
      </div>
    </div>
  )
}
