function Product(){
   
    const styleObj:React.CSSProperties = {
        marginBottom: '20px'
    }




    return (
        <>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="productName">Product Name</label>
                            <input type="text" className="form-control" id="productName"/>
                        </div>
                    </div>
                    
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="form-group">
                                <label htmlFor="price">Unit Price</label>
                                <input type="number" className="form-control" id="price"/>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="form-group">
                                <label htmlFor="qty">Qty On Hand</label>
                                <input type="number" className="form-control" id="qty"/>
                        </div>
                    </div>


                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="form-group">
                                <label htmlFor="image">Product Image</label>
                                <input type="file" className="form-control" id="image"/>
                        </div>
                    </div>
                    <br/>


                    <div className="col-12">
                        <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea rows={5} className="form-control" id="description"/>
                        </div>
                    </div>
               
               
               
                </div>

                <br/>

                
                <div className="row">
                    <div className="col-12">
                        <button className="btn btn-primary col-12">Save Customer</button>
                    </div>
                </div>

                <hr/>

                <div className="row">
                    <div className="col-12">
                            <form className="col-12">
                                <input type="search" className="form-control" placeholder="Search products here"></input>
                            </form>
                    </div>
                </div>
            
            <div className="row">
                <div className="col-12">
                    <table className="table table-hover table-border">
                        <thead>
                            <tr>
                                <th>#Id</th>
                                <th>Product Name</th>
                                <th>QTY On Hand</th>
                                <th>Unit Price</th>
                                <th>Delete Option</th>
                                <th>See More</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#1002</td>
                                <td>JBL</td>
                                <td>5</td>
                                <td>40000</td>
                                <td>
                                    <button className="btn btn-danger btn-sm">Delete</button>
                                </td>
                                <td>
                                    <button className="btn btn-warning btn-sm">Update</button>
                                </td>
                                <td>
                                    <button className="btn btn-outline-info btn-sm">View</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            
            
            </div>

        </> 
    )
 }
 
 export default Product;