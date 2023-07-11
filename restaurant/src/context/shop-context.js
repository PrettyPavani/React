import React,{createContext} from 'react'

export const ShopContext = createContext(null);

function ShopContextProvider(props) {
  return (
    <ShopContext.Provider>

        {props.children}

    </ShopContext.Provider>
  )
}

