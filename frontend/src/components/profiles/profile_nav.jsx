import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCircle, faPlus, faBell} from '@fortawesome/free-solid-svg-icons';
import './profile.css';




class ProfileNav extends React.Component{
constructor(props){
super(props);

this.state ={

        notes: false,
        info: false,
        add: false,
        favors: false
        
}


this.addMenu = this.addMenu.bind(this);
this.showNotesMenu = this.showNotesMenu.bind(this);
this.showDropdown = this.showDropdown.bind(this);
this.showUserInfo = this.showUserInfo.bind(this);
this.renderForm = this.renderForm.bind(this);
this.favorMenu = this.favorMenu.bind(this);

}



showDropdown(field) {
        return e => {
            e.preventDefault();
            e.stopPropagation();
            this.setState({[field]: !this.state[field]}, () => {
            if (this.state[field] === true) { 
                document.addEventListener('click', this.showDropdown);
             } else {
                document.removeEventListener("click", this.showDropdown) 

            }
            });
        }
    }







componentDidMount() {
        this.props.closeModal();
        this.props.fetchFavors();
    }

componentWillUnmount() {
        this.props.closeModal();
    }
    

addMenu(){


return(
    <ul className="user-info-list">
        <li className="add-menu-item" onClick={this.renderForm('favor')}>Add Favor</li>

    </ul>

)

} 

favorMenu(){

 if(this.props.favors){
      
     
      return (
      <div>
         {this.props.favors
          .filter(favor => favor.favor_for_user_id === this.props.currentUser.id)
          .map(favor =>   <p  className="favor-list">{favor.favor_title}</p>)
        }
    </div> 
      )}


      }

showUserInfo(){


return(

<ul className="user-info-list" >
    <li> User Profile </li>
<li> Name: {this.props.currentUser.username}</li>

 <li>Email: {this.props.currentUser.email} </li>
  <li onClick={this.props.logout}>Log Out</li>

</ul> 


)

}



handleFavors(){

    if(this.props.favors){
      
     
      return (
      <div>
         {this.props.favors
          .filter(favor => favor.favor_for_user_id === this.props.currentUser.id)
          .map(favor =>   <p  className="favor-list">{favor.favor_description}</p>)
        }
    </div> 
      )}


      }
    


renderForm(field) {
    if (this.props.modal === field) {
      return () => {
        this.props.closeModal();
      }
    }
    return () => this.props.openModal(field)
  }


showNotesMenu(){

return (

    <ul className="notes-list">
        <li> No notifications at this time! </li>
        <img className="logo-img"  src="https://i.ibb.co/1mHJgBD/C.png"/>

    </ul>
)

}


render(){

return (
   
    <header className="header-nav">

    
 
         <a href="https://hidden-caverns-32878.herokuapp.com/#">
                                 <img className="logo-bx"  src="https://i.ibb.co/1mHJgBD/C.png"/>

         </a>
                   
     <div className="header-nav-left">
                     

         
           <button className="home-lk"><Link to={"/"}><FontAwesomeIcon className="fstyle" icon={faHome}  /></Link></button> 
      </div> 

      <div className="header-nav-left">     
            <button className="favor-button" onClick={this.showDropdown("favors")}>
                <span className="favor-button"> Favors </span>
                

                     <img className="logo-bd"  src="https://i.ibb.co/1mHJgBD/C.png"/>
                
                </button>

                {this.state.favors ? this.favorMenu() : null}

    </div>
    <div className="header-nav-mid" onClick={this.showDropdown("info")}> <button className="home-lk"> <FontAwesomeIcon className="fstyle" icon={faCircle}/></button> 

            {this.state.info ? this.showUserInfo() : null}

    </div>

    <div className="header-nav-mid" onClick={this.showDropdown("add")}><button className="home-lk"><FontAwesomeIcon className="fstyle" icon={faPlus}/></button> 
                        {this.state.add ? this.addMenu() : null}


    </div>

    <div className="header-nav-right" className="notifications" onClick={this.showDropdown("notes")}>  <button className="home-lk"><FontAwesomeIcon className="fstyle" icon={faBell}/></button> 
                    {this.state.notes ? this.showNotesMenu() : null}

    </div>










    </header>

   





);

}

}







export default withRouter(ProfileNav);