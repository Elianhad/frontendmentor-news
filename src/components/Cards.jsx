import imgGaming from '../assets/images/image-gaming-growth.jpg'
import imgRetroPC from '../assets/images/image-retro-pcs.jpg'
import imgLaptops from '../assets/images/image-top-laptops.jpg'

const cardContent = [
  {
    id: '01',
    title: 'Reviving Retro PCs',
    description: 'What happens when old PCs are given modern upgrades?',
    img: imgRetroPC
  },
  {
    id: '02',
    title: 'Top 10 Laptops of 2022s',
    description: 'Our best picks for various needs and budgets.',
    img: imgLaptops
  },
  {
    id: '03',
    title: 'The Growth of Gaming How',
    description: 'the pandemic has sparked fresh opportunities.',
    img: imgGaming
  }
]

const Cards = () => {
  return (
    <section className='card-section'>
      {cardContent.map((card) => {
        return (
          <div key={card.id} className='card'>
            <div className='card-img'>
              <img src={card.img} alt={card.title} />
            </div>
            <div className='card-content'>
              <span className='card-number'>{card.id}</span>
              <a href='#'><h3 href='#'>{card.title}</h3></a>
              <p className='card-description'>{card.description}</p>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Cards
