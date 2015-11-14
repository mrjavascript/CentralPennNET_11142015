import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    // return $.get("games.json");

    return ['fallout', 'tomb raider', 'borderlands'];
  },

  actions: {

    saveGameList: function (games) {
      alert("Changes saved");
    }

  }

});
