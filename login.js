function login() {
    var p1n = document.getElementById("player1_name").value;
    var p2n = document.getElementById("player2_name").value;
    localStorage.setItem("Player1", p1n);
    localStorage.setItem("Player2", p2n);
    window.location = "game_page.html";
}