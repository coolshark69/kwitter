
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBTgYYOsJAEf8rtfPwu2XLfHN0fPlXBM1s",
      authDomain: "test-6b314.firebaseapp.com",
      databaseURL: "https://test-6b314-default-rtdb.firebaseio.com",
      projectId: "test-6b314",
      storageBucket: "test-6b314.appspot.com",
      messagingSenderId: "425349772283",
      appId: "1:425349772283:web:6b3078c47b21f0ce32515e"
    };
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
