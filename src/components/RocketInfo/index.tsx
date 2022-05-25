import {FC} from "react";
import styles from "./RocketInfo.module.css"
import {IRocketInfoProps} from "../../types/rocketInfo";

export const RocketInfo: FC<IRocketInfoProps> = ({
                                                     youOrEnemy,
                                                     maxHealth,
                                                     currentHealth,
                                                     defense,
                                                     defenseGen,
                                                     attackGen,
                                                     attack,
                                                     healthState
                                                 }) => {
    return (
        <div className={styles.rocketInfo}>
            <section className={styles.youOrEnemy}
                     style={{color: `${youOrEnemy === "enemy" ? "red" : null}`}}>{youOrEnemy}</section>
            <div className={styles.parameters}>
                <section className={styles.health}>rocket <span style={{
                    color: `${healthState === "high" ? "green" : healthState === "medium" ? "yellow" : "red"}`
                }}>{currentHealth}/{maxHealth}</span></section>
                <section className={styles.attackParameter}>attack <span>{attack}</span></section>
                <section className={styles.attackParameter}>attackGen <span>{attackGen}</span></section>
                <section className={styles.defenseParameter}>defense <span>{defense}</span></section>
                <section className={styles.defenseParameter}
                         style={{borderBottom: "0"}}>defenseGen <span>{defenseGen}</span></section>
            </div>
        </div>
    )
}
