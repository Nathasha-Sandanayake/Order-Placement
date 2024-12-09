import DefaultCard from './cards/DefaultCard';
import DefaultChart from './cards/DefaultChart';
import MinQtyCard from './cards/MinQtyCard';

function Home(){

 
  
   return (
      <>
      <br/>
      <div className="container">
         <div className="row">
                   
         <div className="col-12 col-sm-6 col-md-4 col-lg-3">
               <DefaultCard 
               thumbnail='https://img.freepik.com/free-vector/cute-cashier-shopping-grocery-cartoon-vector-icon-illustration-people-profession-icon-isolated-flat_138676-8458.jpg?ga=GA1.1.600886959.1731223245&semt=ais_hybrid'
               title='Customer'
               description='This is a wider card with supporting text.'
               value={250}
               key={1}
               />          
         </div>  


         <div className="col-12 col-sm-6 col-md-4 col-lg-3">
         <DefaultCard 
               thumbnail='https://img.freepik.com/free-vector/cute-chameleon-bring-groceries-with-trolley-cartoon-vector-icon-illustration-animal-food-isolated_138676-10261.jpg?ga=GA1.1.600886959.1731223245&semt=ais_hybrid'
               title='Products'
               description='This is a wider card with supporting text.'
               value={250}
               key={1}
               />    
         </div>  



         <div className="col-12 col-sm-6 col-md-4 col-lg-3">
         <DefaultCard 
               thumbnail='https://img.freepik.com/premium-vector/online-barcode-e-commerce-vector-clipart-illustration_138676-385.jpg?ga=GA1.1.600886959.1731223245&semt=ais_hybrid'
               title='Orders'
               description='This is a wider card with supporting text.'
               value={250}
               key={1}
               />    
         </div>  



         <div className="col-12 col-sm-6 col-md-4 col-lg-3">
         <DefaultCard 
               thumbnail='https://img.freepik.com/free-vector/male-cashier-cartoon-icon-illustration-people-profession-icon-concept_138676-2123.jpg?t=st=1733718069~exp=1733721669~hmac=9747ba72e5d98593ff037748a9bcd0ee13352d8bdc50a56cc4b308bca4bdbce9&w=360'
               title='Income'
               description='This is a wider card with supporting text.'
               value={250}
               key={1}
               />    
         </div>  

         
         </div>
          <br/>

          <div className="row">
            <div className="col-12 col-md-9">
               <div className="context">
                  <DefaultChart/>
               </div>
            </div>
            <div className="col-12 col-md-3">
                  <MinQtyCard/>
                  <MinQtyCard/>
                  <MinQtyCard/>
                  <MinQtyCard/>
                  <MinQtyCard/>
            </div>
          </div>

      </div>
      </>  
   )
   

}     
        



export default Home;