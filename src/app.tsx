import { Header } from "components/cummon/header"
import { Home } from "components/cummon/home"
import "./app.scss";

export const App = () => {
  return <div className="wrapper">
    <Header/>
    <Home/>
  </div>
}