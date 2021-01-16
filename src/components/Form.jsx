import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { v4 as uuidv4 } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

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
    textAlign: 'center',
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
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}))

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          GST Calculator
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

function Form() {

    const classes = useStyles();

    const [Details, setDetails] = useState([
        {firmName: '', firmAddress: '', firmGst: '', billNo: "", pan: '', phone: '', email: '', date: '', buyerName: '', buyerAddress: '', buyerGst: '', buyerEmail: '', buyerPan: '', buyerPhone: '', buyerPlace: '', buyerTransport: ''},
    ]);

    const handleChangeDetail = (id, event) => {
        const newInputDetails = Details.map(j => {
        if(id === j.id) {
            j[event.target.name] = event.target.value
        }
        return j;
        })
        
        setDetails(newInputDetails);
    }

    const [taxSlab, settaxSlab] = useState('CGST/SGST');

    const [inputFields, setInputFields] = useState([
        { id: uuidv4(), desc: '', hsn: '', qty: '', rate:'', taxRate:'', slno:'', unit:'' },
    ]);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("InputFields", inputFields);
    // };

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
        setInputFields([...inputFields, { id: uuidv4(),  desc: '', hsn: '', qty: '', rate:'', taxRate:'', slno:'', unit:'' }])
    }

    const handleRemoveFields = id => {
        const values  = [...inputFields];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputFields(values);
    }
    console.log(taxSlab);
    // function printCon(param) {
    //     var divContent = document.getElementById(param).innerHTML;
    //     console.log(divContent);
    //     document.body.innerHTML = divContent;
    //     window.print();
    //     };
  return (
    <>

    <CssBaseline />
        <div className="tableDesign">
            <h3>COMPANY DETAILS</h3>
            <form autoComplete="off">
                <div class="form-row">
                    <div class="form-group col-md-3">
                        <input type="email" class="form-control" name="firmName" value={Details.firmName} onChange={event => handleChangeDetail(Details.id, event)} placeholder="Firm Name" />
                    </div>
                    <div class="form-group col-md-4">
                        <input type="text" class="form-control" name="firmAddress" value={Details.firmAddress} onChange={event => handleChangeDetail(Details.id, event)} placeholder="Address" />
                    </div>
                    <div class="form-group col-md-2">
                        <input type="text" class="form-control" name="phone" value={Details.phone} onChange={event => handleChangeDetail(Details.id, event)} placeholder="Phone No." />
                    </div>
                    <div class="form-group col-md-3">
                        <input type="text" class="form-control" name="email" value={Details.email} onChange={event => handleChangeDetail(Details.id, event)} placeholder="Email" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-3">
                        <input type="text" class="form-control" name="billNo" value={Details.billNo} onChange={event => handleChangeDetail(Details.id, event)} placeholder="Invoice No."/>
                    </div>
                    <div class="form-group col-md-5">
                        <input type="text" class="form-control" name="firmGst" value={Details.firmGst} onChange={event => handleChangeDetail(Details.id, event)} placeholder="GST Number" />
                    </div>
                    <div class="form-group col-md-2">
                        <input type="text" class="form-control" name="pan" value={Details.pan} onChange={event => handleChangeDetail(Details.id, event)} placeholder="PAN"/>
                    </div>
                    <div class="form-group col-md-2">
                        <input type="text" class="form-control" name="date" value={Details.date} onChange={event => handleChangeDetail(Details.id, event)} placeholder="Date"/>
                    </div>
                </div>
            </form>
            </div>
        <div className="tableDesign">
            <h3>BUYER DETAILS</h3>
            <form>
                <div class="form-row">
                    <div class="form-group col-md-3">
                        <input type="email" class="form-control" name="buyerName" value={Details.buyerName} onChange={event => handleChangeDetail(Details.id, event)} placeholder="Buyer Name" />
                    </div>
                    <div class="form-group col-md-4">
                        <input type="text" class="form-control" name="buyerAddress" value={Details.buyerAddress} onChange={event => handleChangeDetail(Details.id, event)} placeholder="Address" />
                    </div>
                    <div class="form-group col-md-2">
                        <input type="text" class="form-control" name="buyerPhone" value={Details.buyerPhone} onChange={event => handleChangeDetail(Details.id, event)} placeholder="Phone No." />
                    </div>
                    <div class="form-group col-md-3">
                        <input type="text" class="form-control" name="buyerEmail" value={Details.buyerEmail} onChange={event => handleChangeDetail(Details.id, event)} placeholder="Email" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-3">
                        <input type="text" class="form-control" name="buyerPan" value={Details.buyerPan} onChange={event => handleChangeDetail(Details.id, event)} placeholder="Party PAN"/>
                    </div>
                    <div class="form-group col-md-4">
                        <input type="text" class="form-control" name="buyerGst" value={Details.buyerGst} onChange={event => handleChangeDetail(Details.id, event)} placeholder="GSTIN / UIN" />
                    </div>
                    <div class="form-group col-md-2">
                        <select class="form-control" name="buyerPlace" value={Details.buyerPlace} onChange={event => handleChangeDetail(Details.id, event)}>
                            <option selected>Place of Supply</option>
                            <option>18</option>
                        </select>
                    </div>
                    <div class="form-group col-md-3">
                        <input type="text" class="form-control" name="buyerTransport" value={Details.buyerTransport} onChange={event => handleChangeDetail(Details.id, event)} placeholder="Name Of Transport"/>
                    </div>
                </div>
            </form>
        
        {Details.map(detail => {
                            return(
                               <h1> {detail.firmName}{detail.firmAddress}{detail.firmGst}{detail.billNo}{detail.date}{detail.buyerAddress}{detail.buyerName}{detail.buyerGst}{detail.phone}{detail.email}{detail.pan}{detail.buyerTransport}
                               {detail.buyerPan}{detail.buyerEmail}{detail.buyerPan}{detail.buyerPhone}{detail.buyerPlace}</h1>
                            )
                        })}
        </div>
        <div className="tableDesign">
        <h3>ITEM DETAILS</h3>
        <form>
        <div class="form-row">
            <div class="form-group col-md-2">
                <select class="form-control" onChange={(event) => {
                    settaxSlab(event.target.value)
                }}>
                    <option selected>Select Tax Slab</option>
                    <option>CGST/SGST</option>
                    <option>IGST</option>
                </select>
            </div>
        </div>
        </form>
        <div className="table-responsive"> 
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Sl. No.</th>
                        <th>Item</th>
                        <th>HSN</th>
                        <th>Quantity</th>
                        <th>Unit</th>
                        <th>Rate</th>
                        <th>GST %</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { inputFields.map(inputField => (
                     <tr key={inputField.id}>
                        <td><input type="number" name="slno" placeholder="Sl. No." value={inputField.slno} onChange={event => handleChangeInput(inputField.id, event)}/></td>
                        <td><input type="text" name="desc" placeholder="Enter Item Description" value={inputField.desc} onChange={event => handleChangeInput(inputField.id, event)}/></td>
                        <td><input type="number" name="hsn" placeholder="Enter HSN" value={inputField.hsn} onChange={event => handleChangeInput(inputField.id, event)}/></td>
                        <td><input type="number" name="qty" placeholder="Enter Quantity" value={inputField.qty} onChange={event => handleChangeInput(inputField.id, event)}/></td>
                        <td>
                            <select name="unit" value={inputField.unit} onChange={event => handleChangeInput(inputField.id, event)}>
                                <option>Kgs</option>
                                <option>Kgs</option>
                                <option>Kgs</option>
                            </select>
                        </td>
                        <td><input type="number" name="rate" placeholder="Enter Rate" value={inputField.rate} onChange={event => handleChangeInput(inputField.id, event)}/></td>
                        <td>
                            <select name="taxRate" value={inputField.taxRate} onChange={event => handleChangeInput(inputField.id, event)}>
                                <option>0</option>
                                <option>5</option>
                                <option>12</option>
                                <option>18</option>
                                <option>28</option>
                            </select>
                        </td>
                        <td><input type="submit" onClick={handleAddFields} value='Add row' /></td>
                        <td><input type="submit" disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)} value='Remove'/></td>
                        
                    </tr>
                    )) }
                </tbody>
            </table>
        </div>
        </div>
        <div className="invoiceDesign">
        <h3>INVOICE DETAILS</h3>
        <div className="table-responsive"> 
            <table className="table table-bordered table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>Sl. No.</th>
                        <th>Item Description</th>
                        <th>HSN Code</th>
                        <th>Quantity</th>
                        <th>Rate</th>
                        <th>Taxable Amt.</th>
                        <th>CGST %</th>
                        <th>CGST Rate</th>
                        <th>SGST %</th>
                        <th>SGST Rate</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                {inputFields.map(data => {
                    let taxValue = data.qty*data.rate;
                    let gstTax = (taxValue/100)*data.taxRate;
                    let total = taxValue+ gstTax ;
                    let taxPercentage = data.taxRate/2;
                    let gst = gstTax/2;
                    return (
                        <tr>
                            <td>{data.slno}</td>                                    
                            <td>{data.desc}</td>
                            <td>{data.hsn}</td>
                            <td>{data.qty} {data.unit}</td>
                            <td>{data.rate}</td>
                            <td>{taxValue}</td>
                            <td>{taxPercentage}</td>
                            <td>{gst}</td>
                            <td>{taxPercentage}</td>
                            <td>{gst}</td>
                            <td>{total}</td>
                        </tr>
                        )})}
                </tbody>
            </table>
        </div>
        </div>        
        
        {/* <button onClick={printCon('print')}>Print</button> */}
        
        <div className="preview" id="print">
            <div className="insideDiv">
            {Details.map(detail => {
            return(
                <>       
                <div><b>GSTIN: {detail.firmGst}</b>Original copy</div>
                <div className="headSection">
                    <h5><b><u>TAX INVOICE</u></b></h5>
                    <h2><b>{detail.firmName}</b></h2>
                    {detail.firmAddress}<br />
                    <b>PAN:</b> {detail.pan}<br />
                    <b>Phone:</b> {detail.phone}    <b>Email:</b> {detail.email}
                </div>
                <div className="row">
                    <div className="column">
                        <b><i>Party Details:</i></b><br />
                        {detail.buyerName}<br />
                        {detail.buyerAddress}<br />
                        <b>Party PAN :</b> {detail.buyerPan}<br />
                        <b>Party Email :</b> {detail.buyerEmail}<br />
                        <b>Party Mobile No :</b> {detail.buyerPhone}<br />
                        <b>GSTIN / UIN :</b> {detail.buyerGst}<br />
                    </div>
                    <div className="column">
                        <b>Invoice No. :</b> {detail.billNo}<br />
                        <b>Date :</b> {detail.date}<br />
                        <b>Place of Supply :</b> {detail.buyerPlace}<br />
                        <b>Transport :</b> {detail.buyerTransport}<br />
                    </div>
                </div>
                </>
                )})}
                <table>
                    <thead>
                        <tr>
                            <th>SL. No.</th>
                            <th>Item Description</th>
                            <th>HSN</th>
                            <th>Qty.</th>
                            <th>Unit</th>
                            <th>Price</th>
                            <th>CGST<br />Rate</th>
                            <th>CGST<br />Amount</th>
                            <th>SGST<br />Rate</th>
                            <th>SGST<br />Amount</th>
                            <th>Amount (&#8377;)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                        </tr>
                        <tr>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                        </tr>
                    </tbody>
                </table>
                <div className="headSection">
                    <h6><b><u>Bank Details:</u></b></h6>
                    <b>Bank: </b> <b>Branch Name : </b><br />
                    <b>Bank A/C Number :</b><br />
                    <b>Bank Branch IFSC :</b>
                </div>
                <div className="row">
                    <div className="column">
                        <b><u>Terms and Conditions :</u></b><br />
                        <ul>
                            <li>Goods once sold cannot be taken back.</li>
                            <li>Interest @24% p.a. will be charged if bills is not paid within 30 days. <br />
                            All disputes subject to Jurisdiction.</li>
                        </ul>
                    </div>
                    <div className="column">
                        <b>E.& O.E. </b> For, 
                        <br />
                        <br />
                        <br />
                        <br />
                        <p className="textRight"><b>Authorised Signatory</b></p> 
                    </div>
                </div>
            </div>
        </div>

        <footer className={classes.footer}>
            <Container maxWidth="sm">
                <Typography variant="body1">Made with ❤️ | Developer 👉 <Link href="https://github.com/madhabpaul" >Madhab Paul </Link></Typography>
                <Copyright />
            </Container>
        </footer>
    </>
  );
}

export default Form;