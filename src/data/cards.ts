export const cards = {
    attack: [
        {
            name: "soldier",
            effect: "damage",
            damage: 5,
            price: 5,
            picture: 'soldier.jpg'
        },
        {
            name: "infantry",
            effect: "damage",
            damage: 10,
            price: 10,
            picture: "infantry.jpg"
        },
        {
            name: "swat",
            effect: "damage",
            damage: 20,
            price: 25,
            picture: "swat.jpg"
        },
        {
            name: "sniper",
            effect: "damage",
            damage: 15,
            price: 15,
            picture: "sniper.jpg"
        },
        {
            name: "missile",
            effect: "damage",
            damage: 25,
            price: 30,
            picture: "missile.jpg"
        },
        {
            name: "radiation",
            effect: "radiation",
            price: 30,
            picture: "radiation.png"
        },
        {
            name: "recruits",
            effect: "attackIncrease",
            plusAttack: 30,
            price: 0,
            picture: "recruits.jpg"
        },
        {
            name: "cartridge",
            effect: "attackGenIncrease",
            price: 30,
            plusAttackGen: 1,
            picture: "cartridge.jpg"
        },
        {
            name: "sabotage",
            effect: "sabotage",
            price: 30,
            picture: "sabotage.jpg"
        },
        {
            name: "storage arson",
            effect: "materialDecrease",
            decrease: 45,
            picture: "arson.jpg",
            price: 40
        }
    ],
    defense: [
        {
            name: "patch",
            effect: "repair",
            repair: 5,
            picture: "patch.jpg",
            price: 5
        },
        {
            name: "defense layer",
            effect: "repair",
            repair: 15,
            picture: "layer.png",
            price: 15
        },
        {
            name: "nanobots",
            effect: "repair",
            repair: 50,
            picture: "nanobots.jpg",
            price: 50
        },
        {
            name: "freeze",
            effect: "freeze",
            price: 30,
            picture: "freeze.jgp"
        },
        {
            name: "engineers",
            effect: "defenseIncrease",
            price: 0,
            picture: "engineers",
            defenseIncrease: 30
        },
        {
            name: "teleport",
            effect: "teleport",
            price: 50,
            picture: "teleport.jpg"
        },
        {
            name: "technology",
            effect: "defenseGenIncrease",
            price: 30,
            picture: "technology.jpg",
            defenseGenIncrease: 1
        }
    ]
}
