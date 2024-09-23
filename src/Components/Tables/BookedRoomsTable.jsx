import React, { useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TablePagination,
} from '@mui/material';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Configuration/Firebase';

function BookedRoomsTable() {
    const [bookedRooms, setBookedRooms] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        const fetchBookings = async () => {
            const querySnapshot = await getDocs(collection(db, 'booked_rooms'));
            const roomsData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setBookedRooms(roomsData);
        };

        fetchBookings();
    }, []);

    // Handle page change
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    // Handle rows per page change
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Calculate the rows to display on the current page
    const displayedRows = bookedRooms.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Room Type</TableCell>
                        <TableCell>Check-In Date</TableCell>
                        <TableCell>Check-Out Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {displayedRows.map((room) => (
                        <TableRow key={room.id}>
                            <TableCell>{room.guestFirstName}</TableCell>
                            <TableCell>{room.guestLastName}</TableCell>
                            <TableCell>{room.roomType}</TableCell>
                            <TableCell>{room.checkInDate}</TableCell>
                            <TableCell>{room.checkOutDate}</TableCell>
                            
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 50]}
                component="div"
                count={bookedRooms.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </TableContainer>
    );
}

export default BookedRoomsTable;
