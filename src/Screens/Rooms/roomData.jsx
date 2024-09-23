import beach1 from '../../assets/beach1.jpg';
import beach2 from '../../assets/beach2.jpg';
import beach3 from '../../assets/beach3.jpg';
import beach4 from '../../assets/beach4.jpg';
import beach5 from '../../assets/beach5.jpg';
import beach6 from '../../assets/beach6.webp';
import room1 from '../../assets/room1.jpg';
import room2 from '../../assets/room2.jpg';
import room3 from '../../assets/room3.jpg';
import room4 from '../../assets/room4.jpg';
import room5 from '../../assets/room5.jpg';
import room6 from '../../assets/room6.jpg';

export const beachViewRoomData = [
    {
        id: 1,
        img: beach1,
        title: "Deluxe Room",
        desc: "A spacious room with luxurious amenities.",
        money: '$150',
    },
    {
        id: 2,
        img: beach2,
        title: "Standard Room",
        desc: "A comfortable room with all basic facilities.",
        money: '$150',
    },
    {
        id: 3,
        img: beach3,
        title: "Suite",
        desc: "An elegant suite with a stunning view.",
        money: '$150',
    },
    {
        id: 4,
        img: beach4,
        title: "Standard Room",
        desc: "A comfortable room with all basic facilities.",
        money: '$150',
    },
    {
        id: 5,
        img: beach5,
        title: "Deluxe Room",
        desc: "A comfortable room with all basic facilities.",
        money: '$150',
    },
    {
        id: 6,
        img: beach6,
        title: "Suite",
        desc: "A comfortable room with all basic facilities.",
        money: '$150',
    },
];

export const poolSideRoomData = [
    {
        id: 7,
        img: room1,
        title: "Deluxe Room",
        desc: "A spacious room with luxurious amenities.",
        money: '$50',
    },
    {
        id: 8,
        img: room2,
        title: "Standard Room",
        desc: "A comfortable room with all basic facilities.",
        money: '$100',
    },
    {
        id: 9,
        img: room3,
        title: "Suite",
        desc: "An elegant suite with a stunning view.",
        money: '$100',
    },
    {
        id: 10,
        img: room4,
        title: "Standard Room",
        desc: "A comfortable room with all basic facilities.",
        money: '$100',
    },
    {
        id: 11,
        img: room5,
        title: "Deluxe Room",
        desc: "A comfortable room with all basic facilities.",
        money: '$100',
    },
    {
        id: 12,
        img: room6,
        title: "Suite",
        desc: "A comfortable room with all basic facilities.",
        money: '$100',
    },
];


export const allRoomData = [
    ...beachViewRoomData,
    ...poolSideRoomData,
  ];
  