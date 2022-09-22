import Hero from "components/Hero";
import Container from "./components/Container";
import HomePage from "./pages/HomePage";
import Footer from 'components/Footer';



function App() {
  return (<>
    <Hero/>
    <Container>
      <HomePage/>
    </Container>
    <Footer/>
</>
  );
}

export default App;
