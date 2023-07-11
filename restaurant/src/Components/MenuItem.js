import React from 'react'

function MenuItem({image,name,price}) {
  return (
    <div className='menuItem'>
        <div className='menu' style={{backgroundImage:`url(${image})`}}>    </div>
        <h1 className='menuTitle'>
            {name}
        </h1>
        <p>
            ${price}
        </p>
        <div>
          <button className='addToCartBtn'>
            Add To Cart
          </button>
        </div>

    </div>
  )
}

export default MenuItem