import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main className="p-[40px] bg-[#151515] font-franklin">
      <App/>
    </main>
    
  </StrictMode>,
)
