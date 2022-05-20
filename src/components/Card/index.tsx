import styles from './Card.module.css'
import {FC} from "react";
import {ICard} from "../../types/cards";
import {useAppDispatch} from "../../hooks/redux";
import {
    damageReducer,
    attackIncreaseReducer,
    defenseIncreaseReducer,
    repairReducer
} from "../../store/reducers/RocketsSlice";

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
                                    decrease
                                }) => {
    const dispatch = useAppDispatch();
    const cardClick = () =>{
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
                opacity: 0.5
            }}>{name}</header>
            <footer className={styles.cardFooter} style={{
                backgroundColor: `${type === "attack" ? "red" : "blue"}`,
                opacity: 0.5
            }}>{type === "attack" ? `${price} attack` : `${price} defense`}</footer>
        </div>
    )
}
