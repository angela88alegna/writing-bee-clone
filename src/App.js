import React, {useState} from 'react'
import './App.css';
import Appbar from './components/Appbar'
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import FourthSection from './components/FourthSection'
import Footer from './components/Footer';
import FifthSection from './components/FifthSection'
import SixthSection from './components/SixthSection';



function App() {
const [appBar, setAppBar]= useState(false)


  return (
    <div className="App">
      
       <Appbar appBar={appBar} setAppBar={setAppBar}/>
     
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
<SixthSection/>
      <Footer/>
    </div>
  );
}

export default App;
