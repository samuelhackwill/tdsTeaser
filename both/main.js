import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Counter = new Mongo.Collection('counter');
export const ScreenState = new Mongo.Collection('screenState');
