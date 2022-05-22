import styles from './Popup.module.css'
import {FC, useEffect} from "react";
import {useAppDispatch} from "../../hooks/redux";

export const Popup: FC = () => {
    const dispatch = useAppDispatch()
    const repeatGame = () => {

    }
    return (
        <div className={styles.popup}>
            <div className={styles.gameOver}>Congratulation!</div>
            <div className={styles.gameOverText}>
                The excellent victory! <br/>
                The enemy <br/>
                was entirely defeated! <br/>
                The great game!
            </div>
            <button onClick={repeatGame} className={styles.repeatGame}>repeat a game</button>
        </div>
    )
}
