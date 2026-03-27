import Login from "./components/Login"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Feed from "./components/Feed"
import Profile from "./pages/Profile"
import Connection from "./pages/Connection"

function App() {
  return (
    <Provider store={appStore}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/connection" element={<Connection />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App