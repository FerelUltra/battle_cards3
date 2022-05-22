import styles from './Card.module.css'
import {FC, useEffect, useState} from "react";
import {ICard} from "../../types/cards";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {
    damageReducer,
    attackIncreaseReducer,
    defenseIncreaseReducer,
    repairReducer
} from "../../store/reducers/RocketsSlice";
import {replaceCard} from "../../store/reducers/CardsSlice";
import {getRandomArrayElement} from "../../helpers/randomElement";

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
                                    index
                                }) => {
    useEffect(() => {

    }, [])
    const dispatch = useAppDispatch();
    const allCards = useAppSelector(state => state.cardsReducer.allCards)
    const [randomCard, setRandomCard] = useState(getRandomArrayElement(allCards));
    const cardClick = () => {
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
            dispatch(replaceCard({index, randomCard}))
        } else {
            setRandomCard(getRandomArrayElement(allCards))
            dispatch(replaceCard({index, randomCard}))
        }
    }

    return (
        <div className={styles.card}
             onClick={cardClick}
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
