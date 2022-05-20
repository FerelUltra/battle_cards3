import styles from './Card.module.css'
import {FC} from "react";
import {ICard} from "../../types/cards";


export const Card: FC<ICard> = ({
                                    type,
                                    name,
                                    picture,
                                    price,
                                    damage,
                                    defenseGenIncrease,
                                    defenseIncrease,
                                    effect,
                                    plusAttack,
                                    repair,
                                    plusAttackGen,
                                    decrease
                                }) => {

    return (
        <div className={styles.card} style={{
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
            }}>{type === "attack" ? `${price} attack` : `${price} defense` }</footer>
        </div>
    )
}
