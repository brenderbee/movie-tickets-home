// Business Logic

function Ticket(name, time, price) {
  this.name = name;
  this.time = time;
  this.price = price;
}

function price( name, time , discount) {
  var cost = 13;
  if (name === "Nosferatu") {
    cost = cost - 5;
  }

  if (time === "AM") {
    cost = cost - 4;
  }

  if (discount === "senior") {
    cost = cost - 1;
  } else if (discount === "child") {
    cost = cost - 3;
  }

  return cost;
}

// User-Interface Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var inputName = $("#movie").val();
    var inputTime = $("input:radio[name=showing]:checked").val();
    var inputDiscount = $("input:radio[name=discount]:checked").val();

    var priceTicket = price(inputName, inputTime, inputDiscount);

    var newTicket = new Ticket(inputName, inputTime, priceTicket);

    $("#result").append('<div class="well ticket">' +
              '<h2>' + newTicket.name + '</h2>' +
              '<p>' + newTicket.time + ' showing' + '</p>' +
              '<p>' + 'Your ticket price is: ' + '$' + newTicket.price + '</p>' +
            '</div>');

// Removes a given ticket on click
    $(".ticket").click(function() {
      $(this).remove();
    });
  });
});
