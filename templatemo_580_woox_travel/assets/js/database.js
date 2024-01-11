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

  //Initialize variables
  const auth= firebase.auth()
  const database = firebase.database()

  //var database=firebase.database()

//function save()
//{
  //preventDefault()
  //var email= document.getElementById('email').value
  //var password= document.getElementById('password').value

  //database.ref('users/' + email).set({
  //  email : email,
  //password : password
  //})
  //alert('Saved')
//}







//setting up register function
function register() {
  event.preventDefault();
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value; // Make sure the ID is correct here

  // Validate input fields
  if (!validate_email(email) || !validate_password(password)) {
    alert('Email or Password is incomplete or not valid');
    return;
  }

  auth.createUserWithEmailAndPassword(email, password)
  .then(function(response) {
    // User account created successfully
    var user = response.user; // Using response to get user data

    // Save additional user data to Firebase Realtime Database
    var user_data = {
      email: email,
      name: document.getElementById('name').value,
      last_login: Date.now()
    };

    // Corrected path to use UID provided by Firebase
    database.ref('users/' + user.uid).set(user_data)
    .then(function() {
      alert('User account created and data saved.');
    })
    .catch(function(error) {
      alert('Error saving user data: ' + error.message);
    });
  })
  .catch(function(error) {
    alert('Error creating user: ' + error.message);
  });
}

function validate_password(password) {
  // Corrected to check password length
  if (password.length < 6) {
    return false;
  } else {
    return true;
  }
}

// ... Keep the rest of your functions unchanged ...

//set up login function 
function login()
{
  email = document.getElementById('email').value
  password=document.getElementById('Password').value

  //validate input feilds 
  if (validate_email(email)==false || validate_password(password)==false)
  {
    alert ('Email or Password is Incomplete')
    return
  }
  auth.signInWithEmailAndPassword(email , password)
  .then(function()
  {
    var user = auth.currentUser

    var database_ref = database.ref()
  
    //create user data
    var user_data =
    {
      last_login : Date.now()

    }

    database_ref.child('users/' + user.uid).update(user_data)

    alert ('User Successfully Logged In!')


  })
  .catch(function()
  {
    //firebase will alert if there are any errors
    var error_code = error.code
    var error_message =error.message 
    alert(error_message)
  })
}

//validate the functions
function validate_email(email)
{
  expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email)==true)
  {
    return true 
  } 
  else
  {
    return false
  }
}

function validate_password(password)
{
  if (password<6)
  {
    return false 
  }
  else
  {
    return true
  }
}

function validate_field (field)
{
  if (field==null)
  {
    return false
  }
  if (field.length <= 0)
  {
    return false
  }
  else
  {
    return true
  }
}
