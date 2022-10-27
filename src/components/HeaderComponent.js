import React, { Component } from 'react';
import { Navbar, NavbarBrand ,Nav,NavbarToggler,Collapse,NavItem } from 'reactstrap';
import {NavLink} from 'react-router-dom';
import logo from  "./assets/images/Ristorante_con_Fusion.png";
class Header extends Component {
  constructor(props){
       super(props);
       this.state={
          isNavOpen:false
       };
     this.toggleNav =this.toggleNav.bind(this);
  }
  toggleNav(){
    this.setState({isNavOpen:!this.state.isNavOpen});
  }
  render() {
    return(
    <React.Fragment>
      <Navbar  dark expand="md" >
        <div className="container">
            <NavbarToggler  className="mr-2" onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/"> <img  src={logo} alt="logo" height="40px" width="40px"/></NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar className='justify-content-end' >
            <Nav navbar >
               <NavItem className='mr-5'>
                  <NavLink className="nav-link" to="/home"><span className="fa fa-home fa-lg "></span>Home</NavLink>
                </NavItem>
                <NavItem>  
                  <NavLink className="nav-link" to="/about-us"><span className="fa fa-info fa-lg"></span>AboutUs</NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink className="nav-link" to="/menu"><span className="fa fa-list fa-lg"></span>Menu</NavLink>
               </NavItem>
               <NavItem>
               <NavLink className="nav-link" to="/contactus"><span className="fa fa-address-card fa-lg"></span>ContactUs</NavLink>
               </NavItem>
            </Nav>
            </Collapse>
        </div>
      </Navbar>
      <div class="jumbotron">
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Ristorante con Fusion</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
               </div>
           </div>
       </div>
    </React.Fragment>
    );
  }
}

export default Header;