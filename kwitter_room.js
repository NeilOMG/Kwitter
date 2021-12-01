
var firebaseConfig = {
      apiKey: "AIzaSyCSUZEW3xCrGiGP0gJGmKxFkfWVU6uJtfw",
      authDomain: "kwitter-24ae6.firebaseapp.com",
      databaseURL: "https://kwitter-24ae6-default-rtdb.firebaseio.com",
      projectId: "kwitter-24ae6",
      storageBucket: "kwitter-24ae6.appspot.com",
      messagingSenderId: "727764159544",
      appId: "1:727764159544:web:65cbccb1922ef37e566acd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name")
document.getElementById("name").innerHTML = user_name

function add_room() {

      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({

            purpose: "creating room"
      })

      localStorage.setItem("room_name", room_name)
      window.location = "kwitter_page.html"
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
             snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
                  document.getElementById("output").innerHTML +=row
                  //End code
            });
      });
}
getData();

function redirectToRoomName(x){

console.log(x);
localStorage.setItem("room_name", x)
 window.location = "kwitter_page.html"

}

function logout(){

localStorage.removeItem("user_name")
localStorage.removeItem("room_name")
window.location="index.html"
}
