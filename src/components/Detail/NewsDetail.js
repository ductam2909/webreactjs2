import React, { Component } from 'react';
import dl from '../data.json';
import NewsRelated from './NewsRelated';
class NewsDetail extends Component {
    render() {
      var dem = 1 ; 
     return (
            <div>
              <div>

  
  {/* begin tintuc */}
 {
  dl.map((value,key) => {
        
        if(value.id === parseInt(this.props.match.params.id,20) ) {
          return (
           
            <div className="clss6 heading text-center mb-3 mb-sm-5" key={key}>
            <h3 class="heading text-center mb-3 mb-sm-5">-- Chi tiết món ăn --</h3>
            <div className="container">
              <img src={value.anh1} className="" alt="react router demo" />

              <h3 className="lead text-center">{value.tieuDe}</h3>

              <hr className="my-2" />
                    <br/>

              {
                value.noiDung
              }

              <p> </p>
              <br/>
              <br/>
              <h4>Thành phần:</h4>
                 <br/>
              {
                value.thanhphan
              }
                 <br/>
                    <br/>
                    <h4>Sơ chế</h4>
                    <br/>
                    {
                      value.soche

                    }
              <br/>
              <br/>
              <h4>Cách thực hiện:</h4>
              <br/>
              {
                value.thuchien
              }
              <br/>
              <br/>
                
              <iframe width="779" height="438" src="https://www.youtube.com/embed/xdkVDB4pF60" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             
              </div>
          </div>
       
          )
        }
        else{return true; }
      })
    }


<br/>
<br/>
           <div className="container">
    <h4 className="card-title text-center">Món ăn ngon khác </h4>
    <br/>
    <div className="row">
      <div className="col-12">
        <div className="card-deck">
        {
          
          dl.map((value,key) => {
            // console.log(key);
            if(value.id !==  parseInt(this.props.match.params.id,20)  ){
              if(dem <=4 ) {
                dem++;  
                return (
                    <NewsRelated key={key} 
                          tinId={value.id}
                          anh={value.anh1} 
                          tieuDe={value.tieuDe}
                          trichDan={value.trichDan}> </NewsRelated>
                      )
              }
            }  
            return true; 
          
          })
        }
           
        </div>
      </div>
    </div>
  </div>
  {/* end  tintuc */}
</div>
  
            </div>
        );
    }
}

export default NewsDetail;