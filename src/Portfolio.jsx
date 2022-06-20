import React,{useState} from 'react';
import './index.css';
import Cards from './Cards';
import Data from './Portfoliodata';
import Navbar from './Navbars';

const unicat= ["All",... new Set(Data.map((curElem)=>{
  return curElem.category
}))]

const App=() =>{
  const [menu,setmenu]=useState(Data);
  const [menuList,setmenuList]=useState(unicat);

  const filterItem=(category)=>{

    if(category==="All"){
      setmenu(Data);
      return
    }

    const updateList = Data.filter((curElem) =>{
      return curElem.category===category;
  });
  setmenu(updateList);
};
 return (
    <>
    <div class="portfolio" name="portfolio" id="portfolio">
    <Navbar filterItem={filterItem} menuList={menuList}/>
      <Cards menu={menu}/>
      </div>
      </>
  );
}

export default App;
