import styles from './Card.module.css'
import {FC, MouseEvent, useState} from "react";
import {ICard} from "../../types/cards";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {
    addTurnMaterial,
    attackGenIncreaseReducer,
    attackIncreaseReducer,
    damageReducer,
    defenseGenIncreaseReducer,
    defenseIncreaseReducer,
    enemyDamageReducer,
    enemySabotageReducer,
    materialDecreaseReducer,
    repairReducer,
    sabotageReducer,
    teleportReducer,
    wasteAttackReducer,
    wasteDefenseReducer,
} from "../../store/reducers/RocketsSlice";
import {freezeEffect, radiationEffect, replaceCard, setLastMyCard} from "../../store/reducers/CardsSlice";
import {getRandomArrayElement} from "../../helpers/randomElement";
import {changeTurn} from "../../store/reducers/TurnSlice";
import {pass} from "../../data/cards";

export const Card: FC<ICard> = ({
                                    type,
                                    name,
                                    picture,
                                    price,
                                    description,
                                    damage,
                                    defenseGenIncrease,
                                    defenseIncrease,
                                    effect,
                                    attackIncrease,
                                    repair,
                                    attackGenIncrease,
                                    decrease,
                                    index,
                                    used
                                }) => {
    const props = {
        name,
        picture,
        price,
        damage,
        attackIncrease,
        repair,
        attackGenIncrease,
        defenseIncrease,
        effect,
        defenseGenIncrease,
        decrease,
        type,
        description
    }
    const dispatch = useAppDispatch();
    const allCards = useAppSelector(state => state.cardsReducer.allCards)
    const turn = useAppSelector(state => state.turnReducer.turn)
    const defense = useAppSelector(state => state.rocketsReducer.myRocket.defense)
    const attack = useAppSelector(state => state.rocketsReducer.myRocket.attack)
    const bombed = useAppSelector(state => state.rocketsReducer.myRocket.bombed)
    const [randomCard, setRandomCard] = useState(getRandomArrayElement(allCards));
    const [inOrOut, setInOrOut] = useState(false)
    const mouseEnterHandler = () => {
        setInOrOut(true)
    }
    const mouseLeaveHandler = () => {
        setInOrOut(false)
    }
    const cardClick = () => {
        if (turn === "youTurn" && (
            type === "defense" && defense >= price ||
            type === "attack" && attack >= price
        )) {
            switch (effect) {
                case "damage":
                    dispatch(damageReducer(damage))
                    break
                case "repair":
                    bombed ? dispatch(enemyDamageReducer(5)) : dispatch(repairReducer(repair))
                    dispatch(enemySabotageReducer(false))
                    break
                case "attackIncrease":
                    dispatch(attackIncreaseReducer(attackIncrease))
                    break
                case "defenseIncrease":
                    dispatch(defenseIncreaseReducer(defenseIncrease))
                    break
                case "attackGenIncrease":
                    dispatch(attackGenIncreaseReducer(attackGenIncrease))
                    break
                case "defenseGenIncrease":
                    dispatch(defenseGenIncreaseReducer(defenseGenIncrease))
                    break
                case "materialDecrease":
                    dispatch(materialDecreaseReducer())
                    break
                case "teleport":
                    dispatch(teleportReducer())
                    break
                case "sabotage":
                    dispatch(sabotageReducer(true))
                    break
                case "radiation":
                    dispatch(radiationEffect())
                    break
                case "freeze":
                    dispatch(freezeEffect())
                    break
            }
            //maybe not a good solution if randomCard is the same as previous one
            if (randomCard.name !== name) {
                dispatch(setLastMyCard(props))
                dispatch(replaceCard({index, randomCard}))
            } else {
                dispatch(setLastMyCard(props))
                setRandomCard(getRandomArrayElement(allCards))
                dispatch(replaceCard({index, randomCard}))
            }
            dispatch(changeTurn())
            dispatch(addTurnMaterial())
            type === "defense" ?
                dispatch(wasteDefenseReducer(price)) :
                dispatch(wasteAttackReducer(price))
        }
    }
    const nothing = () => {
        return null
    }
    const passTurn = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation()
        dispatch(setLastMyCard(pass))
        dispatch(changeTurn())
        dispatch(replaceCard({index, randomCard}))
    }
    return (
        <div className={styles.card}
             onClick={used === "used" ? nothing : cardClick}
             onMouseEnter={mouseEnterHandler}
             onMouseLeave={mouseLeaveHandler}
             style={{
                 backgroundImage: `url(${picture})`,
                 backgroundSize: "cover",
                 backgroundRepeat: "no-repeat",
                 opacity: `${type === "attack" && attack >= price ||
                 type === "defense" && defense >= price || used === "used" ? "0.8" : "0.3"}`
             }}>
            <header className={styles.cardHeader} style={{
                backgroundColor: `${type === "attack" ? "red" : "blue"}`,
                opacity: 0.8
            }}>
                <span className={styles.name}>{name}</span>
                <span className={styles.price}>{price}</span>
            </header>
            <footer className={styles.cardFooter} style={{
                backgroundColor: `${type === "attack" ? "red" : "blue"}`,
                opacity: 0.8
            }}>{description}</footer>
            {inOrOut && used !== "used" ? <div className={styles.pass} onClick={passTurn}>Pass</div> : null}
        </div>
    )
}
