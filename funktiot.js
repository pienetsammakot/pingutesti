//PISTEET TALLENTUVAT TÄHÄN TAULUKKOON
var tulokset = [[0, "keisaripingviini"], [0, "myssypingviini"], [0, "sinipingviini"]]; 

//LASKEE PISTEET KYSYMYKSESTÄ 1
function tulosLasku1()
{
  if(document.getElementById("q1a1").checked)
  {
    tulokset[0][0] = tulokset[0][0] + 1;
  }
  else if(document.getElementById("q1a2").checked)
  {
    tulokset[1][0] = tulokset[1][0] + 1;
  }
  else if(document.getElementById("q1a3").checked)
  {
    tulokset[2][0] = tulokset[2][0] + 1;
  }
}

//LASKEE PISTEET KYSYMYKSESTÄ 2
function tulosLasku2()
{
  if(document.getElementById("q2a1").checked)
  {
    tulokset[0][0] = tulokset[0][0] + 1;
  }
  else if(document.getElementById("q2a2").checked)
  {
    tulokset[1][0] = tulokset[1][0] + 1;
  }
  else if(document.getElementById("q2a3").checked)
  {
    tulokset[2][0] = tulokset[2][0] + 1;
  }
}

//LASKEE PISTEET KYSYMYKSESTÄ 3
function tulosLasku3()
{
  if(document.getElementById("q3a1").checked)
  {
    tulokset[0][0] = tulokset[0][0] + 1;
  }
  else if(document.getElementById("q3a2").checked)
  {
    tulokset[1][0] = tulokset[1][0] + 1;
  }
  else if(document.getElementById("q3a3").checked)
  {
    tulokset[2][0] = tulokset[2][0] + 1;
  }
}

//JÄRJESTÄÄ TULOKSET SUURUUSJÄRJESTYKSEEN JA NÄYTTÄÄ SUURIMMAN PISTEMÄÄRÄN OMAAVAN TULOKSEN
function showResults()
{
  tulokset.sort((a, b) => a[0]-b[0]);
  tulokset.reverse();
  document.getElementById("output").innerHTML = "Olet " + tulokset[0][1] + "!";
}
