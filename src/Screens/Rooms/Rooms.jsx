import React from 'react';
import CustomCard from '../../Components/Cards/CustomCard'; 
import room1 from '../../assets/room1.jpg'; 
import room2 from '../../assets/room2.jpg';
import room3 from '../../assets/room3.jpg'; 
import room4 from '../../assets/room4.jpg';
import room5 from '../../assets/room5.jpg';
import room6 from '../../assets/room6.jpg'
import styles from './Rooms.module.css';
import PoolSideRoom from './PoolSideRoom';
import BeachViewRoom from './BeachViewRoom';

const Rooms = () => {
  const roomData = [
    {
      id:1,
      img: room1,
      money:'$100',
      title: "Deluxe Room",
      desc: "A spacious room with luxurious amenities."
    },
    {
      id:2,
      img:  room2,
      money:'$100',
      title: "Standard Room",
      desc: "A comfortable room with all basic facilities."
    },
    {
      id:3,
      img: room3,
      money:'$100',
      title: "Suite",
      desc: "An elegant suite with a stunning view."
    },
    {
      id:4,
        img:  room4,
        money:'$100',
        title: "Standard Room",
        desc: "A comfortable room with all basic facilities."
      },

      {
        id:5,
        img:  room5,
        money:'$100',
        title: "Deluxe Room",
        desc: "A comfortable room with all basic facilities."
      },
      {
        id:6,
        img:  room6,
        money:'$100',
        title: "Suite",
        desc: "A comfortable room with all basic facilities."
      },
  ];

  return (
    <>
    <div style={{paddingTop:"40px"}}>
    <h1 style={{textAlign:"center", fontSize:"40px"}}>Our Rooms</h1>
    </div>
    <div className={styles.roomsContainer}>
    <BeachViewRoom/> <br />
      <PoolSideRoom/>
      
      </div>
    </>
  );
}

export default Rooms;
