import './style.css'
import { Card } from '../Card'
import { comidas } from '../../data/index.js'

export default function Body() {
  return (
    <>
      <h1 className="h1_home">Fast-Foot House</h1>
      <div className='container_cards_home'>
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
        {
          comidas.map((item) => (
            <Card item={item} />
          ))
        }
      </div>
    </>
  )
}