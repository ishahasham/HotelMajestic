import React from 'react';
import { DataGym } from './DataGym';
import styles from './Gym.module.css';
import CustomCard2 from '../../Components/Cards/CustomCard2';



const ViewGym= () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
              
            </div>
            <div className={styles.content}>
                <div className={styles.subContent}>
                    <h1 className={styles.heading}>Gym</h1>
                </div>
                <div className={styles.roomsContainer}>
                    {DataGym.map((room) => (
                        <div className={styles.card} key={room.id}>
                            <CustomCard2
                                id={room.id}
                                img={room.img}
                                title={room.title}
                                desc={room.desc}
                                money={room.money}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <br />
           

        </div>
    );
};

export default ViewGym;
