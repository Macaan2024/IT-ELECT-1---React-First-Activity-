import logo from './logo.svg';
import './App.css';
import Header from './Header';
import MainContent from './MainContent';
import Description from './Description';
import Footer from './Footer';
import Greetings from './Greetings';
import cards1 from './img/cards1.jpg';
import cards2 from './img/cards2.jpg';
import cards3 from './img/cards3.jpg';
function App() {
  return (
    <>
      <Header />
      <Greetings user="Elleiell" />
      <MainContent 
        image1={cards1}
        title1="Wolf"
        image2={cards2}
        title2="Tiger"
        image3={cards3}
        title3="Lion"
 />
      <Description />
      <Footer />
    </>
  );
}

export default App;
