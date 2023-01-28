import React from "react";
import Accessories from "./accessories/Accessories";
import Cameras from "./cameras/Cameras";
import Carousel from "./carousel/Carousel";
import Categories from "./categories/Categories";
import Flyer from "./flyer/Flyer";
import Subscribe from "./Subscribe/Subscribe";
import './MainPageContentLayout.scss'

const MainPageContentLayout = () => {
  return (
    <section className="MainPageContentLayout">
       <div className="spacerbar__long"></div>
      <Flyer />
      <div className="spacerbar__long"></div>
      <Carousel />
      <div className="spacerbar__long"></div>
      <Cameras />
      <div className="spacerbar__short"></div>
      <div className="spacerbar__long"></div>
      <Accessories />
      <div className="spacerbar__long"></div>
      <div className="spacerbar__short"></div>
      <Subscribe />
      <div className="spacerbar__long"></div>
      <div className="spacerbar__short"></div>

      <Categories />
      <div className="spacerbar__long"></div>
      <div className="spacerbar__short"></div>

    </section>
  );
};

export default MainPageContentLayout;
