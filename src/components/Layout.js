import { useState } from 'react';
import '../styles/Layout.css'
import Profile from '../components/Profile'
import datas from '../datas/data.json'
import Task from './Task';

function Layout(){

  const [activeCategory, setActiveCategory] = useState([]);
  console.log(activeCategory);


  return (
    <div className="Layout">
    <Profile 
    datas={datas}
    activeCategory={activeCategory} 
    setActiveCategory={setActiveCategory}/>
    <Task 
    datas={datas}
    activeCategory={activeCategory}/>
    </div>
  )
}

export default Layout