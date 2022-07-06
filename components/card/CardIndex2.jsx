import React from 'react'
import styles from '../../styles/CardIndex2.module.css'

const CardIndex2 = () => {
  return (
    <div className='container d-flex justify-content-around gap-3'>
        <div className={styles.card}>
            <div className={styles.imgbox}>
                <img src="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" alt="" />
            </div>
            <div className={styles.content}>
                {/* <img src="/images/blog1.png" width={100} alt="" /> */}
                <h5>Quality</h5>
                {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, esse? Dignissimos officiis dolore beatae! Rerum, itaque, nisi inventore vitae, delectus suscipit mollitia sunt amet atque voluptas recusandae rem neque sapiente!</p> */}
            </div>
        </div>
        <div className={styles.card}>
            <div className={styles.imgbox}>
                <img src="https://images.unsplash.com/photo-1480506132288-68f7705954bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1220&q=80" alt="" />
            </div>
            <div className={styles.content}>
                <h5>Quality</h5>
                {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, esse? Dignissimos officiis dolore beatae! Rerum, itaque, nisi inventore vitae, delectus suscipit mollitia sunt amet atque voluptas recusandae rem neque sapiente!</p> */}
            </div>
        </div>
        <div className={styles.card}>
            <div className={styles.imgbox}>
                <img src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="" />
            </div>
            <div className={styles.content}>
                <h5>Quality</h5>
                {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, esse? Dignissimos officiis dolore beatae! Rerum, itaque, nisi inventore vitae, delectus suscipit mollitia sunt amet atque voluptas recusandae rem neque sapiente!</p> */}
            </div>
        </div>
    </div>
  )
}

export default CardIndex2