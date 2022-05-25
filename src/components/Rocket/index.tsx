import {FC, useEffect, useState} from "react";
import styles from "./Rocket.module.css";
import SvgRocket50 from "../../assets/Rocket50";
import SvgRocket25 from "../../assets/Rocket25";
import SvgRocket75 from "../../assets/Rocket75";
import SvgRocket100 from "../../assets/Rocket100";
import {IYouOrEnemy, typeHealthState} from "../../types/rocketInfo";
import {RocketInfo} from "../RocketInfo";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import SVGBomb from "../../assets/Bomb"
import {max} from "rxjs";

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
    useEffect(() => {
        switch (true) {
            case (currentHealth >= maxHealth):
                setHealthState("full")
                break
            case (currentHealth > 100):
                setHealthState("high")
                break
            case (currentHealth <= 100 && currentHealth > 50):
                setHealthState("medium")
                break
            case (currentHealth < 50):
                setHealthState("low")
                break
        }
    }, [currentHealth]);
    const [healthState, setHealthState] = useState<typeHealthState>("medium");
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
                                defenseGen={defenseGen}
                                healthState={healthState}
                    />
                    {healthState === "full" ? <SvgRocket100 width="850px" height="850px" fill="green"/> :
                        healthState === "high" ? <SvgRocket75 width="850px" height="850px" fill="green"/> :
                            healthState === "medium" ? <SvgRocket50 width="850px" height="850px" fill="green"/> :
                                <SvgRocket25 width="850px" height="850px" fill="green"/>}
                    {bombed ? <SVGBomb style={{
                        position: 'absolute',
                        top: "500px",
                        right: "35%",
                        width: "56px",
                        height: "56px"
                    }}/> : null}
                </div> :
                <div className={styles.rocket}>
                    {healthState === "full" ? <SvgRocket100 width="850px" height="850px" fill="green"/> :
                        healthState === "high" ? <SvgRocket75 width="850px" height="850px" fill="red"/> :
                            healthState === "medium" ? <SvgRocket50 width="850px" height="850px" fill="red"/> :
                                <SvgRocket25 width="850px" height="850px" fill="red"/>}
                    <RocketInfo youOrEnemy={"enemy"}
                                maxHealth={maxHealth}
                                currentHealth={currentHealth}
                                attack={attack}
                                attackGen={attackGen}
                                defense={defense}
                                defenseGen={defenseGen}
                                healthState={healthState}
                    />
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
