import "./App.css"
import Header from "./components/Header/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import Landing from "./screens/Landing/Landing"
import SignUp from "./screens/Signup/SignUp"
import Login from "./screens/Login/Login"

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: `'Roboto Mono', monospace`,
      fontWeightLight: 400,
      fontWeightRegular: 600,
      fontWeightMedium: 900,
    },
  },
})
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <div style={{ marginTop: "100px" }}>
          <Routes>
            <Route exact path='/' element={<Landing />} />
            <Route path='signup' element={<SignUp />} />
            <Route path='login' element={<Login />} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
