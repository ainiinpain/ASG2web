// Your web app's Firebase configuration 
const firebaseConfig = { 
    apiKey: "AIzaSyCH7LX3EBZNUnm0Z7QYdmrPKa01LafYAgM", 
    authDomain: "dda-project-test-1-f4af8.firebaseapp.com", 
    databaseURL: "https://dda-project-test-1-f4af8-default-rtdb.asia-southeast1.firebasedatabase.app", 
    projectId: "dda-project-test-1-f4af8", 
    storageBucket: "dda-project-test-1-f4af8.appspot.com", 
    messagingSenderId: "239445133731", 
    appId: "1:239445133731:web:15c3b569d08dfa1ee3f216" 
  }; 
 
  // Initialize Firebase 
  const app = initializeApp(firebaseConfig); 

  var database=firebase.database()

function save()
{
  preventDefault()
  var email= document.getElementById('email').value
  var password= document.getElementById('password').value

  database.ref('users/' + email).set({
    email : email,
    password : password
  })
  alert('Saved')
}