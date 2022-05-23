import styles from './LastCards.module.css'
import {FC} from "react";
import {useAppSelector} from "../../hooks/redux";
import {Card} from "../Card";

export const LastCards: FC = () => {
    const lastMyCard = useAppSelector(state => state.cardsReducer.lastMyCard)
    const lastEnemyCard = useAppSelector(state => state.cardsReducer.lastEnemyCard)
    return (
        <div className={styles.lastCards}>
            {lastMyCard ? <Card type={lastMyCard.type}
                                picture={lastMyCard.picture}
                                effect={lastMyCard.effect}
                                name={lastMyCard.name}
                                price={lastMyCard.price}
                                repair={lastMyCard.repair}
                                defenseIncrease={lastMyCard.defenseIncrease}
                                defenseGenIncrease={lastMyCard.defenseGenIncrease}
                                damage={lastMyCard.damage}
                                decrease={lastMyCard.decrease}
                                attackGenIncrease={lastMyCard.attackGenIncrease}
                                attackIncrease={lastMyCard.attackIncrease}
                                used={"used"}
            /> : null}
            {lastEnemyCard ? <Card type={lastEnemyCard.type}
                                picture={lastEnemyCard.picture}
                                effect={lastEnemyCard.effect}
                                name={lastEnemyCard.name}
                                price={lastEnemyCard.price}
                                repair={lastEnemyCard.repair}
                                defenseIncrease={lastEnemyCard.defenseIncrease}
                                defenseGenIncrease={lastEnemyCard.defenseGenIncrease}
                                damage={lastEnemyCard.damage}
                                decrease={lastEnemyCard.decrease}
                                attackGenIncrease={lastEnemyCard.attackGenIncrease}
                                attackIncrease={lastEnemyCard.attackIncrease}
                                used={"used"}
            /> : null}
        </div>
    )
}
