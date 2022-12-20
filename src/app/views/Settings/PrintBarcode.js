
                      import React, { useState } from 'react';
                      import { Box, styled } from '@mui/system';
                      import AutocompleteComboNew from '../material-kit/auto-complete/AutocompleteComboNew';
                      import { Breadcrumb, SimpleCard } from 'app/components';
                      import Grid from '@mui/material/Grid';
                      import SimpleFormNew from '../material-kit/forms/SimpleFormNew';
                      import { makeStyles } from '@material-ui/styles';
                      import { Formik } from 'formik';
                      import * as Yup from 'yup';
                      import { LoadingButton } from '@mui/lab';
                      import useAuth from 'app/hooks/useAuth';
                      import { useNavigate } from 'react-router-dom';
                      import { Button, TableBody, TableCell, TableRow, Typography } from '@mui/material';
                      import Fileattachment from '../material-kit/uploadimage/Fileattachment';                     import { Checkbox, Table } from '@material-ui/core';
                      
                      const Container = styled('div')(({ theme }) => ({
                        margin: '30px',
                        [theme.breakpoints.down('sm')]: { margin: '16px' },
                        '& .breadcrumb': {
                          marginBottom: '30px',
                          [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
                        },
                      }));
                      
                      const useStyles = makeStyles((theme) => ({
                        btn2: {
                          marginTop: '10px',
                          padding: '7px 23px',
                          border: 'none',
                          fontSize: '15px',
                          color: '#fff',
                          background: '#303f9f',
                        },
                      }));
                      
                      const handleChange = (event) => {
                        console.log(event);
                      };
                      
                      // inital login credentials
                      const initialValues = {
                        Add_Product: '',

                        Style: '',
                      
                       
                      
                        // AttachDocument: '',
                        // Note: ''
                      };
                      
                      // form field validation schema
                      const validationSchema = Yup.object().shape({
                        Add_Product: Yup.string()
                       
                          .required('Add Product is required!'),
                      
                          Style: Yup.string()
                         
                          .required('Style is required!'),
                      
                       
                       
                      
                      });
                      
                      const PrintBarcode = (props) => {
                        const classes = useStyles();
                        const [value, setValue] = useState('Controlled');
                        const { register } = useAuth();
                        const navigate = useNavigate();
                        const [loading, setLoading] = useState(false);
                        const [note, setNote] = useState('');
                        const handleFormSubmit = (values) => {
                          console.log(values);
                        };
                        return (
                          <Container>
                            <Box className="breadcrumb">
                              <Breadcrumb
                                routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Print Barcode/label' }]}
                              />
                            </Box>
                            <SimpleCard>
                              <Formik
                                onSubmit={handleFormSubmit}
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                              >
                                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                                  <form onSubmit={handleSubmit}>
                                    <Grid container spacing={2}>
                                  
                                      <Grid item xs={12} md={12}>
                                        <SimpleFormNew
                                          props={{
                                            type: 'text',
                                            name: 'Add_Product',
                                            label: 'Add Product',
                                          
                                            onBlur: handleBlur,
                                            value: values.Category_Name,
                                         
                                            onChange: handleChange,
                                            helperText: touched.Add_Product && errors.Add_Product,
                                            error: Boolean(errors.Add_Product && touched.Add_Product),
                                          }}
                                        />
                                      </Grid>
                                      

                                      <Table>
                                        <TableBody>
                                          <TableRow>
                                            <TableCell>
                                            Product Name (Product Code)
                                            </TableCell>
                                            <TableCell>
                                            Quantity
                                            </TableCell>
                                            <TableCell>
                                            Variants
                                            </TableCell>
                                          </TableRow>
                                        </TableBody>
                                      </Table>
                                    
                                    
                                    
                          
                          
                                 
                      
                                           
                                      <Grid item xs={12} md={12}>
                                        <AutocompleteComboNew
                                          props={{
                                            names: [
                                            'Bradley Wilkerson',
                                               'Oliver Hansen',
                                              'Van Henry',
                                              'April Tucker',
                                              'Ralph Hubbard',
                                              'Omar Alexander',
                                              'Carlos Abbott',
                                              'Miriam Wagner',
                                               'Virginia Andrews',
                                              'Kelly Snyder',
                                            ],
                                            name: 'Style',
                                            label: 'Style',
                                            value: values.Parent_Category,
                                            onBlur: handleBlur,
                                            onChange: handleChange('Style'),
                                            helperText: touched.Style && errors.Style,
                                            error: Boolean(errors.Style && touched.Style),
                                          }}
                                        />
                                      </Grid>

                                      <Grid item xs={12}>
                                      <span>Print:</span>
                                      <span><Checkbox/> site name </span>
                                      <span><Checkbox/> Product Name</span>
                                      <span><Checkbox/> Price</span>
                                      <span><Checkbox/> Currencies</span>
                                      <span><Checkbox/> Unit</span>
                                      <span><Checkbox/> Category</span>
                                      <span><Checkbox/> Variants</span>
                                      <span><Checkbox/> Product Image</span>
                                      <span><Checkbox/> Check promotional price</span>
                                      </Grid>




                                      <Grid item xs={12}>
                  {/* <DDbutton /> */}

                  <LoadingButton 
                    style={{margin: "10px" }}
                    variant="contained"
                    type="submit"
                    loading={loading}
                    className={classes.btn2}
                  >
                         Submit
                       </LoadingButton>

                     <Button variant="contained" className={classes.btn3}>
                             Reset
                     </Button>
                </Grid>
                                
                                    </Grid>
                                
          
           
                                  </form>
                                )}
                              </Formik>
                            </SimpleCard>
                          </Container>
                        );
                      };
                      
                      export default PrintBarcode;
                      