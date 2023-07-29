import React from 'react'

import styles from '../components/Creep.module.css'

import link from "../components/homepage"

function Creep() {
  return (
    <><div className={styles.mummy}>
      <div className={styles.error}>
        <button type='button' onClick="link()">click me</button>
      </div>
      <><div className={styles.leftBox}>
        <div className={styles.ans}>
          Creep
        </div>

      </div><div className={styles.rightBox}>
          <div className={styles.tweetBox}>
            <div className={styles.tweetImage}></div>
            <div className={styles.profilePic}></div>
            <div className={styles.actualTweetBox}>
              <h5 className={styles.h5}>Jack Daniels</h5>
              <h7 className={styles.h7}>@jackdaniel223</h7>
              <div className={styles.content}>
                <div className={styles.textBox}><p id='hello'>hello the worldjs
                  lkvnsidbsdo
                  slkndokfmw
                  sklvnson 

                </p></div>

                <div>
                <div className={styles.lol}>198</div><div className={styles.lol}>136</div><div className={styles.lol}>102</div>
                </div>
                <div className={styles.lolA}>Tweets</div><div className={styles.lolA}>Following</div><div className={styles.lolA}>Followers</div>

              </div>
            </div>
          <div className={styles.inline}>  
          <div className={styles.lastButtons}><p>Message</p></div>
          <div className={styles.lastButtons2}><p>Follow</p></div>
          </div>
          </div>
        </div></>
    </div>
    </>
  )
}

export default Creep