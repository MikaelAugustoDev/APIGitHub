import { AppRoutes } from "./pages/routes"
import { createGlobalStyle } from "styled-components"

function App() {
  

  return (
    <>
      <GlobalStyle/>
      <AppRoutes/>
      
    </>
  )
}

export default App

const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Roboto', sans-serif;
  }
`