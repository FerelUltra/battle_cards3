import styles from './Battle.module.css'
import {FC} from "react";
import {Cards} from "../Cards";
import {Rocket} from "../Rocket";
import {useAppSelector} from "../../hooks/redux";
import {Popup} from "../Popup";

export const Battle: FC = () => {
    const myCurrentHealth = useAppSelector(state => state.rocketsReducer.myRocket.currentHealth)
    const myMaxHealth = useAppSelector(state => state.rocketsReducer.myRocket.maxHealth)
    const enemyCurrentHealth = useAppSelector(state => state.rocketsReducer.enemyRocket.currentHealth)
    const enemyMaxHealth = useAppSelector(state => state.rocketsReducer.enemyRocket.maxHealth)
    return (
        <div className={styles.battle}>
            <div className={styles.rockets}>
                <Rocket youOrEnemy={"you"}/>
                <Rocket youOrEnemy={"enemy"}/>
            </div>
            <Cards/>
            {myCurrentHealth >= myMaxHealth || enemyCurrentHealth <= 0 ? <Popup victoryOrLoss={"victory"}/> : null}
            {myCurrentHealth <= 0 || enemyCurrentHealth >= enemyMaxHealth ? <Popup victoryOrLoss={"loss"}/> : null}
        </div>
    )
}
