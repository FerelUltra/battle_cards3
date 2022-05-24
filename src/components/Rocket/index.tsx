import {FC} from "react";
import styles from "./Rocket.module.css";
import SvgRocket50 from "../../assets/Rocket50";
import {IYouOrEnemy} from "../../types/rocketInfo";
import {RocketInfo} from "../RocketInfo";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import SVGBomb from "../../assets/Bomb"

export const Rocket: FC<IYouOrEnemy> = ({youOrEnemy}) => {
    const dispatch = useAppDispatch();
    const {
        currentHealth,
        maxHealth,
        attack,
        defense,
        attackGen,
        defenseGen,
        bombed
    } = useAppSelector(state => {
        return youOrEnemy === "you" ? state.rocketsReducer.myRocket : state.rocketsReducer.enemyRocket
    })
    return (
        <>
            {youOrEnemy === "you" ?
                <div className={styles.rocket}>
                    <RocketInfo youOrEnemy={"you"}
                                maxHealth={maxHealth}
                                currentHealth={currentHealth}
                                attack={attack}
                                attackGen={attackGen}
                                defense={defense}
                                defenseGen={defenseGen}/>
                    <SvgRocket50 width="850px" height="850px" fill="green"/>
                    {bombed ? <SVGBomb style={{
                        position: 'absolute',
                        top: "500px",
                        right: "35%",
                        width: "56px",
                        height: "56px"
                    }}/> : null}
                </div> :
                <div className={styles.rocket}>
                    <SvgRocket50 width="850px" height="850px" fill="red"/>
                    <RocketInfo youOrEnemy={"enemy"}
                                maxHealth={maxHealth}
                                currentHealth={currentHealth}
                                attack={attack}
                                attackGen={attackGen}
                                defense={defense}
                                defenseGen={defenseGen}/>
                    {bombed ? <SVGBomb style={{
                            position: 'absolute',
                            top: "500px",
                            left: "35%",
                            width: "56px",
                            height: "56px"
                        }}/> : null}
                </div>
            }

        </>
    )
}
