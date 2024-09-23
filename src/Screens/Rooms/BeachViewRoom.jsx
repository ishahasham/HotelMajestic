import React from 'react';
import CustomCard from '../../Components/Cards/CustomCard';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { beachViewRoomData } from './roomData';
import styles from './Rooms.module.css';



const BeachViewRoom = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <Sidebar />
            </div>
            <div className={styles.content}>
                <div className={styles.subContent}>
                    <h1 className={styles.heading}>Beach View Rooms</h1>
                </div>
                <div className={styles.roomsContainer}>
                    {beachViewRoomData.map((room) => (
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
            <br />
           

        </div>
    );
};

export default BeachViewRoom;
