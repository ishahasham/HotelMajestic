import React from 'react';
import CustomCard from '../../Components/Cards/CustomCard';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { poolSideRoomData } from './roomData';
import styles from './Rooms.module.css';


const PoolSideRoom = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <Sidebar />
            </div>
            <div className={styles.content}>
                <div className={styles.subContent}>
                    <h1 className={styles.heading}>Pool Side Rooms</h1>
                </div>
                <div className={styles.roomsContainer}>
                    {poolSideRoomData.map((room) => (
                        <div className={styles.card} key={room.id}>
                            <CustomCard
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
          
        </div>
    );
};

export default PoolSideRoom;
