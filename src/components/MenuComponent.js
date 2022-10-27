import React from 'react';
import { Card , CardImg , CardImgOverlay , CardTitle } from 'reactstrap';

function RenderMenuItem({dish}){
 return(
  <Card key={dish.id} >

    <CardImg width="100%" object src={dish.image} alt={dish.name} />

    <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>

    </CardImgOverlay>
  </Card>
 );

}

const Menu = ({dishes,onClick})=>{
 
 
   
      console.log("Menu Component render function");
        const menu = dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} onClick={()=>{onClick(dish.id)}}/>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">

                      {menu}

            </div>

          </div>
        );
    }

export default Menu;