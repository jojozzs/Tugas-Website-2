import $ from "jquery";
import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import changingtext from "./changingtext.js";


$('#app').html( `
  <div>
    <h1 id="isi">Hello Vite!</h1>
    <div class="card">
      <button id="changetext" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>  
    
  </div>
`
)

changingtext($('#changetext'))
