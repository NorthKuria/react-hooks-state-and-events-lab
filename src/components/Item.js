import React, { useState } from 'react'

function Item({ name, category }) {
  const [cart, setCart] = useState(false)

  const cname = cart ? 'in-cart' : ''
  const text = cart ? 'Remove From Cart' : 'Add to Cart'

  const handleClick = () => {
    setCart((prev) => !prev)
  }

  return (
    <li className={cname}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>
        {text}
      </button>
    </li>
  )
}

export default Item
