import React, { useEffect, useState } from 'react';
import { db } from '../../Configuration/Firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';

const GymTable = () => {
    const [gymMembers, setGymMembers] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'gym_members'), (snapshot) => {
            const memberData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setGymMembers(memberData);
        });

        return () => unsubscribe();
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
    const displayedRows = gymMembers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone Number</TableCell>
                        <TableCell>Booking Date</TableCell>
                        <TableCell>Time Slot</TableCell>
                        <TableCell>Special Requests</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {displayedRows.map((member) => (
                        <TableRow key={member.id}>
                            <TableCell>{member.guestFirstName}</TableCell>
                            <TableCell>{member.guestLastName}</TableCell>
                            <TableCell>{member.email}</TableCell>
                            <TableCell>{member.phoneNumber}</TableCell>
                            <TableCell>{member.bookingDate}</TableCell>
                            <TableCell>{member.timeSlot}</TableCell>
                            <TableCell>{member.specialRequests}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 50]}
                component="div"
                count={gymMembers.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </TableContainer>
    );
};

export default GymTable;
 