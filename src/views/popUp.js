import {
    USER_INTERFACE_ID,
  } from '../constants.js';

export const popUp = () => {

const userInterface = document.getElementById(USER_INTERFACE_ID);

// Create the popup element
const popup = document.createElement('div');
popup.classList.add('popup');

// Create the popup content
const popupContent = document.createElement('div');
popupContent.classList.add('popup-content');

// Create the popup message
const popupMessage = document.createElement('p');
popupMessage.textContent = 'Please select an answer and submit.';

// Append the popup message to the popup content
popupContent.appendChild(popupMessage);

// Append the popup content to the popup
popup.appendChild(popupContent);

// Append the popup to the user interface
userInterface.appendChild(popup);

// Automatically dismiss the popup after 3 seconds
setTimeout(() => {
  popup.remove();
}, 3000);
}



export const errorPopUp = () => {

  const userInterface = document.getElementById(USER_INTERFACE_ID);
  
  // Create the popup element
  const popup = document.createElement('div');
  popup.classList.add('popup');
  
  // Create the popup content
  const popupContent = document.createElement('div');
  popupContent.classList.add('popup-content');
  
  // Create the popup message
  const popupMessage = document.createElement('p');
  var line1 = document.createTextNode("Sorry!..We couldn't fetch the questions from the server.");
  var line2 = document.createTextNode("Please try another category.");

  popupMessage.appendChild(line1);
  popupMessage.appendChild(document.createElement("br"));
  popupMessage.appendChild(line2);
  // Append the popup message to the popup content
  popupContent.appendChild(popupMessage);
  
  // Append the popup content to the popup
  popup.appendChild(popupContent);
  
  // Append the popup to the user interface
  userInterface.appendChild(popup);
  
  // Automatically dismiss the popup after 3 seconds
  setTimeout(() => {
    popup.remove();
  }, 3000);
  }