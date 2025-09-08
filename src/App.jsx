import { useState } from 'react'
import './index.css'

const Card =({title}) =>{
  return(
    <>
    <div className='border-1 boder-[#4b5362] p-5 m-2.5 bg-[#31363f] rounded-[10px] min-h-25'>
      <h2 className='text-[#f3f3f3] text-center text-[48px]'>{title}</h2>
    </div>
    </>
  )
}
const App = ()=> {
  return (
  <>
   <div className='flex flex-wrap justify-center max-w-5xl my-auto'>
     <Card title="Star Wars" ratings={5} isCool={true} />
     <Card title="Avatar"/>
     <Card title="The Lion King"/>
   </div>

  </>
  )
}


export default App
