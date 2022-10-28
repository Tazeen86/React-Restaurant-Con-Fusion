import React, { Component } from 'react';

import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import  {COMMENTS} from "../shared/comments";
import Home from './HomeComponent';
import { Routes, Route, Navigate ,useParams} from "react-router-dom";
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };

    
  }
 
  render() {
  
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/home" element={<HomePage dishes={this.state.dishes} promotions={this.state.promotions} leaders={this.state.leaders}/>} />
          <Route exact path="/menu/:id" element={<DishWithId  dishes={this.state.dishes} comments={this.state.comments}/> }/>
          <Route exact path="/menu" element={<Menu dishes={this.state.dishes} />} />
          <Route exact path='/contactus' element={<Contact/>} />
          <Route
      path="*"
      element={<Navigate to="/home" replace />}
  />
        </Routes>
        <Footer />
      </div>
    );
  }

  }
  
  const DishWithId = (props) => {
    let {id} = useParams();
    
    return(
        <DishDetail dish={props.dishes.filter((dish) => { return (dish.id === parseInt(id,10));})[0]} 
        comments={props.comments.filter((comment) => { return (comment.dishId === parseInt(id,10));})} />
    );
  }

  function HomePage(props) {
    return(
        <Home 
            dish={props.dishes.filter((dish) => dish.featured)[0]}
            promotion={props.promotions.filter((promo) => promo.featured)[0]}
            leader={props.leaders.filter((leader) => leader.featured)[0]}
        />
    );
  }
  export default Main; 