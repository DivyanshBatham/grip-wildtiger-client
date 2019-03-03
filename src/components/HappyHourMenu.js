import React from "react";
import MenuList from "./Menulist";

import happyhourdata from "../happyhourdata";

const HappyHourMenu = () => {
  return (
    <div className="happyhour">
      <h5 className="happyhour__heading">Happy Hour Menu</h5>
      <p className="happyhour__description">
        Visit us between 3PM-6PM or 8PM+ and get special discount offers on the
        menu *
      </p>
      {Object.keys(happyhourdata).map(category => (
        <MenuList category={category} data={happyhourdata[category]} />
      ))}
      <p className="happyhour__terms">
        * available for dine-in only, requires a minimum of one drink per
        person.
      </p>
    </div>
  );
};

export default HappyHourMenu;
