import React,{Component} from 'react';
import NewIteam from './NewIteam';
import dl from '../data.json';
import ReactDOM from "react-dom";
import Pagination from "react-js-pagination";
// require("bootstrap/less/bootstrap.less");
 class Product extends Component{
    //  console.log(data);
    
    constructor(props) {
        super(props);
        this.state = {
          activePage: 15
        };
      }
     
      handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
      }
      


     
     render(){
     
        //  console.log(dl.map((value,key) =>(
            //  <NewIteam key={key}></NewIteam>
        //  )
        //  ));
        
         return(
            <div>
            <section class="inner-page-banner" id="home">
            </section>
            
            
            
            <div class="breadcrumb-agile">
                <ol class="breadcrumb mb-0">
                    <li class="breadcrumb-item">
                        <a href="index.html">Home</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Product</li>
                </ol>
            </div>
            
            
            <section class="what-we-do py-5">
            <h3 class="heading text-center mb-3 mb-sm-5">-- Món ngon mỗi ngày --</h3>
            
                <div className="container">
                <div className="row mt-4">

           
          {

              dl.map((value,key) => {
                  return (
                    <NewIteam key={key}  
                    tinId={value.id}
                    anh1={value.anh1} 
                    tieuDe1={value.tieuDe}
                    trichDan={value.trichDan}> </NewIteam>
                  )
              }) 
          }

           </div>  
   

                  <div class="pagination">
                 <a href="#">«</a>
                 <a class="active"  href="#">1</a>
                 <a href="#">2</a>
                 <a href="#">3</a>
                 <a href="#">4</a>
                 <a href="#">5</a>
                 <a href="#">6</a>
                 <a href="#">»</a>
               </div>

               
                </div>
                
                              
              </section>

                </div>
         )
     }
 }


 export default Product