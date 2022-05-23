import {ICards, ICard} from "../types/cards";

export const cards: ICards = {
    attack: [
        {
            type: "attack",
            name: "soldier",
            effect: "damage",
            damage: 5,
            price: 5,
            picture: 'soldier.jpg'
        },
        {
            type: "attack",
            name: "infantry",
            effect: "damage",
            damage: 10,
            price: 10,
            picture: "infantry.jpg"
        },
        {
            type: "attack",
            name: "swat",
            effect: "damage",
            damage: 20,
            price: 25,
            picture: "swat.jpg"
        },
        {
            type: "attack",
            name: "sniper",
            effect: "damage",
            damage: 15,
            price: 15,
            picture: "sniper.jpg"
        },
        {
            type: "attack",
            name: "missile",
            effect: "damage",
            damage: 25,
            price: 30,
            picture: "missile.jpg"
        },
        {
            type: "attack",
            name: "radiation",
            effect: "radiation",
            price: 30,
            picture: "radiation.png"
        },
        {
            type: "attack",
            name: "recruits",
            effect: "attackIncrease",
            attackIncrease: 30,
            price: 0,
            picture: "recruits.jpg"
        },
        {
            type: "attack",
            name: "cartridge",
            effect: "attackGenIncrease",
            price: 30,
            attackGenIncrease: 1,
            picture: "cartridge.jpg"
        },
        {
            type: "attack",
            name: "sabotage",
            effect: "sabotage",
            price: 30,
            picture: "sabotage.jpg"
        },
        {
            type: "attack",
            name: "storage arson",
            effect: "materialDecrease",
            decrease: 45,
            picture: "arson.jpg",
            price: 40
        }
    ],
    defense: [
        {
            type: "defense",
            name: "patch",
            effect: "repair",
            repair: 5,
            picture: "patch.jpg",
            price: 5
        },
        {
            type: "defense",
            name: "defense layer",
            effect: "repair",
            repair: 15,
            picture: "layer.png",
            price: 15
        },
        {
            type: "defense",
            name: "nanobots",
            effect: "repair",
            repair: 50,
            picture: "nanobots.jpg",
            price: 50
        },
        {
            type: "defense",
            name: "freeze",
            effect: "freeze",
            price: 30,
            picture: "freeze.jpg"
        },
        {
            type: "defense",
            name: "engineers",
            effect: "defenseIncrease",
            price: 0,
            picture: "engineers.jpg",
            defenseIncrease: 30
        },
        {
            type: "defense",
            name: "teleport",
            effect: "teleport",
            price: 50,
            picture: "teleport.jpg"
        },
        {
            type: "defense",
            name: "technology",
            effect: "defenseGenIncrease",
            price: 30,
            picture: "technology.jpg",
            defenseGenIncrease: 1
        }
    ]
}
export const pass: ICard = {
    type: "defense",
    name: "pass",
    effect: "no",
    price: 0,
    picture: "pass.jpg"
}
