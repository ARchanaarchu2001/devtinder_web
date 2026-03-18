import Login from "./components/Login"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Feed from "./components/Feed"

function App() {
  return (
    <Provider store={appStore}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App