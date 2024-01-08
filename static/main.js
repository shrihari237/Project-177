var gameOver = false;

$(document).ready(function () {
  get_templates();
});

function get_templates() {
  $.ajax({
    url: "/get-template",
    type: "get",
    success: function (result) {
      fill_blanks(result.word);
    },
    error: function (result) {
      console.log(result);
    },
  });
}

function fill_blanks(randomWord) {
  $("#blanks").empty();

  for (var i = 0; i < randomWord.inputs; i++) {
    let input = `<span class="fill_blanks" id="input_${i}">_</span>`;

    $("#blanks").append(input);
  }

  $("#hint").html(randomWord.category);
  //Fill blanks only if the character match is found
  $(".clickable").click(function () {
    console.log("Hello");
    var correctGuess = false;

    //Get the id of the button clicked
    let id = $(this).attr("id");

    //Get the life
    var life = parseInt($("#life").text());

    //Loop through all the letters

    for (var i = 0; i < randomWord.word.length; i++) {
      //Check if the character matches the id of the button

      if (randomWord.word.charAt(i).toLowerCase() == id) {
        if (
          life > 0 &&
          ($(".fill_blanks").eq(i).html() == "_" ||
            $(".fill_blanks").eq(i).html() == id)
        ) {
          //fill blanks

          $(".fill_blanks").eq(i).html(id);

          correctGuess = true;

          //Check if the word guess is complete

          if ($("#blanks").text() === randomWord.word.toLowerCase()) {
            $("#result").text("You Win!!");

            correctGuess = true;
            gameOver = true;
          }
        }
      }
    }
  });
}
