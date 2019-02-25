function save_high_score(score) {
  var highScore = localStorage.getItem("highScore") || 0;
  var username = localStorage.getItem("username_id") || 0;
  var _score = localStorage.getItem("_score") || 0;

  if(highScore !== null){
    if (score > highScore) {
      localStorage.setItem("username_id", username);
      localStorage.setItem("highScore", score);
    }else{
      localStorage.setItem("_score", score);
      localStorage.setItem("username_id", username);
    }
  }
  else{
    localStorage.setItem("_score", score);
    localStorage.setItem("username_id", username);
  }
}

function save_users_score() {
  var modal = document.getElementById("modal_id");
  var tbody = modal.querySelector("#table");
  var rows = tbody.querySelectorAll("tr");

  if (rows.length < 10) { // limit the user from creating too many segments
    // copy the first TR of the table
    var newRow = rows[1].cloneNode(true);
    // increment the last segment number and apply it to the new segment[] field
      newRow.querySelector("#username_td").innerText = localStorage.username_id;
      newRow.querySelector("#score_td").innerText = localStorage._score;
      newRow.querySelector("#highscore_td").innerText = localStorage.highScore;

    // add the new row
    tbody.appendChild(newRow);
    document.getElementById("username_id").setAttribute("disabled","disabled");
    document.getElementById("username_id").style.background = "#808080";
    document.getElementById('submit_id').setAttribute("disabled","disabled");
    document.getElementById("submit_id").style.background = "#808080";
    document.getElementById("submit_id").style.color = "#c0c0c0";

    console.log("ciao");
  } else {
    alert("Maximum Number of Segments is 10.");
  }

}


