import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import GlobalStyles from './Styles/Global.tsx'
import { SystemLayout } from './Layout/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <SystemLayout>
      <App />
    </SystemLayout>
  </React.StrictMode>,
)
