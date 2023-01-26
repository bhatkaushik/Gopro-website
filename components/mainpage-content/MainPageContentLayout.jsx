import React from "react";
import Accessories from "./accessories/Accessories";
import Cameras from "./cameras/Cameras";
import Carousel from "./carousel/Carousel";
import Categories from "./categories/Categories";
import Flyer from "./flyer/Flyer";
import Subscribe from "./Subscribe/Subscribe";

const MainPageContentLayout = () => {
  return (
    <section className="MainPageContentLayout">
      <div className="spacerbar__short"></div>
      <Flyer />
      <div className="spacerbar__long"></div>
      <Carousel />
      <div className="spacerbar__short"></div>
      <Cameras />
      <div className="spacerbar__long"></div>
      <Accessories />
      <div className="spacerbar__long"></div>

      <Subscribe />
      <div className="spacerbar__long"></div>

      <Categories />
      <div className="spacerbar__long"></div>

    </section>
  );
};

export default MainPageContentLayout;
