import "./App.css";
import WilderList from "./components/WilderList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { WildersProvider } from "./context/WildersContext";
import AddWilderForm from "./components/AddWilder";

function App() {
  return (
    <WildersProvider>
      <Header />
      <AddWilderForm />
      <WilderList />
      <Footer />
    </WildersProvider>
  );
}

export default App;
