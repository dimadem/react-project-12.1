import React, { useState } from "react";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleMoreClick() {
    setTotal(total + 1);
  }

  function handleLessClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  return (
    <div className="item">
      <img src={info.image} alt={info.name} />
      <div className="item-info">
        <h2>{info.name}</h2>
        <p>{info.desc}</p>
      </div>
      <div className="item-quantity">
        <button
          className="item-less"
          disabled={total === 0}
          onClick={handleLessClick}
        >
          –
        </button>
        <h3 className="item-total">{total ? total : ""}</h3>
        <button className="item-more" onClick={handleMoreClick}>
          +
        </button>
      </div>
    </div>
  );
}
