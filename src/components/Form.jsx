import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { v4 as uuidv4 } from 'uuid';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 50 ,
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(1),
    color: theme.palette.text.primary,
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    margin: theme.spacing(1),
    width: 120 ,
  },
  tableRow: {
    backgroundColor: "rgb(159, 229, 245)",
  },
}))

function Form() {

    const classes = useStyles();

    const [firmName, setFirmName] = useState("");
    const [firmAddress, setFirmAddress] = useState("");
    const [firmGst, setfirmGst] = useState("");
    const [billNo, setbillNo] = useState("");
    const [date, setdate] = useState("");
    const [buyerName, setbuyerName] = useState("");
    const [buyerAddress, setbuyerAddress] = useState("");
    const [buyerGst, setbuyerGst] = useState("");
    const [inputFields, setInputFields] = useState([
        { id: uuidv4(), desc: '', hsn: '', qty: '', rate:'', taxSlab:'', taxRate:'' },
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("InputFields", inputFields);
    };

    const handleChangeInput = (id, event) => {
        const newInputFields = inputFields.map(i => {
        if(id === i.id) {
            i[event.target.name] = event.target.value
        }
        return i;
        })
        
        setInputFields(newInputFields);
    }

    const handleAddFields = () => {
        setInputFields([...inputFields, { id: uuidv4(),  desc: '', hsn: '', qty: '', rate:'', taxSlab:'', taxRate:'' }])
    }

    const handleRemoveFields = id => {
        const values  = [...inputFields];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputFields(values);
    }

    const handleFirmName = (event) => {
        setFirmName(event.target.value);
    }; 
    const handleFirmAddress = (event) => {
        setFirmAddress(event.target.value);
    };
    const handleFirmGst = (event) => {
        setfirmGst(event.target.value);
    };
    const handlebill = (event) => {
        setbillNo(event.target.value);
    };
    const handledate = (event) => {
        setdate(event.target.value);
    };
    const handlebuyerName = (event) => {
        setbuyerName(event.target.value);
    };
    const handlebuyerGst = (event) => {
        setbuyerGst(event.target.value);
    };
    const handlebuyerAddress = (event) => {
        setbuyerAddress(event.target.value);
    };

    // const list = inputFields.map(data => {
    //     console.log(data);
    // })


  return (
    <>

    <CssBaseline />
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12} md={6} lg={4}>
                    <Paper className={classes.paper}>
                            <h2>Agency Details</h2>
                        <form className={classes.root} noValidate autoComplete="off">
                                <TextField className={classes.input} size='small' onChange={handleFirmName} label="Firm Name" multiline rows={1} defaultValue="Default Value" variant="outlined" />
                                <TextField className={classes.input} size='small' onChange={handleFirmAddress} label="Address" multiline rows={1} defaultValue="Default Value" variant="outlined" />
                                <TextField className={classes.input} size='small' onChange={handleFirmGst} label="G.S.T Number" variant="outlined" />
                                <TextField className={classes.input} size='small' onChange={handlebill} label="Bill No."  variant="outlined" />
                                <TextField className={classes.input} size='small' onChange={handledate} label="Date"  variant="outlined" />
                        </form>
                        
                        <h2>Buyer Details</h2>
                        <form className={classes.root} noValidate autoComplete="off" >
                                <TextField className={classes.input} size='small' onChange={handlebuyerName} label="Buyer Name" multiline rows={1} variant="outlined" />
                                <TextField className={classes.input} size='small' onChange={handlebuyerAddress} label="Address" multiline rows={1} variant="outlined" />
                                <TextField className={classes.input} size='small' onChange={handlebuyerGst} label="G.S.T Number" variant="outlined" />
                        </form>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6} lg={8}>
                    <Paper className={classes.paper}>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="spanning table">
                                <TableHead>
                                    <TableRow className={classes.tableRow}>
                                        <TableCell>Sl. No.</TableCell>
                                        <TableCell>Description</TableCell>
                                        <TableCell>HSN Code</TableCell>
                                        <TableCell>Quantity</TableCell>
                                        <TableCell>Rate</TableCell>
                                        <TableCell>Taxable Value</TableCell>
                                        <TableCell>Tax Rate</TableCell>
                                        <TableCell>Total</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {inputFields.map(data => {
                                        let taxValue = data.qty*data.rate;
                                        let total = taxValue+((taxValue/100)*data.taxRate) ;
                                        return (
                                        <TableRow>
                                        <TableCell></TableCell>                                    
                                        <TableCell>{data.desc}</TableCell>
                                        <TableCell>{data.hsn}</TableCell>
                                        <TableCell>{data.qty}</TableCell>
                                        <TableCell>{data.rate}</TableCell>
                                        <TableCell>{taxValue}</TableCell>
                                        <TableCell>{data.taxRate}</TableCell>
                                        <TableCell>{total}</TableCell>
                                    </TableRow>)
                                     })}
                                    
                                    
                                    
                                    <TableRow>
                                        <TableCell rowSpan={5} />
                                        <TableCell colSpan={6}>Subtotal</TableCell>
                                        <TableCell align="right">Total</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colSpan={4}>Tax</TableCell>
                                        <TableCell align="right">7%</TableCell>
                                        <TableCell align="right">50 Tax</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colSpan={6}>Total</TableCell>
                                        <TableCell align="right">Rs. 20000</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
            </Grid>
        </div>      
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12} >
                    <Paper className={classes.paper}>
                        <h1>Add Item</h1>
                        <form className={classes.root} onSubmit={handleSubmit}>
                            { inputFields.map(inputField => (
                            <div key={inputField.id}>
                                <TextField
                                    className={classes.input} type="text"
                                    name="desc"
                                    label="Item Desc"
                                    variant="filled"
                                    size='small'
                                    value={inputField.desc}
                                    onChange={event => handleChangeInput(inputField.id, event)}
                                />
                                <TextField
                                    className={classes.input} type="number"
                                    name="hsn"
                                    label="HSN Code"
                                    variant="filled"
                                    size='small'
                                    value={inputField.hsn}
                                    onChange={event => handleChangeInput(inputField.id, event)}
                                />
                                <TextField
                                    className={classes.input} type="number"
                                    name="qty"
                                    label="Quantity"
                                    variant="filled"
                                    size='small'
                                    value={inputField.qty}
                                    onChange={event => handleChangeInput(inputField.id, event)}
                                />
                                <TextField
                                    className={classes.input} type="number"
                                    name="rate"
                                    label="Rate"
                                    variant="filled"
                                    size='small'
                                    value={inputField.rate}
                                    onChange={event => handleChangeInput(inputField.id, event)}
                                />
                                <FormControl component="fieldset" className={classes.input} >
                                    <RadioGroup aria-label="taxSlab" name="taxSlab" value={inputField.taxSlab} onChange={event => handleChangeInput(inputField.id, event)} >
                                        <FormControlLabel value="CGST/SGST" control={<Radio />} label="CGST/SGST" />
                                        <FormControlLabel value="IGST" control={<Radio />} label="IGST" />
                                    </RadioGroup>
                                </FormControl>
                                <FormControl component="fieldset" className={classes.input} >
                                    <RadioGroup aria-label="taxRate" name="taxRate" value={inputField.taxRate} onChange={event => handleChangeInput(inputField.id, event)} >
                                        <FormControlLabel value="0" control={<Radio />} label="0%" />
                                        <FormControlLabel value="5" control={<Radio />} label="5%" />
                                        <FormControlLabel value="12" control={<Radio />} label="12%" />
                                        <FormControlLabel value="18" control={<Radio />} label="18%" />
                                        <FormControlLabel value="28" control={<Radio />} label="28%" />
                                    </RadioGroup>
                                </FormControl>
                                <IconButton disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
                                    <RemoveIcon />
                                </IconButton>
                                <IconButton
                                    onClick={handleAddFields}
                                    >
                                    <AddIcon />
                                </IconButton>
                            </div>
                            )) }
                            <Button
                                className={classes.button}
                                variant="contained" 
                                color="primary" 
                                type="submit"
                                onClick={handleSubmit}
                                >Send</Button>
                        </form>{inputFields[0].firstName}
                    </Paper>
                </Grid>
            </Grid>
        </div>
    </>
  );
}

export default Form;