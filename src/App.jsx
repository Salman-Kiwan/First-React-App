import { useState } from 'react'
import './index.css'

const Card =({title}) =>{
  return(
    <>
    <h2 className='text-[f3f3f3]'>{title}</h2>
    </>
  )
}
const App = ()=> {
  return (
  <>
   <h2> Functional Arrow Componenet </h2>

   <Card title="Star Wars" ratings={5} isCool={true} actors={[{name:"Actors"}]}/>
   <Card title="Avatar"/>
   <Card title="The Lion King"/>

  </>
  )
}


export default App
