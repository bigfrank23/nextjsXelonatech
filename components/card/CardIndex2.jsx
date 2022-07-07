import React from 'react'
import styles from '../../styles/CardIndex2.module.css'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const CardIndex2 = () => {
  return (
    <div className='container d-flex justify-content-around gap-3'>
        <div className={styles.card}>
            <div className={styles.imgbox}>
            <div style={{position: 'absolute', color: '#fff', width: '100%', padding: '1rem', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center'}}>
                <FormatQuoteIcon />
                 <p>We Offer bespoke user experience, web design,  app design and software development services.</p> 
            </div>
                <img src="https://images.unsplash.com/photo-1510936111840-65e151ad71bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1190&q=80" alt="" />
                {/* <img src="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" alt="" /> */}
            </div>
            <div className={styles.content}>
                {/* <img src="/images/blog1.png" width={100} alt="" /> */}
                <h5>Quality</h5>
                {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, esse? Dignissimos officiis dolore beatae! Rerum, itaque, nisi inventore vitae, delectus suscipit mollitia sunt amet atque voluptas recusandae rem neque sapiente!</p> */}
            </div>
        </div>
        <div className={styles.card}>
            <div className={styles.imgbox}>
            <div style={{position: 'absolute', color: '#fff', width: '100%', padding: '1rem', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center'}}>
                <FormatQuoteIcon />
                 <p>We are experts in providing digital marketing strategies that convert engagement and clicks to sales.</p> 
            </div>
                <img src="https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            </div>
            <div className={styles.content}>
                <h5>Quality</h5>
                {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, esse? Dignissimos officiis dolore beatae! Rerum, itaque, nisi inventore vitae, delectus suscipit mollitia sunt amet atque voluptas recusandae rem neque sapiente!</p> */}
            </div>
        </div>
        <div className={styles.card}>
            <div className={styles.imgbox}>
            <div style={{position: 'absolute', color: '#fff', width: '100%', padding: '1rem', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center'}}>
                <FormatQuoteIcon />
                 <p>The first phase in theThe first phase in the life cycle of a network involves creating its design, a task not usually performed by new network administrators</p> 
            </div>
                <img src="https://images.unsplash.com/photo-1557264337-e8a93017fe92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                {/* <img src="https://images.unsplash.com/photo-1447703693928-9cd89c8d3ac5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" /> */}
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