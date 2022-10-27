import React from 'react';
import { Card , CardImg , CardText , CardBody , CardTitle } from 'reactstrap';


    
   function  RenderDish({dish}) {
        if (dish != null)
            return(  
                <div className="col-12 col-md-5 m-1">           
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            );
        else
            return(
                <div></div>
            );
    }
    function RenderComments({comments})
    {
      
        let comment_list=comments.map(element => {
          return(
          <ul className='list-unstyled'>
          <li key={element.id}>{element.body}</li>
          <li>{"Author: "+element.author},{"time: "+element.datetime}</li>
          </ul>
          );
        });

         return(
          
          <div className="col-12 col-md-5 m-1">
          <h4>{"Comments"}</h4>
          
              
              {comment_list}
          
          </div>
         );
      }
      
    const  DishDetail = ({dish,comments})=> {
        
       return( 
        <div className='container'>
        <div className='row'>    
        <RenderDish dish={dish} />
        <RenderComments comments={comments} />
         </div>     
       </div>
       );
    }
    export default DishDetail;

