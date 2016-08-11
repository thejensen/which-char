$(document).ready(function() {
  $("form#user-input").submit(function(event) {
    event.preventDefault();
    var stark = 0;
    var baratheon = 0;
    var lanister = 0;
    var targarian = 0;
    var tully = 0;
    var tyrell = 0;
    var greyjoy = 0;

    var moneyInput = parseInt($("#money").val());
    var familyInput = parseInt($("#family").val());
    var religionInput = parseInt($("#religion").val());

    if (moneyInput === 1) {
      stark += 1;
      greyjoy += 1;
    } else if (moneyInput === 2) {
      baratheon += 1;
      lanister += 1;
    } else if (moneyInput === 3) {
      lanister += 1;
      tyrell += 1;
    } else if (moneyInput === 4) {
      targarian += 1;
      tully += 1;
      stark += 1;
    }

    if (familyInput === 1) {
      lanister += 1;
      targarian +=1;
    } else if (familyInput === 2) {
      stark += 1;
    } else if (familyInput === 3) {
      baratheon += 1;
      tully += 1;
      tyrell += 1;
    } else if (familyInput === 4) {
      greyjoy += 1;
      lanister += 1;
    }

    if (religionInput === 1) {
      targarian += 1;
      baratheon += 1;
    } else if (religionInput === 2) {
      stark += 1;
      tully += 1;
    } else if (religionInput === 3) {
      lanister += 1;
      tyrell += 1;
    } else if (religionInput === 4) {
      tyrell += 1;
      greyjoy += 1;
      lanister += 1;
    }

    if (stark >= baratheon && stark >= lanister &&
      stark >= targarian && stark >= tully &&
      stark >= tyrell && stark >= greyjoy) {
        $(".result").hide();
        $(".stark").show();
    } else if (lanister >= baratheon && lanister >= stark &&
      lanister >= targarian && lanister >= tully &&
      lanister >= tyrell && lanister >= greyjoy) {
        $(".result").hide();
        $(".lanister").show();
    } else if (targarian >= baratheon && targarian >= stark &&
      targarian >= lanister && targarian >= tully &&
      targarian >= tyrell && targarian >= greyjoy) {
        $(".result").hide();
        $(".targarian").show();
    } else if (baratheon >= targarian && baratheon >= stark &&
      baratheon >= lanister && baratheon >= tully &&
      baratheon >= tyrell && baratheon >= greyjoy) {
        $(".result").hide();
        $(".baratheon").show();
    } else if (tully >= targarian && tully >= stark &&
      tully >= lanister && tully >= baratheon &&
      tully >= tyrell && tully >= greyjoy) {
        $(".result").hide();
        $(".tully").show();
    } else if (greyjoy >= targarian && greyjoy >= stark &&
      greyjoy >= lanister && greyjoy >= baratheon &&
      greyjoy >= tyrell && greyjoy >= tully) {
        $(".result").hide();
        $(".greyjoy").show();
    }


  });
});
