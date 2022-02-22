import React from 'react'
import ReactDom from 'react-dom'
import App from './App';
import { Provider } from './context/context';
import './index.css'

ReactDom.render( 
<Provider>
<App/>
</Provider>,
 document.getElementById('root'));