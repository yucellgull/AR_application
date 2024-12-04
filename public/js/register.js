import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXSMGrGDI1h2LesF9WQKhXmAcIUeZ9alA",
  authDomain: "arproje-c329b.firebaseapp.com",
  projectId: "arproje-c329b",
  storageBucket: "arproje-c329b.firebasestorage.app",
  messagingSenderId: "138061237714",
  appId: "1:138061237714:web:04a5fc9289128af8548c0b",
  measurementId: "G-4RWLDJ3TMR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Başarılı Kayıt")
            
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert('Başarısız Kayıt ' + errorMessage); // Kullanıcıya hata mesajı göster
        });
});
