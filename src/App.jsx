import React, { useState } from 'react'
import Search from './components/Search'


function App() {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <main>
      <div className='pattern'>
        <div className='wrapper'>
          <header>
            <img src="public/hero-img.png" alt='Hero-img'/>
            <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without the Hassle</h1>
          </header>

          <p><Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/></p>
          
        </div>
      </div>
    </main>
  )
}

export default App