// **Descrizione:**
// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
// **Bonus**
// 1. Far comparire gli indirizzi email solamente quando sono stati tutti generati.
// 2. Predisporre una scritta “Errore” nel caso fallisse la chiamata HTTP
// Consigli:
// Iniziate a testare una chiamata axios direttamente da mounted.
// Analizzate bene i dati in arrivo.
// Solo in un secondo momento predisponete la logica delle 10 chiamate


const app = new Vue({

  el: "#app",

  data:{

    mails: [],
    loading : true,
    httpError : false,

  },

  methods:{

    generateMail(){

      this.mails = [];

      for(let i = 0; i < 10; i++){
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((response)=>{
          console.log("response", response.data);
          console.log("mail",  response.data.response );
          const mailToPush = response.data.response;
          this.mails.push(mailToPush);
          console.log(this.mails);

          if(this.mails.length === 10){
            this.loading = false;
          }
        }).catch(() =>{
          this.httpError = true;
        })
      };

    },

  },
  mounted(){

    this.generateMail();

  }

});