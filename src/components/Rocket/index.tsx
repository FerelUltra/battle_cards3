import {FC} from "react";
import styles from "./Rocket.module.css";
import SvgRocket50 from "../../assets/Rocket50";
import {IYouOrEnemy} from "../../types/rocketInfo";
import {RocketInfo} from "../RocketInfo";

export const Rocket: FC<IYouOrEnemy> = ({youOrEnemy}) => {
    return (
        <>
            {youOrEnemy === "you" ?
                <div className={styles.rocket}>
                    <RocketInfo youOrEnemy={"you"}
                                maxHealth={150}
                                currentHealth={75}
                                attack={30}
                                attackGen={4}
                                defense={30}
                                defenseGen={4}/>
                    <SvgRocket50 width="850px" height="850px" fill="green"/>
                </div> :
                <div className={styles.rocket}>
                    <SvgRocket50 width="850px" height="850px" fill="red"/>
                    <RocketInfo youOrEnemy={"enemy"}
                                maxHealth={150}
                                currentHealth={75}
                                attack={30}
                                attackGen={4}
                                defense={30}
                                defenseGen={4}/>
                </div>
            }

        </>
    )
}
