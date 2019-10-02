let gameNumber = 0;

$("form").submit(function (e) {
    e.preventDefault()
    $("h3,#game").html("&nbsp")
    let choice = $("#choice").val();
    let computer = Math.random()
    gameNumber++
    if (computer < 0.33333) {
        computer = "Rock"
    } else if (computer < 0.6666) {
        computer = "Scissors"
    } else {
        computer = "Paper"
    }
    $("img").addClass("rotation");
    $("button").addClass("disabled")
    $("button").blur();
    setTimeout(function () {
        $("img").removeClass("rotation");
        $("button").removeClass("disabled")
        announceResult(choice, computer);
    }, 3000)
})


$("button").click(function (e) {
    if ($(this).hasClass("disabled")) {
        e.preventDefault();
    }
})



function announceResult(choice, computer) {
    $("h3").html(`User: ${choice}, Computer: ${computer}`);
    let result = null
    if (computer === choice) {
        result = "TIE"
    } else if (computer === "Rock" && choice === "Paper") {
        result = "WINNER"
    } else if (computer === "Rock" && choice === "Scissors") {
        result = "LOSER"
    } else if (computer === "Paper" && choice === "Rock") {
        result = "LOSER"
    } else if (computer === "Paper" && choice === "Scissors") {
        result = "WINNER"
    } else if (computer === "Scissors" && choice === "Paper") {
        result = "LOSER"
    } else if (computer === "Scissors" && choice === "Rock") {
        result = "WINNER"
    }
    $("#game").html(result);
    $("tbody").append(`
        <tr>
            <th scope="row">${gameNumber}</th>
            <td>${computer}</td>
            <td>${choice}</td>
            <td>${result}</td>
        </tr>
    `)
}
$(".btn-danger").click(function(){
    location.reload();
})