import Image from "next/image";
import "./Carousel.scss";
import carouselImg1 from "../../../public/carouselImages/ski-nav-2x.webp";
import carouselImg2 from "../../../public/carouselImages/snowboard-nav-2x.webp";
import carouselImg3 from "../../../public/carouselImages/mtb-nav-2x.webp";
import carouselImg4 from "../../../public/carouselImages/hike-camp-nav-2x.webp";
import carouselImg5 from "../../../public/carouselImages//dive-snorkel-nav-2x.webp";
import carouselImg6 from "../../../public/carouselImages/travel-adventure-nav-2x.webp";
import carouselImg7 from "../../../public/carouselImages/surf-nav-2x.webp";

const Carousel = () => {

  // array of objects containing img src and caption
  const carouselImages = [
    {
      id: 1,
      carouselImgLink: carouselImg1,
      cardCaption: "SKI",
    },
    {
      id: 2,
      carouselImgLink: carouselImg2,
      cardCaption: "SNOWBOARD",
    },
    {
      id: 3,
      carouselImgLink: carouselImg3,
      cardCaption: "MOUNTAIN BIKE",
    },
    {
      id: 4,
      carouselImgLink: carouselImg4,
      cardCaption: "HIKE + CAMP",
    },
    {
      id: 5,
      carouselImgLink: carouselImg5,
      cardCaption: "DIVE +SNORKEL",
    },
    {
      id: 6,
      carouselImgLink: carouselImg6,
      cardCaption: "TRAVEL + ADVENTURE",
    },
    {
      id: 7,
      carouselImgLink: carouselImg7,
      cardCaption: "SURF",
    },
  ];

  return (
    <section className="carousel">
      <h2>Shop by Activity</h2>
      <div className="cardsWrapper">
        {carouselImages.map((cardData) => {
          return (
            <article key={cardData.id} className="cardItem">
              <Image
                src={cardData.carouselImgLink}
                className="img"
                alt="cardImage"
              />
              <figcaption className="cardCaption">{cardData.cardCaption}</figcaption>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Carousel;

