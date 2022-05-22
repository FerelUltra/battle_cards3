import styles from './Popup.module.css'
import {FC} from "react";
import {useAppDispatch} from "../../hooks/redux";
import {startNewGame} from "../../store/reducers/RocketsSlice";
import {shuffleCards} from "../../store/reducers/CardsSlice";
import {IPopupProps} from "../../types/popup";

export const Popup: FC<IPopupProps> = ({victoryOrLoss}) => {
    const dispatch = useAppDispatch()
    const repeatGame = () => {
        dispatch(startNewGame())
        dispatch(shuffleCards())
        console.log('startNewGame')
    }
    return (
        <div className={styles.popup}>
            <div className={styles.gameOver}>{
                victoryOrLoss === "victory" ?
                    "Congratulation!" :
                    "You've been defeated"
            }
            </div>
            {victoryOrLoss === "victory" ?
                <div className={styles.gameOverText}>
                    The excellent victory! <br/>
                    The enemy <br/>
                    was entirely defeated! <br/>
                    The great game!
                </div> :
                <div className={styles.gameOverText}>
                    The opponent was strong <br/>
                    But do not cave in to despair! <br/>
                    Next time luck will be with you!
                </div>

            }

            <button onClick={repeatGame} className={styles.repeatGame}>repeat a game</button>
        </div>
    )
}
