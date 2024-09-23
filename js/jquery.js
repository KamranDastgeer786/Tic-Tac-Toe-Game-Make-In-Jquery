$(document).ready(function(){
    // console.log("Welcome to Tic Tac Toe")
   let turn = "X"
   let isgameover = false;

    // Function to change the turn
   const changeTurn = ()=>{
    return turn === "X"? "0": "X"
   }

    // Function to check for a win
    const checkWin = () => {
    let boxtext = $(".boxtext");
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            let winner = boxtext[e[0]].innerText;
            $('.info').text(winner + " Won");
            isgameover = true;
            $(".imgbox img").css("width", "600px");
            $(".line").css({
                transform: `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`,
                width: "20vw",
            });
        }
    });
 };

   // Game Logic
    let boxes = $(".box");
    boxes.each(function () {
    $(this).click(() => {
        let boxtext = $(this).find(".boxtext");
        if (boxtext.text() === "") {
            boxtext.text(turn);
            turn = changeTurn();
            checkWin();
            if (!isgameover) {
                $(".info").text("Turn for " + turn);
            }
        }
    });
 });

 // Add onclick listener to reset button
 $("#reset").click(() => {
 let boxtexts = $(".boxtext");
 boxtexts.each(function () {
    $(this).text("");
 });
 turn = "X";
 isgameover = false;
 $(".line").css("width", "0vw");
 $(".info").text("Turn for " + turn);
 $(".imgbox img").css("width", "0px");
 });

 // Add animation class to h1 heading
 $("h1").addClass("color-animation");
    
});



