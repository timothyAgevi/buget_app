import React from 'react'
import ReactDom from 'react-dom'
import App from './App';
import { Provider } from './context/context';
import './index.css'
import { SpeechProvider}from '@speechly/react-client';

ReactDom.render( 
    <SpeechProvider>
<Provider>
<App/>
</Provider>,
</SpeechProvider>
 document.getElementById('root'));