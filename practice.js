var firebaseConfig = {
    apiKey: "AIzaSyC7qJ2iDNHNfJpBdIhuHZYumYX_NH0Y_78",
    authDomain: "kwitter-f6964.firebaseapp.com",
    databaseURL: "https://kwitter-f6964-default-rtdb.firebaseio.com",
    projectId: "kwitter-f6964",
    storageBucket: "kwitter-f6964.appspot.com",
    messagingSenderId: "18573437816",
    appId: "1:18573437816:web:2f08eb5ccbd564c6d3368d"
  };
  
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });


    
}