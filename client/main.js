import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '../collections/rides.js'

Template.info.helpers({
ride() {
  return Rides.find();
},

});

Template.info.events({

});
