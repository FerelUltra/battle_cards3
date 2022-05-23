import styles from './Card.module.css'
import {FC, useState} from "react";
import {ICard} from "../../types/cards";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {
    attackIncreaseReducer,
    damageReducer,
    defenseIncreaseReducer,
    repairReducer
} from "../../store/reducers/RocketsSlice";
import {replaceCard, setLastMyCard} from "../../store/reducers/CardsSlice";
import {getRandomArrayElement} from "../../helpers/randomElement";
import {changeTurn} from "../../store/reducers/TurnSlice";

export const Card: FC<ICard> = ({
                                    type,
                                    name,
                                    picture,
                                    price,
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
        type
    }
    const dispatch = useAppDispatch();
    const allCards = useAppSelector(state => state.cardsReducer.allCards)
    const turn = useAppSelector(state => state.turnReducer.turn)
    const [randomCard, setRandomCard] = useState(getRandomArrayElement(allCards));
    const cardClick = () => {
        if (turn === "youTurn") {
            switch (effect) {
                case "damage":
                    dispatch(damageReducer(damage))
                    break
                case "repair":
                    dispatch(repairReducer(repair))
                    break
                case "attackIncrease":
                    dispatch(attackIncreaseReducer(attackIncrease))
                    break
                case "defenseIncrease":
                    dispatch(defenseIncreaseReducer(defenseIncrease))
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
        }
    }
    const nothing = () => {
        return null
    }
    return (
        <div className={styles.card}
             onClick={used === "used" ? nothing : cardClick}
             style={{
                 background: `url(${picture}) no-repeat`,
                 backgroundSize: "cover"
             }}>
            <header className={styles.cardHeader} style={{
                backgroundColor: `${type === "attack" ? "red" : "blue"}`,
                opacity: 0.8
            }}>{name}</header>
            <footer className={styles.cardFooter} style={{
                backgroundColor: `${type === "attack" ? "red" : "blue"}`,
                opacity: 0.8
            }}>{type === "attack" ? `${price} attack` : `${price} defense`}</footer>
        </div>
    )
}
