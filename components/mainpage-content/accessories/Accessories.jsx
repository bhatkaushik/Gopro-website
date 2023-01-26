import Image from "next/image";
import "./Accessories.scss";
import AccessoriesImage1 from "../../../public/accessories/module2-1920-2x.webp";
import AccessoriesImage2 from "../../../public/accessories/mods-1920-2x.webp";
import AccessoriesImage3 from "../../../public/accessories/mounts-1920-2x-v2.webp";
import AccessoriesImage4 from "../../../public/accessories/protection-1920-2x.webp";
const Accessories = () => {
  return (
    <section className="accessoriesGallery">
      <div className="accessories__container">
        <Image
          src={AccessoriesImage1}
          className="accessories__moduleImg"
          alt="accessoriesImg"
        />
      </div>

      <div className="accessories__secand__wrapper">
        <Image src={AccessoriesImage2} className="accessories__moduleImg" alt="accessoriesImg" />
        <div className="accessories__third__wrapper">
          <Image src={AccessoriesImage3} className="accessories__smallImg"  alt="accessoriesImg" />
          <Image src={AccessoriesImage4} className="accessories__smallImg" alt="accessoriesImg" />
        </div>
      </div>
    </section>
  );
};

export default Accessories;
