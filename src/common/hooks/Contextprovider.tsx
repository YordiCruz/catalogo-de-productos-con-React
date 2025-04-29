import React, { createContext } from 'react'
type CategoryType = {
  slug: string,
  name: string,
  url: string
};

const context = createContext<CategoryType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
    
}


const Contextprovider = () => {
  return (
    <div>
      
    </div>
  )
}

export default Contextprovider
