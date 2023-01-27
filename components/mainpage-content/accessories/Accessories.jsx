import Image from "next/image";
import "./Accessories.scss";
import AccessoriesImage1 from "../../../public/accessories/module2-1920-2x.webp";
import AccessoriesImage2 from "../../../public/accessories/mods-1920-2x.webp";
import AccessoriesImage3 from "../../../public/accessories/mounts-1920-2x-v2.webp";
import AccessoriesImage4 from "../../../public/accessories/protection-1920-2x.webp";
const Accessories = () => {
  return (
    <section className="accessoriesGallery">
      <div className="accessories__grid">
        <article className="accessories__article">
          <Image src={AccessoriesImage1} className="img" alt="accessoriesImg" />
          <figcaption className="accessories__figCaption caption1">Accessories to help you GoPro</figcaption>
        </article>
        <article className="accessories__article">
          <Image src={AccessoriesImage2} className="img" alt="accessoriesImg" />
          <figcaption className="accessories__figCaption caption2">Mods</figcaption>
        </article>
        <article className="accessories__article">
          <Image src={AccessoriesImage3} className="img" alt="accessoriesImg" />
          <figcaption className="accessories__figCaption caption3">Mounts</figcaption>
        </article>
        <article className="accessories__article">
          <Image src={AccessoriesImage4} className="img" alt="accessoriesImg" />
          <figcaption className="accessories__figCaption caption4">Protection</figcaption>
        </article>
      </div>
    </section>
  );
};

export default Accessories;
