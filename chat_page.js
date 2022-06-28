var firebaseConfig = {
  apiKey: "AIzaSyCnOiy_33_7uZQ6uh0lJeW7_gpqwJSNro4",
  authDomain: "let-s-chat-app-by-saanvi.firebaseapp.com",
  databaseURL: "https://let-s-chat-app-by-saanvi-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-app-by-saanvi",
  storageBucket: "let-s-chat-app-by-saanvi.appspot.com",
  messagingSenderId: "248686667016",
  appId: "1:248686667016:web:66e9560455aa5c88b138bd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send()
{
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value="";
}

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";

}

//YOUR FIREBASE LINKS
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();