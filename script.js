const plus = document.getElementById("plus");
const score = document.getElementById("score");
const one = document.getElementById("oneper");
const reset = document.getElementById("reset");

score.innerText = "0";

let tScore = Math.round(Number(score.innerText));

const upgrades = [
    {
        name: 'Skibidi Toilet',
        cost: 10,
        owned: 0,
        button: one,
        reward: 1,
        interval: null
    },
    {
        name: 'Cameraman',
        cost: 50,
        owned: 0,
        button: document.getElementById("twoper"),
        reward: 5,
        interval: null
    },
    {
        name: 'Speakerman',
        cost: 100,
        owned: 0,
        button: document.getElementById("threeper"),
        reward: 30,
        interval: null
    },
    {
        name: 'Astro Toilet',
        cost: 300,
        owned: 0,
        button: document.getElementById("fourper"),
        reward: 80,
        interval: null
    },
    {
        name: 'Titan TV Man',
        cost: 600,
        owned: 0,
        button: document.getElementById("fiveper"),
        reward: 200,
        interval: null
    },
    {
        name: 'Titan Speakerman',
        cost: 1200,
        owned: 0,
        button: document.getElementById("sixper"),
        reward: 500,
        interval: null
    }
];

plus.addEventListener("click", () => {
    tScore += 1;
    score.innerText = tScore;
});

function buyUpgrade(index) {
    let upgrade = upgrades[index];
    console.log(upgrade.name);
    upgrade.owned++;

    if (tScore >= upgrade.cost) {
        tScore -= upgrade.cost;
        score.innerText = tScore;
        upgrade.interval = setInterval(function() {
            tScore += upgrade.reward * upgrade.owned;
            score.innerText = tScore;
        }, 1000);
    };
};

upgrades.forEach((upgrade, index) => {
    upgrade.button.addEventListener("click", () => {
        buyUpgrade(index);
    });
});

reset.addEventListener("click", () => {
    upgrades.forEach(upgrade => {
        clearInterval(upgrade.interval);
        upgrade.interval = null;
        upgrade.owned = 0;
    });

    score.innerText = "0";
    tScore = 0;
});