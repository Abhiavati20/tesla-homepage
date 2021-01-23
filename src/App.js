import Accessories from './assets/assets/Desktop-Accessories.jpg';
import ModelS from './assets/assets/Desktop-ModelS.jpeg';
import Model3 from './assets/assets/Desktop-Model3.jpeg';
import ModelX from './assets/assets/Desktop-ModelX.jpeg';
import ModelY from './assets/assets/Desktop-ModelY.jpeg';
import SolarPanels from './assets/assets/Desktop-SolarPanels.jpeg';
import SolarRoof from './assets/assets/Desktop-SolarRoof.jpeg';
import './App.css';
import Header from './components/Header';
import Item from './components/Item'
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="app__itemsContainer">
        <Item 
          title='Lowest Cost Solar Panels in America'
          desc='Money-back gurantee'
          backgroundImg={SolarPanels}
          leftBtnTxt='Order Now'
          rightBtnTxt='Learn More'
          twoButtons='true'
          first
        />
        <Item 
          title='Model S'
          desc='$69,420'
          backgroundImg={ModelS}
          leftBtnTxt='Custom Order'
          rightBtnTxt='Learn More'
          twoButtons='true'
        />
        <Item 
          title='Model 3'
          desc='Money-back gurantee'
          backgroundImg={Model3}
          leftBtnTxt='Custom Order'
          rightBtnTxt='Learn More'
          twoButtons='true'
        />
        <Item 
          title='Model X'
          desc='Money-back gurantee'
          backgroundImg={ModelX}
          leftBtnTxt='Custom Order'
          rightBtnTxt='Learn More'
          twoButtons='true'
        />
        <Item 
          title='Model Y'
          desc='Money-back gurantee'
          backgroundImg={ModelY}
          leftBtnTxt='Custom Order'
          rightBtnTxt='Learn More'
          twoButtons='true'
        />
        <Item 
          title='Solar Roof'
          desc='Money-back gurantee'
          backgroundImg={SolarRoof}
          leftBtnTxt='Custom Order'
          rightBtnTxt='Learn More'
          twoButtons='true'
        />
        <Item 
          title='Accessories'
          desc='Money-back gurantee'
          backgroundImg={Accessories}
          leftBtnTxt='Shop Now '
          rightBtnTxt='Learn More'
        />
      </div>
    </div>
  );
}

export default App;
