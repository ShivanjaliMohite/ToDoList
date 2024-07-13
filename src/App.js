import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Create from './Create';
import Display from './Display';
import Count from './Count';
import { useState } from 'react';
import Favourites from './Favourites';
import Serach from './Search';
function App() {
  const taskList=[{
    title:"Study",
    description:"I have to study DSA between 10:12"
  }]
  const favList=[{
    title:"Study",
    description:"I have to study DSA between 10:12"
  }]
  let [tasks,setTask]=useState(taskList)
  let [fav,setFav]=useState(favList)
  //console.log(fav)
 // console.log(tasks)
  const add=(title,des)=>{
    if(title && des)
    {
     let newTasklist=[...tasks]
     newTasklist.push({
         title:title,
         description:des
     })
     console.log(newTasklist)
     setTask(newTasklist)
    }
 }
 const merge=(status,title,des)=>{
    console.log(status)
    if(status==true)
    {
      
      let  newFav=[...fav]
      console.log("new fav") 
      console.log(fav)
      newFav.push({
        title:title,
        description:des
      })
      console.log(newFav)
      setFav(newFav)
    }
 }
 const remove=(index)=>{
   let newTasklist=[...tasks]
   newTasklist.splice(index,1)
   setTask(newTasklist)
 }
 const pop=(index)=>{
    let newfav=[...fav]
    newfav.splice(index,1)
    setFav(newfav)
 }
  return (
   <Router>
    <div>
    
      <Navbar/>
      <Routes>
        <Route path='/' element={<Count/>}>   
        </Route>
        <Route path='/home' element={<Count/>}>   
        </Route>
        <Route path='/search' element={<Serach taskData={tasks}/>}>   
        </Route>
        <Route path='/create' element={<Create add={add} merge={merge}/>}>
        </Route>
        <Route path='/display' element={<Display taskListf={tasks} remove={remove} />}>
        </Route>
        <Route path='/fav' element={<Favourites fav={fav} pop={pop}/>}>
        </Route>
        </Routes>
       
    </div>
   </Router>
  );
}

export default App;

