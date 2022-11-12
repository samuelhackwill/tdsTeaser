import { Meteor } from 'meteor/meteor';
import { Counter } from '../both/main.js'
import { ScreenState } from '../both/main.js'


Meteor.startup(() => {
  // code to run on server at startup
      Counter.remove({})
      Counter.insert({"at":0})

      ScreenState.remove({})
      ScreenState.insert({"color":"black"})
});

Meteor.methods({

    fuck(){
      object = Counter.findOne()
      Counter.update(object._id, {$inc: {at : 1}})
    },    

    fuckYou(){
      object = Counter.findOne()
      Counter.update(object._id, {$set: {at : 0}})
    },

    screenChange(){
      object = ScreenState.findOne()
      ScreenState.update(object._id, {$set: {color : "orange"}})

      Meteor.setTimeout(function(){
        ScreenState.update(object._id, {$set: {color : "black"}})
      },5000)
    }

})