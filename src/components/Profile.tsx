import styles from '../styles/components/Profile.module.css'

export default function Profile(){
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/IggorSantos.png" />
      <div>
       <strong>Igor Santos</strong>
       <p>
         <img src="icons/level.svg" alt="Level Logo" />
         Level 1
       </p>
     </div>
    </div>
  )
}
