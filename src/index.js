import _ from 'lodash';
import Json from './assets/data.json';
// import printMe from './print';
// import './assets/style.css';
// import Food from './assets/food.png'
// import xmlData from './assets/xmlData.xml';
function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], Json.hello);
    element.classList.add('hello')
    //引入各种assets
    // const myFood = new Image();
    // myFood.src=Food;
    // element.appendChild(myFood)
    // console.log(xmlData);
    return element;
  }
  
  document.body.appendChild(component());