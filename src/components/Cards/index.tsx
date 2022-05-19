import styles from './Cards.module.css'
import {FC, useEffect, useId} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {Card} from "../Card";
import {shuffleCards} from "../../store/reducers/CardsSlice";

export const Cards: FC = () => {
    const id = useId()
    const dispatch = useAppDispatch()
    const cards = useAppSelector((state) => state.cardsReducer.allCards)
    const visibleCards = cards.slice(0, 6)
    console.log(visibleCards)
    useEffect(() => {
        dispatch(shuffleCards())
    }, [])
    return (
        <div className={styles.cards}>
            {
                visibleCards.map((card, index) => <Card
                    key={`${index}-${card.name}`}
                    type={card.type}
                    name={card.name}
                    effect={card.effect}
                    price={card.price}
                    picture={card.picture}
                    damage={card.damage}
                    decrease={card.decrease}
                    defenseGenIncrease={card.defenseGenIncrease}
                    defenseIncrease={card.defenseIncrease}
                    plusAttack={card.plusAttack}
                    plusAttackGen={card.plusAttackGen}
                    repair={card.repair}
                />)
            }
        </div>
    )
}