import styles from './Battle.module.css'
import {FC, useEffect} from "react";
import {Cards} from "../Cards";
import {Rocket} from "../Rocket";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {Popup} from "../Popup";
import {Turn} from "../Turn";
import {getRandomArrayElement} from "../../helpers/randomElement";
import {
    enemyAttackIncreaseReducer,
    enemyDamageReducer,
    enemyDefenseIncreaseReducer,
    enemyRepairReducer
} from "../../store/reducers/RocketsSlice";
import {changeTurn} from "../../store/reducers/TurnSlice";
import {LastCards} from "../LastCards";
import {setLastEnemyCard} from "../../store/reducers/CardsSlice";

export const Battle: FC = () => {
    const myCurrentHealth = useAppSelector(state => state.rocketsReducer.myRocket.currentHealth)
    const myMaxHealth = useAppSelector(state => state.rocketsReducer.myRocket.maxHealth)
    const enemyCurrentHealth = useAppSelector(state => state.rocketsReducer.enemyRocket.currentHealth)
    const enemyMaxHealth = useAppSelector(state => state.rocketsReducer.enemyRocket.maxHealth)
    const turn = useAppSelector(state => state.turnReducer.turn)
    const enemyCards = useAppSelector(state => state.cardsReducer.enemyCards)

    const dispatch = useAppDispatch();
    useEffect(() => {
        const delay = 500
        let enemyThinksTimer = setTimeout(() => {
            if (turn === "enemyTurn") {
                const randomEnemyCard = getRandomArrayElement(enemyCards)
                switch (randomEnemyCard.effect) {
                    case "damage":
                        dispatch(enemyDamageReducer(randomEnemyCard.damage))
                        break
                    case "repair":
                        dispatch(enemyRepairReducer(randomEnemyCard.repair))
                        break
                    case "attackIncrease":
                        dispatch(enemyAttackIncreaseReducer(randomEnemyCard.attackIncrease))
                        break
                    case "defenseIncrease":
                        dispatch(enemyDefenseIncreaseReducer(randomEnemyCard.defenseIncrease))
                }
                dispatch(setLastEnemyCard(randomEnemyCard))
                dispatch(changeTurn())
            }
        }, delay)
        return () => {
            clearTimeout(enemyThinksTimer)
        }
    }, [turn])

    return (
        <div className={styles.battle}>
            <div className={styles.rockets}>
                <Rocket youOrEnemy={"you"}/>
                <Rocket youOrEnemy={"enemy"}/>
            </div>
            <Cards/>
            {myCurrentHealth >= myMaxHealth || enemyCurrentHealth <= 0 ? <Popup victoryOrLoss={"victory"}/> : null}
            {myCurrentHealth <= 0 || enemyCurrentHealth >= enemyMaxHealth ? <Popup victoryOrLoss={"loss"}/> : null}
            <Turn/>
            <LastCards/>
        </div>
    )
}
