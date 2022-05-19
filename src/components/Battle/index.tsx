import styles from './Battle.module.css'
import {FC} from "react";
import SvgRocket50 from "../../assets/Rocket50"

export const Index: FC = () => {
    return (
        <div className={styles.battle}>
            <div className={styles.rockets}>
                <div className={styles.myRocket}>
                    <SvgRocket50 width="850px" height="850px" fill="green"/>
                    <div className={styles.healthLine}>
                        75/150
                        <div className={styles.myHealth}></div>
                    </div>
                </div>
                <div className={styles.enemyRocket}>
                    <SvgRocket50 width="850px" height="850px" fill="red"/>
                    <div className={styles.healthLine}>
                        75/150
                        <div className={styles.enemyHealth}></div>
                    </div>
                </div>
            </div>

        </div>
    )
}
