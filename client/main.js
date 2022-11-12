import { Template } from 'meteor/templating';
import { Counter } from '../both/main.js';
import { ScreenState } from '../both/main.js';

import './main.html';

text = [
"",
"Bonjour",
"Je m'appelle Samuel Hackwill",
"et je suis très heureux de vous présenter ma performance",
"\"Le tiret du six\".",
"Je ressemble à ça :",
"coucou",
"mais vous ne me verrez pas plus que ça pendant la performance",
"parce que vous regarderez surtout votre ordinateur",
"et puis de temps en temps vos voisines et voisins,",
"qui seront devant leurs ordinateurs également.",
"le tiret du six est",
"une comédie",
"techno-pessimiste",
"auto-activée",
"pour un groupe de 50 personnes.",
"ça dure 1h10 environ",
"et c'est une pièce de lecture",
"qui est constituée à 66% de texte écrit.",
"on y parle",
"1.",
"du destin tragique de mon ancien médecin de famille",
"qui n'aimait pas les ordinateurs,",
"2.",
"d'un programme installé par défaut sur tous les ordinateurs",
"et donc qui est aussi sur votre machine à vous,",
"3.",
"de librisme",
"(l'acte d'amitié fondamental entre informaticiens et informaticiennes)",
"4.",
"d'athlétisme,",
"et 5.",
"de justice sociale dans l'avant-pays savoyard.",
"vous pouvez amener votre ordinateur personnel si vous le souhaitez",
"mais ce n'est pas nécessaire pour autant (nous avons notre propre flotte d'ordinateurs).",
"il n'est pas nécessaire non plus d'avoir la moindre connaissance en informatique.",
"Néophytes,",
"Néo-luddites,",
"Pro-gamers",
"Bienvenue!",
"merci et à bientôt.",
"https://le.tiretdusix.art",
""
]

Template.hello.onRendered(function(){
})

Template.hello.helpers({
  counter() {
    console.log(Counter.find({}).collection.findOne({}))
    if ( Counter.find({}).collection.findOne({}) == undefined) {
      return "fuck you"
    }else{
      return text[Counter.find({}).collection.findOne({})?.at];
    }
    // return Counter.find({}).collection.findOne({})[0]?.at;
  },

  color(){
    console.log(ScreenState.find({}).collection.findOne({}))


    if ( ScreenState.find({}).collection.findOne({}) == undefined) {
      return "black"
    }else{
        return ScreenState.find({}).collection.findOne({})?.color
    }
  }
});

Template.hello.events({
  'keyup #HUGEZOB'(event, instance) {

    //83 : S
    // 32 : spacebar
    //  13 : return

    if (event.originalEvent.keyCode == 83) {
      Meteor.call("fuckYou")
    }

    if (event.originalEvent.keyCode == 32) {
      Meteor.call("fuck")
    }

    if (event.originalEvent.keyCode == 13) {
      Meteor.call("screenChange")
    }

  },
});
