import "./App.css"
import "../src/assets/componentStyles/common.css";
import Header from "./assets/components/header";
import CreateArea from "./assets/components/createArea";
function App() {
  return (
    <>
      <section className="main-sec-bg">
        <div className="main-div">
          <Header/>
          <CreateArea/>
        </div>
      </section>
    </>
  )
}

export default App
