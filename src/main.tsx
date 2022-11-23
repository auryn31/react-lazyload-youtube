import React from 'react'
import ReactDOM from 'react-dom/client'
import { Youtube } from './Youtube'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div style={{width: '400px', height: '300px'}}>
      <Youtube videoId='bGH_wjJ6kM0'/>
    </div>
  </React.StrictMode>
)
