import '../scss/style.scss';

// Get data from json feed
const data = require('../data/player-stats.json');

// Dynamically build players dropdown
const select = document.getElementById("playerID");

data.players.map(player => {
  let playerID = player.player.id;
  let playerFirstname = player.player.name.first;
  let playerLastname = player.player.name.last;
  let option = document.createElement("option");

  option.textContent = `${playerFirstname} ${playerLastname}`;
  option.value = playerID;
  select.appendChild(option);
})

// Get player data from id
function getPlayer(id = 4916) {
  for(var i = 0; i < data.players.length; i++) {
    if(data.players[i].player.id == id) {
      return data.players[i];
    }
  }
}

// Get last word of position
function getPosition(positionFull) {
  const splitPos = positionFull.split(" ");
  return splitPos[splitPos.length - 1];
}

// Get goals per match
function goalsPerMatch(gpm) {
  // Appearances divide by goals and round to 2 decimal places
  return (gpm[0]/gpm[1]).toFixed(2);
}

// Get passes per minute
function passesPerMinute(ppm) {  
  // Add passes and divide by the number of minutes played, round to 2 decimal places
  return ((ppm.fwd_pass + ppm.backward_pass) / ppm.mins_played).toFixed(2)
}

// Display player info and stats
function printPlayer(playerInfo) {
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
  document.getElementById('teamlogo').className = playerBadge;  
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

    // Goals per game array with goals and appearances
    if(statName === 'goals' || statName === 'appearances') {
      gpm.push(statValue)      
    }        

    // Passes per minute object with stat name and value as key value pairs
    if(statName === 'fwd_pass' || statName === 'backward_pass' || statName === 'mins_played') {
      ppm[statName] = statValue
    }        
  })

  // Display Goals per match and passes per minute
  document.getElementById('gpm').getElementsByClassName('value')[0].innerHTML = goalsPerMatch(gpm);
  document.getElementById('ppm').getElementsByClassName('value')[0].innerHTML = passesPerMinute(ppm);
}


// Get player on selection
document.getElementById('playerID').addEventListener('change', function() {
  printPlayer(getPlayer(this.value))
})

// Load default player
printPlayer(getPlayer())