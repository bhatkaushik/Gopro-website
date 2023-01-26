import "./Categories.scss";
import categoryImage1 from "../../../public/categories/backpacks.webp";
import categoryImage2 from "../../../public/categories/clothing.webp";
import categoryImage3 from "../../../public/categories/lifestyle.webp";
import categoryImage4 from "../../../public/categories/gopro.webp";
import Image from "next/image";

const Categories = () => {
  return (
    <section className="categories">
      <div className="categroies__container1">
        <Image
          src={categoryImage1}
          className="largeImg"
          alt="categoryImage"
        />
        {/* Backpacks + Bags */}
        <div className="categories__subContainer">
          <Image
            src={categoryImage2}
            className="smallImg"
            alt="categoryImage"
          />
          {/* Clothing */}
          
          <Image
            src={categoryImage3}
            className="smallImg"
            alt="categoryImage"
          />
          {/* Lifestyle */}
        </div>
      </div>
      <div className="categories__container">
        <Image
          src={categoryImage4}
          className="largeImg"
          alt="categoryImage"
        />
        {/* Gear designed for the GoPro lifestyle */}
      </div>
    </section>
  );
};

export default Categories;
