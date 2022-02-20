import React, { useEffect, useState } from "react";
import "./MenuList.css";
import { menuList } from "./menuListMockData";

export const MenuList = () => {
  const [filterItems, setFilterItems] = useState([]);

  let menu = menuList;
  let res = [];
  const [item, setItems] = useState(menu);

  const handleChange = (e) => {
    if (e.target.checked) {
      setFilterItems([...filterItems, e.target?.value]);
    } else {
      let ele = filterItems.find((item) => item == e.target.value);
      let index = ele ? filterItems.indexOf(ele) : null;
      filterItems.splice(index, 1);
      setFilterItems([...filterItems]);
    }
  };

  const filterHandler = (filterOptions) => {
    filterOptions.length == 0 && setItems(menuList);
    menu = menu.filter((item, index) => {
      for (let i = 0; i < filterOptions.length; i++) {
        if (item[filterOptions[i]] == true) {
          res.push(item);
          setItems([...new Set(res)]);
        }
      }
    });
  };
  useEffect(() => filterHandler(filterItems), [filterItems]);
  return (
    <div id="mainContainer">
      <div id="topbar">
        <h2>{"Cusine"}</h2>
      </div>
      <div id="container">
        <div id="sideBar">
          <h2>{"Filter Items"}</h2>
          <h4>{"Food Type"}</h4>
          <div id="inputWrapper">
            <input
              id="veg"
              type={"checkbox"}
              value={"isVeg"}
              onChange={handleChange}
            />
            <label htmlFor="veg">Veg</label>
            <div>
              <input
                id="veg"
                type={"checkbox"}
                value={"isNonVeg"}
                onChange={handleChange}
              />
              <label htmlFor="veg">Non-Veg</label>
            </div>
          </div>
          <div>
            <h4>{"Ingredients"}</h4>
            <input
              id="butter"
              type={"checkbox"}
              value={"hasButter"}
              onChange={handleChange}
            />
            <label htmlFor="butter">Has Butter</label>
          </div>
          <div>
            <input
              id="cheese"
              type={"checkbox"}
              value={"hasCheese"}
              onChange={handleChange}
            />
            <label htmlFor="cheese">Has Cheese</label>
          </div>
          <div>
            <input
              id="snack"
              type={"checkbox"}
              value={"snack"}
              onChange={handleChange}
            />
            <label htmlFor="snack">Snack</label>
          </div>
          <div>
            <input
              id="juice"
              type={"checkbox"}
              value={"isDrink"}
              onChange={handleChange}
            />

            <label htmlFor="juice">Juice</label>
          </div>
          <h4>{"Location"}</h4>
          <div>
            <input
              id="american"
              type={"checkbox"}
              value={"isAmerican"}
              onChange={handleChange}
            />
            <label htmlFor="cheese">American</label>
          </div>
          <div>
            <input
              id="american"
              type={"checkbox"}
              value={"isIndian"}
              onChange={handleChange}
            />
            <label htmlFor="cheese">Indian</label>
          </div>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <div>
            <h2 style={{ margin: 0 }}>{"Menu Items"}</h2>
          </div>
          <div id="menuList">
            {item.map((item, index) => {
              return (
                <div id="itemCard" key={index}>
                  <img src={item.img} width="100%" height={"50%"} />
                  <h3>{item.name}</h3>
                  <h5>
                    {"Rs. "}
                    {item.price}
                  </h5>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
