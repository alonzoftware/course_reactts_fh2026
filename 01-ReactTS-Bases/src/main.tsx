import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import './bases/01-const-let'
// import './bases/02-template-string'
// import './bases/03-object-literal'
// import './bases/04-arrays'
// import './bases/05-functions'
import './bases/06-obj-destructuring'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1>Hello, World!</h1>
  </StrictMode>,
)
