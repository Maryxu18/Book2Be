import app from 'firebase/app';

const config = {
    apiKey: "AIzaSyBqjHyx0J2VkGOgfhYb7sCLqiGXlPfQQZA",
    authDomain: "book2be-eeefa.firebaseapp.com",
    databaseURL: "https://book2be-eeefa.firebaseio.com",
    projectId: "book2be-eeefa",
    storageBucket: "book2be-eeefa.appspot.com",
    messagingSenderId: "283165997151",
    appId: "1:283165997151:web:c6db7237f4bed93ac943ea"
  };

  class Firebase {
    constructor() {
      app.initializeApp(config);
    }
  }

  export default Firebase;
  