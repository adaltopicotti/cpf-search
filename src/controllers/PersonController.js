
const admin = require('firebase-admin')

const api = require('../services/cpfcnpj')
const serviceAccountKey = require('../config/firebaseAdmin')
// import api from '../services/cpfcnpj'

// const serviceAccount = require(atest)
// const serviceAccount = require("../config/serviceAccountKey.json")
// console.log(serviceAccountKey.config())
admin.initializeApp({
    credential: admin.credential.cert(serviceAccountKey.config()),
    databaseURL: "https://cpf-storage.firebaseio.com"
  });

var db = admin.firestore()

module.exports = {
    
    async index(req, res) {
        var person = {}

        db.collection("person").get()
        .then((snapshot) => {
            // res.send(snapshot.data())
          snapshot.forEach((doc) => {
            //   res.send(doc.data())
            console.log(doc.id, '=>', doc.data());
          });
        })
        .catch((err) => {
          console.log('Error getting documents', err);
        });
        return person
    },

    async cpfSearch(req, res) {
        db.collection("cpf").doc(req.params.id).get()
        .then((snapshot) => {
            if(snapshot.exists){
                console.log('caiu aqui')
                res.send(snapshot.data())
            }
                // res.send(res.send())
            else {
                throw err
            }
        })
        .catch((err) => {
            
            api.cpf(req.params.id).then((response) => {
                if(response.error)
                    res.send(response.error)
                else {
                    db.collection("cpf").doc(req.params.id).set(
                        {
                            "nome": response.nome,
                            "cpf": response.cpf,
                            "consultaID": response.consultaID
                        }
                        )
                        .then(() => {
                            db.collection("cpf").doc(req.params.id).get()
                                .then((snapshot) => {
                                    res.send(snapshot.data())
                                })
                            // return response
                        })
                        .catch((err) => {
                            console.error("Error adding document: ", err);
                        })
                }
            })
            // console.log('Error getting documents', err);
        })
    },

    // async searchStore(req, res) {
    //     console.log(req.params.id)
    //     await db.collection("person").doc(req.params.id).set({
    //         first: "Ada",
    //         last: "Lovelace",
    //         born: 1815
    //     })
    //     .then((docRef) => {
    //         console.log("Document written with ID: ", docRef.id);
    //     })
    //     .catch((err) => {
    //         console.error("Error adding document: ", error);
    //     });
    //     return docRef.id
    // },

    // async store(id, data) {
    //     await db.collection("person").doc(id).set(data)
    //     .then((docRef) => {
    //         console.log("Document written with ID: ", docRef.id);
    //     })
    //     .catch((err) => {
    //         console.error("Error adding document: ", error);
    //     });
    //     return docRef.id
    // }


}