import styles from './Turn.module.css'
import {FC} from "react";
import {useAppSelector} from "../../hooks/redux";

export const Turn: FC = () => {
   const turn = useAppSelector(state => state.turnReducer.turn)
    return (
        <div className={styles.turn} style={{
            color: `${turn === "youTurn" ? "white" : "red"}`
        }}>
            {turn === "youTurn" ? "Your turn" : "enemy's turn"}
        </div>
    )
}
