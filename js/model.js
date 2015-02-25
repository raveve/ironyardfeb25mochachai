// Post Model

var FilmModel = Backbone.Model.extend({
  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/ravenbackbone',
  idAttribute: "_id",
  defaults: function () {
    return {
      title: "Back to the Future",
      image: "http://2.bp.blogspot.com/-ilRF_E1g9d0/UNH4WkJPrxI/AAAAAAAAAZM/wdha7-dFYss/s1600/back_final-01.png",
      synopsis: "A young man is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his friend, Dr. Emmett Brown, and must make sure his high-school-age parents unite in order to save his own existence.",
      date: "July 3, 1985"
    };
  },
  initialize: function () {
    console.log("FilmModel instance was created");
  }
});
