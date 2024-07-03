// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
// import { Button, TextField } from "@mui/material";
// import { useState } from "react";
// import { ErrorMessage, Field, Form, Formik } from "formik";
// import { OrderValidationSchema } from "../../../utils/validation";
// import order from "../../../service/order";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   borderRadius: 1.3,
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #fff",
//   boxShadow: 24,
//   p: 3,
//   outline: "none",
// };

// export default function AddOrder() {
//   const initialValues = {
//     amount: "",
//     client_full_name: "",
//     client_phone_number: "+998",
//     service_id: "",
//   };
//   const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const handleSubmit = async (values) => {
//     console.log("Submitting values: ", values);
//     try {
//       const response = await order.create(values);
//       console.log("Response: ", response);
//       if (response.status === 201) {
//         console.log("Order created successfully!");
//         window.location.reload();
//       } else {
//         console.log("Failed to create order. Status code: ", response.status);
//       }
//     } catch (error) {
//       console.log("Error while creating order: ", error);
//     }
//   };

//   return (
//     <div>
//       <Button onClick={handleOpen} variant="contained">
//         Buyurtma yaratish
//       </Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <div>
//             <Typography id="modal-modal-title" variant="h6" component="h2">
//               Buyurtma ma‘lumotlari
//             </Typography>
//             <Formik
//               initialValues={initialValues}
//               onSubmit={handleSubmit}
//               validationSchema={OrderValidationSchema}
//             >
//               {({ isSubmitting }) => (
//                 <Form>
//                   <Field
//                     name="amount"
//                     type="text"
//                     as={TextField}
//                     label="Nechta kerak"
//                     fullWidth
//                     margin="normal"
//                     variant="outlined"
//                     helperText={
//                       <ErrorMessage
//                         name="amount"
//                         component="span"
//                         className="text-[red] text-[15px]"
//                       />
//                     }
//                   />
//                   <Field
//                     name="client_full_name"
//                     type="text"
//                     as={TextField}
//                     label="Mijoz ism sharifi"
//                     fullWidth
//                     margin="normal"
//                     variant="outlined"
//                     helperText={
//                       <ErrorMessage
//                         name="client_full_name"
//                         component="span"
//                         className="text-[red] text-[15px]"
//                       />
//                     }
//                   />
//                   <Field
//                     name="client_phone_number"
//                     type="text"
//                     as={TextField}
//                     label="Telefon raqami"
//                     fullWidth
//                     margin="normal"
//                     variant="outlined"
//                     helperText={
//                       <ErrorMessage
//                         name="client_phone_number"
//                         component="span"
//                         className="text-[red] text-[15px]"
//                       />
//                     }
//                   />
//                   <Field
//                    type='text'
//                     name="service_id"
//                     as={TextField}
//                     select
//                     fullWidth
//                     margin="normal"
//                     variant="outlined"
//                     SelectProps={{
//                       native: true,
//                     }}
//                     helperText={
//                       <ErrorMessage
//                         name="service_id"
//                         component="span"
//                         className="text-[red] text-[15px]"
//                       />
//                     }
//                   >
//                     <option value="" label="Select status" />
//                     <option value="Tozalanmoqda" label="Tozalanmoqda" />
//                     <option value="Tayyor" label="Tayyor" />
//                     <option value="Olib ketilgan" label="Olib ketilgan" />
//                   </Field>
//                   <div
//                     style={{
//                       display: "flex",
//                       justifyContent: "end",
//                       gap: "12px",
//                       marginTop: "5px",
//                     }}
//                   >
//                     <Button
//                       onClick={handleClose}
//                       type="button"
//                       variant="contained"
//                       color="warning"
//                     >
//                       Chiqish
//                     </Button>
//                     <Button
//                       type="submit"
//                       variant="contained"
//                       color="success"
//                       disabled={isSubmitting}
//                     >
//                       {isSubmitting ? "Submitting" : "Yaratish"}
//                     </Button>
//                   </div>
//                 </Form>
//               )}
//             </Formik>
//           </div>
//         </Box>
//       </Modal>
//     </div>
//   );
// }


import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { OrderValidationSchema } from "../../../utils/validation";
import order from "../../../service/order";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  borderRadius: 1.3,
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  boxShadow: 24,
  p: 3,
  outline: "none",
};

export default function AddOrder() {
  const initialValues = {
    amount: "",
    client_full_name: "",
    client_phone_number: "+998",
    service_id: "",
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (values) => {
    // Convert all values to string
    const stringValues = {
      ...values,
      amount: values.amount.toString(),
    };

    console.log("Submitting values: ", stringValues);
    try {
      const response = await order.create(stringValues);
      console.log("Response: ", response);
      if (response.status === 201) {
        console.log("Order created successfully!");
        window.location.reload();
      } else {
        console.log("Failed to create order. Status code: ", response.status);
      }
    } catch (error) {
      console.log("Error while creating order: ", error);
    }
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">
        Buyurtma yaratish
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Buyurtma ma‘lumotlari
            </Typography>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={OrderValidationSchema}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Field
                    name="amount"
                    type="text"
                    as={TextField}
                    label="Nechta kerak"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    helperText={
                      <ErrorMessage
                        name="amount"
                        component="span"
                        className="text-[red] text-[15px]"
                      />
                    }
                  />
                  <Field
                    name="client_full_name"
                    type="text"
                    as={TextField}
                    label="Mijoz ism sharifi"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    helperText={
                      <ErrorMessage
                        name="client_full_name"
                        component="span"
                        className="text-[red] text-[15px]"
                      />
                    }
                  />
                  <Field
                    name="client_phone_number"
                    type="text"
                    as={TextField}
                    label="Telefon raqami"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    helperText={
                      <ErrorMessage
                        name="client_phone_number"
                        component="span"
                        className="text-[red] text-[15px]"
                      />
                    }
                  />
                  <Field
                    type="text"
                    name="service_id"
                    as={TextField}
                    select
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    SelectProps={{
                      native: true,
                    }}
                    helperText={
                      <ErrorMessage
                        name="service_id"
                        component="span"
                        className="text-[red] text-[15px]"
                      />
                    }
                  >
                    <option value="" label="Select status" />
                    <option value="Tozalanmoqda" label="Tozalanmoqda" />
                    <option value="Tayyor" label="Tayyor" />
                    <option value="Olib ketilgan" label="Olib ketilgan" />
                  </Field>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      gap: "12px",
                      marginTop: "5px",
                    }}
                  >
                    <Button
                      onClick={handleClose}
                      type="button"
                      variant="contained"
                      color="warning"
                    >
                      Chiqish
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      color="success"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting" : "Yaratish"}
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
