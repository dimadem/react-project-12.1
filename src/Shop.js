import React, { useEffect, useState } from "react";
import Item from "./Item.js";
import useFetch from "./useFetch";
import "./index.css";

export default function Shop() {
  const [items, setItems] = useState([]);

  const { get, loader } = useFetch();

  useEffect(() => {
    get("https://covid-shop-mcs.herokuapp.com/")
      .then((data) => setItems(data))
      .catch((error) => console.log(error));
    console.log("message");
  }, [get]);

  return (
    <div className="shop">
      {loader ? (
        <>
          <div className="loader">
            <h1>"Загружается"</h1>
          </div>
        </>
      ) : (
        ""
      )}
      {items.map((item) => (
        <Item key={item.id} info={item} />
      ))}
    </div>
  );
}
