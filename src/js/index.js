import '../scss/style.scss';

// Get data from json feed
const data = require('../data/player-stats.json');

// Dynamically build players dropdown
const selection = document.getElementById("playerID");

data.players.map(player => {
  let playerID = player.player.id;
  let playerFirstname = player.player.name.first;
  let playerLastname = player.player.name.last;
  let option = document.createElement("option");

  // Build dropdown with options of players and player id as the id
  option.textContent = `${playerFirstname} ${playerLastname}`;
  option.value = playerID;
  selection.appendChild(option);
})

// Get player data from id
const getPlayer = (id = 4916) => {
  let playerInfo = {}
  for(let i = 0; i < data.players.length; i++) {
    if(data.players[i].player.id == id) {
      playerInfo = data.players[i];
    }
  }

  // Get last word of position
  const getPosition = (positionFull) => {
    const splitPos = positionFull.split(" ");
    return splitPos[splitPos.length - 1];
  }

  // Get goals per match
  const goalsPerMatch = (gpm) => {
    // Appearances divide by goals and round to 2 decimal places
    return (gpm[0]/gpm[1]).toFixed(2);
  }

  // Get passes per minute
  const passesPerMinute = function(ppm) {
    // Add passes and divide by the number of minutes played, round to 2 decimal places
    return ((ppm.fwd_pass + ppm.backward_pass) / ppm.mins_played).toFixed(2);
  }

  // A closure function making it private
  // Display player info and stats
  const printPlayer = () => {
    const playerImage = `img/p${playerInfo.player.id}.png`;
    const playerBadge = playerInfo.player.currentTeam.shortName.toLowerCase().replace(' ','');
    const playerName = `${playerInfo.player.name.first} ${playerInfo.player.name.last}`;
    const playerPosition = getPosition(playerInfo.player.info.positionInfo);

    let statName;
    let statValue;
    let elementID;
    let gpm = [];
    let ppm = {};

    document.getElementById('player__img').src = playerImage;
    document.getElementById('player__img').alt = playerName;
    document.getElementById('player__badge').className = playerBadge;
    document.getElementById('player__name').innerHTML = playerName;
    document.getElementById('player__position').innerHTML = playerPosition;

    playerInfo.stats.map(stat => {
      statName = Object.values(stat)[0]; // Get stat name e.g. goals, appearances etc.
      statValue = Object.values(stat)[1]; // Get value of stat
      elementID = document.getElementById(statName); // Get element with state name as id

      // Check if element exists and if it matches the stat name
      if(elementID && elementID.id === statName) {
        // Display the stat value of given state name e.g. goals / 5
        elementID.getElementsByClassName('value')[0].innerHTML = statValue;
      }

      // Append to goals per game array with goals and appearances
      if(statName === 'goals' || statName === 'appearances') {
        gpm.push(statValue);
      }

      // Append to passes per minute object with stat name and value as key value pairs
      if(statName === 'fwd_pass' || statName === 'backward_pass' || statName === 'mins_played') {
        ppm[statName] = statValue;
      }
    })

    // Display Goals per match and passes per minute
    document.getElementById('gpm').getElementsByClassName('value')[0].innerHTML = goalsPerMatch(gpm);
    document.getElementById('ppm').getElementsByClassName('value')[0].innerHTML = passesPerMinute(ppm);
  }

  return printPlayer();  
}

// Load default player
getPlayer(); // 4916 set in the function as a defualt value

// Get player on selection and load player info and stats
document.getElementById('playerID').addEventListener('change', (e) => {
  getPlayer(e.target.value);
});