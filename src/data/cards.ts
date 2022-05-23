import {ICards, ICard} from "../types/cards";

export const cards: ICards = {
    attack: [
        {
            type: "attack",
            name: "soldier",
            effect: "damage",
            damage: 5,
            price: 5,
            picture: 'soldier.jpg',
            description: "damage - 5"
        },
        {
            type: "attack",
            name: "infantry",
            effect: "damage",
            damage: 10,
            price: 10,
            picture: "infantry.jpg",
            description: "damage - 10"
        },
        {
            type: "attack",
            name: "swat",
            effect: "damage",
            damage: 20,
            price: 25,
            picture: "swat.jpg",
            description: "damage - 20"
        },
        {
            type: "attack",
            name: "sniper",
            effect: "damage",
            damage: 15,
            price: 15,
            picture: "sniper.jpg",
            description: "damage - 15"
        },
        {
            type: "attack",
            name: "missile",
            effect: "damage",
            damage: 25,
            price: 30,
            picture: "missile.jpg",
            description: "damage - 25"
        },
        {
            type: "attack",
            name: "radiation",
            effect: "radiation",
            price: 30,
            picture: "radiation.png",
            description: "hand cards are attack"
        },
        {
            type: "attack",
            name: "recruits",
            effect: "attackIncrease",
            attackIncrease: 30,
            price: 0,
            picture: "recruits.jpg",
            description: "+30 attack"
        },
        {
            type: "attack",
            name: "cartridge",
            effect: "attackGenIncrease",
            price: 30,
            attackGenIncrease: 2,
            picture: "cartridge.jpg",
            description: "+2 attack gen"
        },
        {
            type: "attack",
            name: "sabotage",
            effect: "sabotage",
            price: 30,
            picture: "sabotage.jpg",
            description: "sabotage"
        },
        {
            type: "attack",
            name: "storage arson",
            effect: "materialDecrease",
            decrease: 45,
            picture: "arson.jpg",
            price: 40,
            description: "-40% materials"
        }
    ],
    defense: [
        {
            type: "defense",
            name: "patch",
            effect: "repair",
            repair: 5,
            picture: "patch.jpg",
            price: 5,
            description: "repair - 5"
        },
        {
            type: "defense",
            name: "defense layer",
            effect: "repair",
            repair: 15,
            picture: "layer.png",
            price: 15,
            description: "repair - 15"

        },
        {
            type: "defense",
            name: "nanobots",
            effect: "repair",
            repair: 40,
            picture: "nanobots.jpg",
            price: 50,
            description: "repair - 40"

        },
        {
            type: "defense",
            name: "freeze",
            effect: "freeze",
            price: 30,
            picture: "freeze.jpg",
            description: "defense cards"
        },
        {
            type: "defense",
            name: "engineers",
            effect: "defenseIncrease",
            price: 0,
            picture: "engineers.jpg",
            defenseIncrease: 30,
            description: "+30 defense"
        },
        {
            type: "defense",
            name: "teleport",
            effect: "teleport",
            price: 50,
            picture: "teleport.jpg",
            description: "steal 30%"
        },
        {
            type: "defense",
            name: "technology",
            effect: "defenseGenIncrease",
            price: 30,
            picture: "technology.jpg",
            defenseGenIncrease: 2,
            description: "+2 defense gen"
        }
    ]
}
export const pass: ICard = {
    type: "defense",
    name: "pass",
    effect: "no",
    price: 0,
    picture: "pass.jpg",
    description: "pass turn"
}
