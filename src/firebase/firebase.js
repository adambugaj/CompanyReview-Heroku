import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyCl1-w7cm5Re4dNHo6VStRI1asf9jlF0AI",
    authDomain: "companyreviewapp.firebaseapp.com",
    databaseURL: "https://companyreviewapp.firebaseio.com",
    projectId: "companyreviewapp",
    storageBucket: "companyreviewapp.appspot.com",
    messagingSenderId: "367691360299"
  };

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };



// firebase.database().ref('object').set({
//   name: 'Adam Bugaj',
//   location: {
//     city: 'Cracow',
//     country: 'Poland'
//   }
// });
//
// firebase.database().ref('object/location/country').set('Germany')
//
// firebase.database().ref('object/location').set({
//   continent: 'Europe'
// });
