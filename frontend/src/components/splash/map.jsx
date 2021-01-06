import { Map, GoogleApiWrapper, Marker, InfoWindow, addListener} from 'google-maps-react';
import MarkerClusterer from '@googlemaps/markerclustererplus';
import React from 'react';


const mapStyles = {
  width: '80%',
  height: '80%',
  margin: '75px'
}
export class MapBox extends React.Component {


  render() {

    
    
    let favors = this.props.favors.data || []
   
    if ( this.props.userShow ) {
        favors = favors.filter( favor => this.props.currentUser.id === favor.favor_for_user_id )
    }
    if (this.props.requestShow ) {
      favors = favors.filter( favor => favor.status === true)
    }
    const test_markers = favors.map( (favor,idx) => {
      const lat = favor.favor_lat 
      const lng = favor.favor_lng 
      const location = { lat: lat, lng: lng } 
      const marker = < Marker position={ location } title={`${favor.favor_title} 
    ${favor.favor_description} `|| "favor"} key={idx} />
      return marker
      
    })
    
    
    const map =    (<Map 
        google = {this.props.google}
        zoom= {8}
        style={mapStyles}
        initialCenter = {{lat: 39.419140, lng: -76.452240}}
        className="map-container"
      > 
      {test_markers} 
      </Map>)
   
    return (
      <div>
       {map}
      </div>
      
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyAZpaEFWsQyJOahKBVfBZ1g3mpemxo1VQo'
})(MapBox);
