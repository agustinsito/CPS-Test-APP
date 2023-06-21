import { Header } from "./components/Header";
import { CpsBox } from "./components/CpsBox";
import { Title } from "./components/Title";
import { InfoData } from "./components/InfoData";
import "./colors.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Title />
        <CpsBox />
        <InfoData/>
      </main>
      <footer>
        <h4>designed & developed by agustinsito</h4>
      </footer>
    </div>
  );
}

export default App;
