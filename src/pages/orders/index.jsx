// import AddOrder from "../../components/modal/order-modal";
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
// import order from "../../service/service";
// import { useEffect, useState } from "react";
// import MessageIcon from '@mui/icons-material/Message';
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
//   const [orders, setOrders] = useState([]);

//   const getOrder = async () => {
//     try {
//       const responce = await order.get();
//       setOrders(responce.data.orders);
//       if (responce.status === 200 && responce?.data?.order) {
//         return responce.data.orders;
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     getOrder();
//   }, []);

//   const [edit, setEdit] = useState({});
//   const [open, setOpen] = useState(false);

//   const deleteItem = async (id) => {
//     try {
//       const responce = await orders.delete(id);
//       if (responce.status === 200) {
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
//         <h1 className="text-2xl">Order</h1>
//         <AddOrder />
//       </div>

//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 700 }} aria-label="customized table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell></StyledTableCell>
//               <StyledTableCell>Miqdori</StyledTableCell>
//               <StyledTableCell>Ism Sharifi</StyledTableCell>
//               {/* <StyledTableCell align="right">Buyutirildi</StyledTableCell>
//               <StyledTableCell align="right">Tugatildi</StyledTableCell> */}
//               <StyledTableCell align="right">Telefon raqami: </StyledTableCell>
//               <StyledTableCell align="right">Boshqich</StyledTableCell>
//               <StyledTableCell align="right"></StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {orders &&
//               orders.map((row, index) => (
//                 <StyledTableRow key={row.name}>
//                   <StyledTableCell align="right">
//                     <form>
//                       <input type="checkbox" />
//                     </form>
//                   </StyledTableCell>
//                   <StyledTableCell>
//                     {row.amount}
//                   </StyledTableCell>
//                   <StyledTableCell>
//                     {row.client_full_name}
//                   </StyledTableCell>
//                   <StyledTableCell align="right">
//                     {row.client_phone_number}
//                   </StyledTableCell>
//                   {/* <StyledTableCell align="right">
//                     {row.buyutirildi}
//                   </StyledTableCell>
//                   <StyledTableCell align="right">
//                     {row.tugatildi}
//                   </StyledTableCell> */}
//                   <StyledTableCell align="right">
//                     {row.service_id}
//                   </StyledTableCell>
//                   <StyledTableCell align="right">
//                     <button onClick={() => messageItem(row.id)}>
//                       <MessageIcon color="error" />
//                     </button>
//                     <button className="mx-3" onClick={() => deleteItem(row.id)}>
//                       <DeleteIcon color="error" />
//                     </button>
//                     <button onClick={() => editItem(row)}>
//                       <EditIcon color="error" />
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



// import AddOrder from "../../components/modal/order-modal";
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
// import order from "../../service/order";
// import { useEffect, useState } from "react";
// import MessageIcon from '@mui/icons-material/Message';

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
//   const [orders, setOrders] = useState([]);

//   const getOrder = async () => {
//     try {
//       const response = await order.get();
//       setOrders(response.data.orders);
//       if (response.status === 200 && response?.data?.orders) {
//         return response.data.orders;
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     getOrder();
//   }, []);

//   const [edit, setEdit] = useState({});
//   const [open, setOpen] = useState(false);

//   const deleteItem = async (id) => {
//     try {
//       const response = await order.delete(id);
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

//   const messageItem = (id) => {
//     // Message item funksiyasini aniqlash kerak
//     console.log(`Message item with id: ${id}`);
//   };

//   return (
//     <div>
//       <div className="flex w-full justify-between items-center mb-6">
//         <h1 className="text-2xl">Order</h1>
//         <AddOrder edit={edit} open={open} />
//       </div>

//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 700 }} aria-label="customized table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell></StyledTableCell>
//               <StyledTableCell>Miqdori</StyledTableCell>
//               <StyledTableCell>Ism Sharifi</StyledTableCell>
//               <StyledTableCell align="right">Telefon raqami</StyledTableCell>
//               <StyledTableCell align="right">Boshqich</StyledTableCell>
//               <StyledTableCell align="right"></StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {orders &&
//               orders.map((row) => (
//                 <StyledTableRow key={row.id}>
//                   <StyledTableCell align="right">
//                     <form>
//                       <input type="checkbox" />
//                     </form>
//                   </StyledTableCell>
//                   <StyledTableCell>{row.amount}</StyledTableCell>
//                   <StyledTableCell>{row.client_full_name}</StyledTableCell>
//                   <StyledTableCell align="right">{row.client_phone_number}</StyledTableCell>
//                   <StyledTableCell align="right">{row.service_id}</StyledTableCell>
//                   <StyledTableCell align="right">
//                     <button onClick={() => messageItem(row.id)}>
//                       <MessageIcon color="error" />
//                     </button>
//                     <button className="mx-3" onClick={() => deleteItem(row.id)}>
//                       <DeleteIcon color="error" />
//                     </button>
//                     <button onClick={() => editItem(row)}>
//                       <EditIcon color="error" />
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


import AddOrder from "../../components/modal/order-modal";
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
import order from "../../service/order";
import { useEffect, useState } from "react";
import MessageIcon from '@mui/icons-material/Message';

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
  const [orders, setOrders] = useState([]);
  const [data, setData] = ([])
  const getData = async () => {
    try {
      const response = await order.get()
      if (response.status === 200 && response?.data?.orders_list) {
        setData(response.data.orders)
      }
      console.log(response);

    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {

    getData()
  }, []);

  const [edit, setEdit] = useState({});
  const [open, setOpen] = useState(false);

  const deleteItem = async (id) => {
    try {
      const response = await order.delete(id);
      if (response.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editItem = (row) => {
    setEdit(row);
    setOpen(true);
  };

  const messageItem = (id) => {
    console.log(`Message item with id: ${id}`);
  };

  const handleClose = () => {
    setOpen(false);
    setEdit({});
  };

  return (
    <div>
      <div className="flex w-full justify-between items-center mb-6">
        <h1 className="text-2xl">Order</h1>
        <AddOrder edit={edit} open={open} handleClose={handleClose} />
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell>Miqdori</StyledTableCell>
              <StyledTableCell>Ism Sharifi</StyledTableCell>
              <StyledTableCell align="right">Telefon raqami</StyledTableCell>
              <StyledTableCell align="right">Boshqich</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell align="right">
                    <form>
                      <input type="checkbox" />
                    </form>
                  </StyledTableCell>
                  <StyledTableCell>{row.amount}</StyledTableCell>
                  <StyledTableCell>{row.client_full_name}</StyledTableCell>
                  <StyledTableCell align="right">{row.client_phone_number}</StyledTableCell>
                  <StyledTableCell align="right">{row.service_id}</StyledTableCell>
                  <StyledTableCell align="right">
                    <button onClick={() => messageItem(row.id)}>
                      <MessageIcon color="error" />
                    </button>
                    <button className="mx-3" onClick={() => deleteItem(row.id)}>
                      <DeleteIcon color="error" />
                    </button>
                    <button onClick={() => editItem(row)}>
                      <EditIcon color="error" />
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
