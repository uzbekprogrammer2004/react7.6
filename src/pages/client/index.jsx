// import AddClient from "../../components/modal/client-add-modal";
// import { styled } from "@mui/material/styles";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Button from "@mui/material/Button"; 
// import client from "../../service/client";
// import { useEffect, useState } from "react";

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.primary.main,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(odd)": {
//     backgroundColor: theme.palette.action.hover,
//   },
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
// }));

// const Index = () => {
//   const [clients, setClients] = useState([]);

//   const getClient = async () => {
//     try {
//       const response = await client.get();
//       console.log(response?.data?.clients_list);
//       if (response.status === 200 && response?.data?.clients_list) {
//         setClients(response?.data?.clients_list);
//         return response?.data?.clients_list;
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     getClient();
//   }, []);

//   const [edit, setEdit] = useState({});
//   const [open, setOpen] = useState(false);
//   const [data, setData] = useState([]);
//   const deleteItem = async (id,owner_id) => {
//     const getData = async () => {
//       try {
//         const response = await order.get();
//         console.log(response?.data?.orders_list?.client_id);
//         if (response.status === 200 && response?.data?.orders_list) {
//           setData(response.data.orders_list);
//           console.log(data?.client_id);
//         }
//         console.log(response);
//       } catch (error) {
//         console.log(error);
//       }
//     };
  
//     useEffect(() => {
//       getData();
//     }, []);
//     console.log(owner_id);
//     try {
//       const response = await client.delete(owner_id,id);
//       if (response.status === 200) {
//         window.location.reload();
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const editItem = (row) => {
//     setEdit(row);
//     setOpen(true);
//   };

//   return (
//     <div>
//       <div className="flex w-full justify-between items-center mb-6">
//         <h1 className="text-2xl">Service</h1>
//         <Button onClick={() => editItem({})} variant="contained">
//           Add Client
//         </Button>
//         <AddClient row={edit} open={open} handleClose={() => setOpen(false)} />
//       </div>

//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 700 }} aria-label="customized table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell>T/R</StyledTableCell>
//               <StyledTableCell>Name</StyledTableCell>
//               <StyledTableCell align="right">Phone</StyledTableCell>
//               <StyledTableCell align="right">Edit</StyledTableCell>
//               <StyledTableCell align="right">Delete</StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {clients &&
//               clients.map((row, index) => (
//                 <StyledTableRow key={row.id}>
//                   <StyledTableCell>{index + 1}</StyledTableCell>
//                   <StyledTableCell component="th" scope="row">
//                     {row.full_name}
//                   </StyledTableCell>
//                   <StyledTableCell align="right">
//                     {row.phone_number}
//                   </StyledTableCell>
//                   <StyledTableCell align="right">
//                     <button onClick={() => editItem(row)}>
//                       <EditIcon color="error" />
//                     </button>
//                   </StyledTableCell>
//                   <StyledTableCell align="right">
//                     <button onClick={() => deleteItem(row.id,row.owner_id)}>
//                       <DeleteIcon color="error" />
//                     </button>
//                   </StyledTableCell>
//                 </StyledTableRow>
//               ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default Index;


import AddClient from "../../components/modal/client-add-modal";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button"; 
import client from "../../service/client";
import order from "../../service/order";
import { useEffect, useState } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Index = () => {
  const [clients, setClients] = useState([]);
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState({});
  const [open, setOpen] = useState(false);

  const getClient = async () => {
    try {
      const response = await client.get();
      console.log(response?.data?.clients_list);
      if (response.status === 200 && response?.data?.clients_list) {
        setClients(response?.data?.clients_list);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getData = async () => {
    try {
      const response = await order.get();
      console.log(response?.data?.orders_list?.client_id);
      if (response.status === 200 && response?.data?.orders_list) {
        setData(response.data.orders_list);
      }
      console.log(response.data.orders_list[0].client_id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getClient();
    getData();
  }, []);

  const deleteItem = async (id, owner_id) => {
    console.log(owner_id);
    try {
      const response = await client.delete(owner_id, id);
      if (response.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex w-full justify-between items-center mb-6">
        <h1 className="text-2xl">Client</h1>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>T/R</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="center">Phone</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients &&
              clients.map((row, index) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell>{index + 1}</StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {row.full_name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.phone_number}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <button onClick={() => deleteItem(row.id, row.owner_id)}>
                      <DeleteIcon color="error" />
                    </button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Index;
