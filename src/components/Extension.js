import React from 'react'
import styles from './Extension.module.css'

const Extension = () => {
  return (
    <div className={styles.style1}>
    <div id="p1" className={styles.para}>Extension</div>
    </div>
  )
}
function Mybuttons(){
  return(
    <button>this is a button</button>
  )
}
export default Extension;
export{ Mybuttons};
