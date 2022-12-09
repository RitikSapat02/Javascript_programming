const game = {
  team1: "Bayern Munich",
  team2: "Barrusia Dortmund",
  players: [
    [
      "Nver",
      "pavard",
      "martinez",
      "Alaba",
      "Davis",
      "kimmich",
      "Goretxka",
      "coman",
      "muller",
      "gnarby",
      "lewandowskill",
    ],

    [
      "Burki",
      "schul",
      "Humels",
      "Akanji",
      "Hakimi",
      "weigi",
      "witsel",
      "Hazard",
      "Brandt",
      "Sancho ",
      "Gotze",
    ],
  ],

  score: "4:0",
  scored: ["lewandowski", "Gnarby", "Lewandowsk", "Hammers"],
  date: "Nov 9th,2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
const [gk, fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
const players1FInal = [...players1, "Thiago", "Countinho", "periscic"];

const {
  odds: { team1, X: draw, team2 },
} = game;

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

printGoals(...game.scored);

team1 < team2 && console.log("team1 is more likely to win");
team1 > team2 && console.log("team2 is more likely to win");
