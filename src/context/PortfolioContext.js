import { createContext } from "react"

const PortfolioContext = createContext({

  value: 0,
  setValue: () => { },
  mobileOpen: false,
  setMobileOpen: () => { },

  mode: "",
  setMode: "",
  handleChangeMode:()=>{},

  handleChange: () => { },
  handleDrawerToggle: () => { },
  tabProps: () => { },

})
export default PortfolioContext;