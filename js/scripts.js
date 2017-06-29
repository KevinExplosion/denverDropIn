$(document).ready(function() {

  //a pretty little ditty to make sure the jQuery is set up correctly
  $('.jQueryCheck').append("<p>jQuery works!</p>");

  //rink constructor!
  var Rink = function(name, streetNumber, streetName, city, state, zip, phone, openTime, closeTime, proShop, sharpening, numberOfRinks) {
    this.name = name;
    this.streetNumber = streetNumber;
    this.streetName = streetName;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phone = phone;
    this.openTime = openTime;
    this.closeTime = closeTime;
    this.proShop = proShop;
    this.sharpening = sharpening;
    this.numberOfRinks = numberOfRinks;
  };

  //rink objects
  var bigBear = new Rink("Big Bear", 8580, "East Lowry Blvd.", "Denver", "CO", 80230, 3133431111, null, null, null, null, 1);

  var edgeIce = new Rink("Edge Ice Arena", 6623, "South Ward St.", "Littleton", "CO", 80127, 3034092222, null, null, null, null, 1);

  var familySports = new Rink("Family Sports Ice Arena", 6901, "South Peoria St.", "Centennial", "CO", 80112, 3037089500, null, null, null, null, 1);

  var foothill = new Rink("Foothills Ice Arena", 2250, "South Kipling St.", "Lakewood", "CO", 80227, 3039895152, null, null, null, null, 1);

  var promenade = new Rink("Ice Centre at the Promenade", 10710, "Westminster Blvd.", "Westminster", "CO", 80020, 3034692100, null, null, true, true, 3);

  var iceRanch = new Rink("The Ice Ranch", 841, "Southpark Dr.", "Littleton", "CO", 80120, 3032852110, 600, 0, null, null, 1);

  var joyBurns = new Rink("Joy Burns Arena", 2250, "East Jewell Ave.", "Denver", "CO", 80210, 3038713904, null, null, false, true, 1);

  var southSuburban = new Rink("South Suburban Ice Arena", 6580, "South Vine St.", "Centennial", "CO", 80121, 3037987881, null, null, null, null, 2);

  var sportsStable = new Rink("Sport Stable", 1, "Superior Plaza Way", "Superior", "CO", 80027, 3034944777, 530, 200, true, true, 3);

  //just to see if my pretties are working properly
  console.log(bigBear);
  console.log(edgeIce);
  console.log(familySports);
  console.log(foothill);
  console.log(promenade);
  console.log(iceRanch);
  console.log(joyBurns);
  console.log(southSuburban);
  console.log(sportsStable);
});
