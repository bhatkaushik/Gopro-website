import "./Categories.scss";
import categoryImage1 from "../../../public/categories/backpacks.webp";
import categoryImage2 from "../../../public/categories/clothing.webp";
import categoryImage3 from "../../../public/categories/lifestyle.webp";
import categoryImage4 from "../../../public/categories/gopro.webp";
import Image from "next/image";

const Categories = () => {
  return (
    <section className="categories">
      <div className="grid-container">
        <article className="categoriesImgArticle">
          <Image src={categoryImage1} className="img" alt="categoryImage" />
          <figcaption className="categories__figCaption caption1">Backpacks <br /> + Bags</figcaption>
        </article>
        <article className="categoriesImgArticle">
          <Image src={categoryImage2} className="img" alt="categoryImage" />
          <figcaption className="categories__figCaption caption2 "> Clothing</figcaption>
        </article>
        <article className="categoriesImgArticle">
          <Image src={categoryImage3} className="img" alt="categoryImage" />
          <figcaption className="categories__figCaption caption3"> Lifestyle</figcaption>
        </article>
        <article className="categoriesImgArticle">
          <Image src={categoryImage4} className="img" alt="categoryImage" />
          <figcaption className="categories__figCaption caption4"> Gear designed for the GoPro lifestyle</figcaption>
        </article>
      </div>
    </section>
  );
};

export default Categories;
