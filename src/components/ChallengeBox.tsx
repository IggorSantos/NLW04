import {useContext} from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/ChallengeBox.module.css'

export default function ChallengeBox(){
  const hasActiveChallenge = true;
  const contextData = useContext(ChallengesContext)
  console.log(contextData)
  return(
    <div className={styles.challengeBoxContainer}>
      { hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400 xp</header>

          <main>
            <img src="icons/body.svg" />
            <strong>Novo desafio</strong>
            <p>Levanta e anda</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
            >
              Falhei
          </button>
          <button
            type="button"
            className={styles.challengeSucceededButton}
          >
            Completei
        </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafio
          </p>
        </div>
      )}

    </div>
  )
}
