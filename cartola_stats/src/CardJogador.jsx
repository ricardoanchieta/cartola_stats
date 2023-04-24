import React from "react";
import styles from './css/CardJogador.module.css'

export default props =>
    <div className={styles.cardContainer}>
        <h1>
            <strong>Jogador: </strong>
            {props.nome}
        </h1>
        <h2>
            <strong>Minimo para valorizar: </strong>
            {props.minimo_para_valorizar}
        </h2>
    </div>