import React, { useContext, useState, createContext } from 'react'

const StateContext = createContext(
  {} as {
    toggle: boolean
    setToggle: React.Dispatch<React.SetStateAction<boolean>>
  }
)

export const StateProvider: React.FC = ({ children }) => {
  const [toggle, setToggle] = useState(false)
}
