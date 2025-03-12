const object = gameObject();

function gameObject() {
  let obj = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["black", "white"],
      players: {
        "Alan Anderson": { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 },
        "Reggie Evans": { number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7 },
        "Brook Lopez": { number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15 },
        "Mason Plumlee": { number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5 },
        "Jason Terry": { number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1 },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": { number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2 },
        "Bismak Biyombo": { number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10 },
        "DeSagna Diop": { number: 2, shoe: 21, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5 },
        "Ben Gordon": { number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0 },
        "Brendan Haywood": { number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12 },
      },
    },
  };
  return obj;
}

function findName(name) {
  return object.home.players[name] || object.away.players[name] || null;
}

function findTeam(teamName) {
  if (object.home.teamName === teamName) return object.home;
  if (object.away.teamName === teamName) return object.away;
  return null;
}

const numPointsScored = (name) => {
  const player = findName(name);
  const result = player ? player.points : "not found";
  console.log(`Points for ${name}:`, result);
  return result;
};

console.log(numPointsScored("Alan Anderson"));
console.log(numPointsScored("Michael Jordan"));

const shoeSize = (name) => {
  const player = findName(name);
  const result = player ? player.shoe : "not found";
  console.log(`Shoe size for ${name}:`, result);
  return result;
};

console.log(shoeSize("Brook Lopez"));
console.log(shoeSize("Kobe Bryant"));

const teamColors = (teamName) => {
  const team = findTeam(teamName);
  const result = team ? team.colors : "not found";
  console.log(`Colors for ${teamName}:`, result);
  return result;
};

console.log(teamColors("Brooklyn Nets"));
console.log(teamColors("Los Angeles Lakers"));

const teamNames = () => {
  const result = [object.home.teamName, object.away.teamName];
  console.log("Team names:", result);
  return result;
};

console.log(teamNames());

const playerNumbers = (teamName) => {
  const team = findTeam(teamName);
  if (!team) {
    console.log(`Player numbers for ${teamName}: not found`);
    return "not found";
  }
  const result = Object.values(team.players).map(player => player.number);
  console.log(`Player numbers for ${teamName}:`, result);
  return result;
};

console.log(playerNumbers("Charlotte Hornets"));
console.log(playerNumbers("Golden State Warriors"));

const playerStats = (name) => {
  const player = findName(name);
  console.log(`Stats for ${name}:`, player || "not found");
  return player || "not found";
};

console.log(playerStats("Ben Gordon"));
console.log(playerStats("LeBron James"));

const bigShoeRebounds = () => {
  const playerWithLargestShoeSize = Object.values({ ...object.home.players, ...object.away.players })
    .reduce((largest, player) => (player.shoe > largest.shoe ? player : largest));
  console.log("Player with largest shoe size:", playerWithLargestShoeSize);
  return playerWithLargestShoeSize.rebounds;
};

console.log(bigShoeRebounds());
