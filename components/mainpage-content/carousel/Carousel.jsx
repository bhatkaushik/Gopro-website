import Image from 'next/image'
import './Carousel.scss'
import carouselImg1 from '../../../public/carouselImages/ski-nav-2x.webp'
import carouselImg2 from '../../../public/carouselImages/snowboard-nav-2x.webp'
import carouselImg3 from '../../../public/carouselImages/mtb-nav-2x.webp'
import carouselImg4 from '../../../public/carouselImages/hike-camp-nav-2x.webp'
import carouselImg5 from '../../../public/carouselImages//dive-snorkel-nav-2x.webp'
import carouselImg6 from '../../../public/carouselImages/travel-adventure-nav-2x.webp'
import carouselImg7 from '../../../public/carouselImages/surf-nav-2x.webp'

const Carousel = () => {
  return (
  <section className='carousel'>
    <h2>Shop by Activity</h2>
    <div className="cardsWrapper">
        <div className="cardItem">
            <Image src={carouselImg1} className="carouselImg" alt='cardImage' />
            <div className="cardCaption">SKI</div>
       </div>
        <div className="cardItem">
            <Image src={carouselImg2} className="carouselImg" alt='cardImage' />
            <div className="cardCaption">SNOWBOARD</div>
       </div>
        <div className="cardItem">
            <Image src={carouselImg3} className="carouselImg" alt='cardImage' />
            <div className="cardCaption">MOUNTAIN BIKE</div>
       </div>
        <div className="cardItem">
            <Image src={carouselImg4} className="carouselImg" alt='cardImage' />
            <div className="cardCaption">HIKE + CAMP</div>
       </div>
        <div className="cardItem">
            <Image src={carouselImg5} className="carouselImg" alt='cardImage' />
            <div className="cardCaption">DIVE +SNORKEL</div>
       </div>
        <div className="cardItem">
            <Image src={carouselImg6} className="carouselImg" alt='cardImage' />
            <div className="cardCaption">TRAVEL + ADVENTURE</div>
       </div>
        <div className="cardItem">
            <Image src={carouselImg7} className="carouselImg" alt='cardImage' />
            <div className="cardCaption">SURF</div>
       </div>
    </div>
  </section>
  )
}

export default Carousel