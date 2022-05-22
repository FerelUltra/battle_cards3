import styles from './Battle.module.css'
import {FC} from "react";
import {Cards} from "../Cards";
import {Rocket} from "../Rocket";

export const Battle: FC = () => {
    return (
        <div className={styles.battle}>
            <div className={styles.rockets}>
                <Rocket youOrEnemy={"you"}/>
                <Rocket youOrEnemy={"enemy"}/>
            </div>
            <Cards/>
        </div>
    )
}
