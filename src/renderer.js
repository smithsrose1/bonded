/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './index.css';


const feedButton = document.getElementById('feed-button');
const drinkButton = document.getElementById('drink-button');
const cleanButton = document.getElementById('clean-button');
const sleepButton = document.getElementById('sleep-button');
const playButton = document.getElementById('play-button');

feedButton.addEventListener('click', () => {
  console.log('Feeding the kitty!');
});

drinkButton.addEventListener('click', () => {
  console.log('Pouring water for the kitty!');
});

cleanButton.addEventListener('click', () => {
  console.log('Bathing the kitty!');
});

sleepButton.addEventListener('click', () => {
  console.log('Putting the kitty to sleep!');
});

playButton.addEventListener('click', () => {
  console.log('Playing with the kitty!');
});


console.log(
  '👋 This message is being logged by "renderer.js", included via Vite',
);
