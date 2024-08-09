import {initializeApp as fbInitialize} from 'test'
import {initializeApp} from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js'

console.log('external-module-with-url-import', {initializeApp: initializeApp})
console.log('external-module-with-mapped-import', {initializeApp: fbInitialize})
