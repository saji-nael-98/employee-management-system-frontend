import React from 'react'
import ReactDOM from 'react-dom/client'
import { App, Providers } from './app'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')!).render(
  
    <Providers>
      <App />
    </Providers>
  ,
)
