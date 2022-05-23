import styles from './Cards.module.css'
import {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {Card} from "../Card";
import {setHandCards, shuffleCards} from "../../store/reducers/CardsSlice";

export const Cards: FC = () => {
    const dispatch = useAppDispatch()
    const allCards = useAppSelector((state) => state.cardsReducer.allCards)
    const handCards = useAppSelector((state) => state.cardsReducer.handCards)

    useEffect(() => {
        dispatch(shuffleCards())

    }, [])
    useEffect(() => {
        const visibleCards = allCards.slice(0, 6)
        dispatch(setHandCards(visibleCards))
    }, [allCards]);

    return (
        <div className={styles.cards}>
            {
                handCards.map((card, index) => <Card
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
                    attackIncrease={card.attackIncrease}
                    attackGenIncrease={card.attackGenIncrease}
                    repair={card.repair}
                    index={index}
                    description={card.description}
                />)
            }
        </div>
    )
}
