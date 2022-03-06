import React from 'react'
import ReactDom from 'react-dom'
import App from './App';
import { Provider } from './context/context';
import './index.css'
import { SpeechProvider}from '@speechly/react-client';

ReactDom.render( 
    <SpeechProvider appId='07e558a3-d102-4cea-98d5-776b127f4100'>
<Provider>
<App/>
</Provider>,
</SpeechProvider>,
 document.getElementById('root'));