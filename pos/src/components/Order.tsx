function Order(){

    const styleObj:React.CSSProperties = {
        marginBottom: '20px'
    }

    const bottomContext:React.CSSProperties = {
       width: '100%',
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'space-between'
    }

    const totalText:React.CSSProperties = {
       color: 'red',
       margin: '0px'
     }

    return(
        <>
        <br/>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-md-3" style={styleObj}>
                    <div className="form-group">
                        <label htmlFor="customerName"> Select Customer</label>
                       <select name="" id="customer" className="form-control" >
                            <option value="#" disabled defaultValue={'Use Options'}>Use Options</option>
                            <option value="#">Customer 1</option>
                            <option value="#">Customer 2</option>
                            <option value="#">Customer 3</option>
                       </select>
                    </div>
                </div>
                
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="form-group">
                            <label htmlFor="name">Customer Name</label>
                            <input type="text" disabled className="form-control" id="name"/>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-md-3">
                    <div className="form-group">
                            <label htmlFor="address">Customer Address</label>
                            <input type="text" disabled className="form-control" id="address"/>
                    </div>
                </div>


                <div className="col-12 col-sm-6 col-md-3">
                    <div className="form-group">
                            <label htmlFor="salary">Salary</label>
                            <input type="number" disabled className="form-control" id="salary"/>
                    </div>
                </div>
                <br/>   
           
            </div>

            <br/>
            <hr/>


            <div className="row">
                <div className="col-12 col-sm-6 col-md-3" style={styleObj}>
                    <div className="form-group">
                        <label htmlFor="productName"> Select Product</label>
                       <select name="" id="product" className="form-control" >
                            <option value="#" disabled defaultValue={'Use Options'}>Use Options</option>
                            <option value="#">Product 1</option>
                            <option value="#">Product 2</option>
                            <option value="#">Product 3</option>
                       </select>
                    </div>
                </div>
                
                <div className="col-12 col-sm-6 col-md-3" style={styleObj}>
                    <div className="form-group">
                            <label htmlFor="description">Product Description</label>
                            <input type="text" disabled className="form-control" id="description"/>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-md-3" style={styleObj}>
                    <div className="form-group">
                            <label htmlFor="price">Unit Price</label>
                            <input type="number" disabled className="form-control" id="price"/>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-md-3" style={styleObj}>
                    <div className="form-group">
                            <label htmlFor="qtyOnHand">Qty On Hand</label>
                            <input type="number" disabled className="form-control" id="qtyOnHand"/>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-md-3" style={styleObj}>
                    <div className="form-group">
                            <label htmlFor="qty">Qty</label>
                            <input type="number" className="form-control" id="qty"/>
                    </div>
                </div>
                <br/>   
           
            </div>
            <hr/>


            
            <div className="row">
                <div className="col-12">
                    <button className="btn btn-primary col-12">Add Product</button>
                </div>
            </div>

            <hr/>


        
        <div className="row">
            <div className="col-12">
                <table className="table table-hover table-border">
                    <thead>
                        <tr>
                            <th>#Id</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                            <th>Delete Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#1002</td>
                            <td>JBL</td>
                            <td>40000</td>
                            <td>1</td>
                            <td>40000</td>
                            <td>
                                <button className="btn btn-danger btn-sm">Remove</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <br/>
                <div className="bottom-context" style={bottomContext}>
                    <div className="total-outer" style={totalText}>
                        <h1>Total: 2500.00</h1>
                    </div>
                    <div className="place-order-button-context">
                        <button className="btn btn-primary">Place Order</button>
                    </div>
                   </div> 
            </div>
        </div>
        
        
        
        </div>

    </> 
    )
 }
 
 export default Order;