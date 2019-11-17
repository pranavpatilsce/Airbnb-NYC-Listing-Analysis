import React, {useState, Component} from 'react';
import logo from './svg/airbnblogo.png';
import './landing.css';
import TopBar from './topbar/topbar.js';
import {Button} from 'reactstrap';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';

firebase.initializeApp({
  apiKey: "AIzaSyAE1dktWDHE2xl9jHA_9B75c2wyBJhFGuI",
  authDomain: "airbnbpriceprediction.firebaseapp.com"
})

const HostForm = (props) => {

  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [superhost, setSuperhost] = useState('');
  const [photoIsThere, setPhotoIsThere] = useState('');
  const [verified, setVerified] = useState('');
  const [roomType, setRoomType] = useState('');
  {/*const [amenitiesOne, amenitiesTwo, amenitiesThree, setAmenitiesOne, setAmenitiesTwo, setAmenitiesThree] = useState([{amenity: '', }]);*/}
  const [amenitiesOne, setAmenitiesOne] = useState('');
  const [amenitiesTwo, setAmenitiesTwo] = useState('');
  const [amenitiesThree, setAmenitiesThree] = useState('');

  const [bedType, setBedType] = useState('');

  return (
    <Form>
       <FormGroup check>
         <Label check>
           <Input type="checkbox" />{' '}
           This listing will offer access to a restroom.
         </Label>
       </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Area</Label>
        <Input type="select" value={neighborhood} onChange={e => setNeighborhood(e.target.value)}>
          <option></option>
          <option>Allerton</option>
          <option>Arden Heights</option>
          <option>Arrochar</option>
          <option>Arverne</option>
          <option>Astoria</option>
          <option>Bath Beach</option>
          <option>Battery Park City</option>
          <option>Bay Ridge</option>
          <option>Bay Terrace</option>
          <option>Bay Terrace, Staten Island</option>
          <option>Baychester</option>
          <option>Bayside</option>
          <option>Bayswater</option>
          <option>Bedford-Stuyvesant</option>
          <option>Belle Harbor</option>
          <option>Bellerose</option>
          <option>Belmont</option>
          <option>Bensonhurst</option>
          <option>Bergen Beach</option>
          <option>Boerum Hill</option>
          <option>Borough Park</option>
          <option>Breezy Point</option>
          <option>Briarwood</option>
          <option>Brighton Beach</option>
          <option>Bronxdale</option>
          <option>Brooklyn Heights</option>
          <option>Brownsville</option>
          <option>Bull's Head</option>
          <option>Bushwick</option>
          <option>Cambria Heights</option>
          <option>Canarsie</option>
          <option>Carroll Gardens</option>
          <option>Castle Hill</option>
          <option>Castleton Corners</option>
          <option>Charleston</option>
          <option>Chelsea</option>
          <option>Chinatown</option>
          <option>City Island</option>
          <option>Civic Center</option>
          <option>Claremont Village</option>
          <option>Clason Point</option>
          <option>Clifton</option>
          <option>Clinton Hill</option>
          <option>Co-op City</option>
          <option>Cobble Hill</option>
          <option>College Point</option>
          <option>Columbia St</option>
          <option>Concord</option>
          <option>Concourse</option>
          <option>Concourse Village</option>
          <option>Coney Island</option>
          <option>Corona</option>
          <option>Country Club</option>
          <option>Crown Heights</option>
          <option>Cypress Hills</option>
          <option>Ditmars Steinway</option>
          <option>Dongan Hills</option>
          <option>Douglaston</option>
          <option>Downtown Brooklyn</option>
          <option>DUMBO</option>
          <option>Dyker Heights</option>
          <option>East Elmhurst</option>
          <option>East Flatbush</option>
          <option>East Harlem</option>
          <option>East Morrisania</option>
          <option>East New York</option>
          <option>East Village</option>
          <option>Eastchester</option>
          <option>Edenwald</option>
          <option>Edgemere</option>
          <option>Elmhurst</option>
          <option>Eltingville</option>
          <option>Emerson Hill</option>
          <option>Far Rockaway</option>
          <option>Fieldston</option>
          <option>Financial District</option>
          <option>Flatbush</option>
          <option>Flatiron District</option>
          <option>Flatlands</option>
          <option>Flushing</option>
          <option>Fordham</option>
          <option>Forest Hills</option>
          <option>Fort Greene</option>
          <option>Fort Hamilton</option>
          <option>Fort Wadsworth</option>
          <option>Fresh Meadows</option>
          <option>Gerritsen Beach</option>
          <option>Glendale</option>
          <option>Gowanus</option>
          <option>Gramercy</option>
          <option>Graniteville</option>
          <option>Grant City</option>
          <option>Gravesend</option>
          <option>Great Kills</option>
          <option>Greenpoint</option>
          <option>Greenwich Village</option>
          <option>Grymes Hill</option>
          <option>Harlem</option>
          <option>Hell's Kitchen</option>
          <option>Highbridge</option>
          <option>Hollis</option>
          <option>Holliswood</option>
          <option>Howard Beach</option>
          <option>Howland Hook</option>
          <option>Huguenot</option>
          <option>Hunts Point</option>
          <option>Inwood</option>
          <option>Jackson Heights</option>
          <option>Jamaica</option>
          <option>Jamaica Estates</option>
          <option>Jamaica Hills</option>
          <option>Kensington</option>
          <option>Kew Gardens</option>
          <option>Kew Gardens Hills</option>
          <option>Kingsbridge</option>
          <option>Kips Bay</option>
          <option>Laurelton</option>
          <option>Lighthouse Hill</option>
          <option>Little Italy</option>
          <option>Little Neck</option>
          <option>Long Island City</option>
          <option>Longwood</option>
          <option>Lower East Side</option>
          <option>Manhattan Beach</option>
          <option>Marble Hill</option>
          <option>Mariners Harbor</option>
          <option>Maspeth</option>
          <option>Melrose</option>
          <option>Middle Village</option>
          <option>Midland Beach</option>
          <option>Midtown</option>
          <option>Midwood</option>
          <option>Mill Basin</option>
          <option>Morningside Heights</option>
          <option>Morris Heights</option>
          <option>Morris Park</option>
          <option>Morrisania</option>
          <option>Mott Haven</option>
          <option>Mount Eden</option>
          <option>Mount Hope</option>
          <option>Murray Hill</option>
          <option>Navy Yard</option>
          <option>Neponsit</option>
          <option>New Brighton</option>
          <option>New Dorp</option>
          <option>New Dorp Beach</option>
          <option>New Springville</option>
          <option>NoHo</option>
          <option>Nolita</option>
          <option>North Riverdale</option>
          <option>Norwood</option>
          <option>Oakwood</option>
          <option>Olinville</option>
          <option>Ozone Park</option>
          <option>Park Slope</option>
          <option>Parkchester</option>
          <option>Pelham Bay</option>
          <option>Pelham Gardens</option>
          <option>Port Morris</option>
          <option>Port Richmond</option>
          <option>Prince's Bay</option>
          <option>Prospect Heights</option>
          <option>Prospect-Lefferts Gardens</option>
          <option>Queens Village</option>
          <option>Randall Manor</option>
          <option>Red Hook</option>
          <option>Rego Park</option>
          <option>Richmond Hill</option>
          <option>Richmondtown</option>
          <option>Ridgewood</option>
          <option>Riverdale</option>
          <option>Rockaway Beach</option>
          <option>Roosevelt Island</option>
          <option>Rosebank</option>
          <option>Rosedale</option>
          <option>Rossville</option>
          <option>Schuylerville</option>
          <option>Sea Gate</option>
          <option>Sheepshead Bay</option>
          <option>Shore Acres</option>
          <option>Silver Lake</option>
          <option>SoHo</option>
          <option>Soundview</option>
          <option>South Beach</option>
          <option>South Ozone Park</option>
          <option>South Slope</option>
          <option>Springfield Gardens</option>
          <option>Spuyten Duyvil</option>
          <option>St. Albans</option>
          <option>St. George</option>
          <option>Stapleton</option>
          <option>Stuyvesant Town</option>
          <option>Sunnyside</option>
          <option>Sunset Park</option>
          <option>Theater District</option>
          <option>Throgs Neck</option>
          <option>Todt Hill</option>
          <option>Tompkinsville</option>
          <option>Tottenville</option>
          <option>Tremont</option>
          <option>Tribeca</option>
          <option>Two Bridges</option>
          <option>Unionport</option>
          <option>University Heights</option>
          <option>Upper East Side</option>
          <option>Upper West Side</option>
          <option>Van Nest</option>
          <option>Vinegar Hill</option>
          <option>Wakefield</option>
          <option>Washington Heights</option>
          <option>West Brighton</option>
          <option>West Farms</option>
          <option>West Village</option>
          <option>Westchester Square</option>
          <option>Westerleigh</option>
          <option>Whitestone</option>
          <option>Williamsbridge</option>
          <option>Williamsburg</option>
          <option>Willowbrook</option>
          <option>Windsor Terrace</option>
          <option>Woodhaven</option>
          <option>Woodlawn</option>
          <option>Woodrow</option>
          <option>Woodside</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">City</Label>
        <Input type="select" value={city} onChange={e => setCity(e.target.value)}>
          <option></option>
          <option>Bronx</option>
          <option>Brooklyn</option>
          <option>Manhattan</option>
          <option>Queens</option>
          <option>Staten Island</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Are you an Airbnb superhost?</Label>
        <Input type="select" value={superhost} onChange={e => setSuperhost(e.target.value)}>
          <option></option>
          <option>Yes</option>
          <option>No</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Are you clearly visible in your Airbnb profile photo?</Label>
        <Input type="select" value={photoIsThere} onChange={e => setPhotoIsThere(e.target.value)}>
          <option></option>
          <option>Yes</option>
          <option>No</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Is your host identity verified with Airbnb?</Label>
        <Input type="select" value={verified} onChange={e => setVerified(e.target.value)}>
          <option></option>
          <option>Yes</option>
          <option>No</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">How would you describe the room/accommodation in this listing?</Label>
        <Input type="select" value={roomType} onChange={e => setRoomType(e.target.value)}>
          <option></option>
          <option>Entire Home/Apartment</option>
          <option>Hotel Room</option>
          <option>Private Room</option>
          <option>Shared Room</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Amenities</Label>
        <Input type="select" value={amenitiesOne} onChange={e => setAmenitiesOne(e.target.value)}>
            <option></option>
            <option>Self check-in</option>
            <option>Cooking basics</option>
            <option>Cable TV</option>
            <option>Oven</option>
            <option>Microwave</option>
            <option>Dishes and silverware</option>
            <option>Bed linens</option>
            <option>Elevator</option>
            <option>Family/kid friendly</option>
            <option>Refrigerator</option>
            <option>Internet</option>
            <option>Free street parking</option>
            <option>First aid kit</option>
            <option>Lock on bedroom door</option>
            <option>Fire extinguisher</option>
            <option>Dryer</option>
            <option>Washer</option>
            <option>Hot water</option>
            <option>Iron</option>
            <option>Laptop friendly workspace</option>
            <option>Hair dryer</option>
            <option>TV</option>
            <option>Shampoo</option>
            <option>Carbon monoxide detector</option>
            <option>Hangers</option>
            <option>Air Conditioning</option>
            <option>Smoke detector</option>
            <option>Kitchen</option>
            <option>Heating</option>
            <option>Wifi</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Input type="select" value={amenitiesTwo} onChange={e => setAmenitiesTwo(e.target.value)}>
            <option></option>
            <option>Self check-in</option>
            <option>Cooking basics</option>
            <option>Cable TV</option>
            <option>Oven</option>
            <option>Microwave</option>
            <option>Dishes and silverware</option>
            <option>Bed linens</option>
            <option>Elevator</option>
            <option>Family/kid friendly</option>
            <option>Refrigerator</option>
            <option>Internet</option>
            <option>Free street parking</option>
            <option>First aid kit</option>
            <option>Lock on bedroom door</option>
            <option>Fire extinguisher</option>
            <option>Dryer</option>
            <option>Washer</option>
            <option>Hot water</option>
            <option>Iron</option>
            <option>Laptop friendly workspace</option>
            <option>Hair dryer</option>
            <option>TV</option>
            <option>Shampoo</option>
            <option>Carbon monoxide detector</option>
            <option>Hangers</option>
            <option>Air Conditioning</option>
            <option>Smoke detector</option>
            <option>Kitchen</option>
            <option>Heating</option>
            <option>Wifi</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Input type="select" value={amenitiesThree} onChange={e => setAmenitiesThree(e.target.value)}>
            <option></option>
            <option>Self check-in</option>
            <option>Cooking basics</option>
            <option>Cable TV</option>
            <option>Oven</option>
            <option>Microwave</option>
            <option>Dishes and silverware</option>
            <option>Bed linens</option>
            <option>Elevator</option>
            <option>Family/kid friendly</option>
            <option>Refrigerator</option>
            <option>Internet</option>
            <option>Free street parking</option>
            <option>First aid kit</option>
            <option>Lock on bedroom door</option>
            <option>Fire extinguisher</option>
            <option>Dryer</option>
            <option>Washer</option>
            <option>Hot water</option>
            <option>Iron</option>
            <option>Laptop friendly workspace</option>
            <option>Hair dryer</option>
            <option>TV</option>
            <option>Shampoo</option>
            <option>Carbon monoxide detector</option>
            <option>Hangers</option>
            <option>Air Conditioning</option>
            <option>Smoke detector</option>
            <option>Kitchen</option>
            <option>Heating</option>
            <option>Wifi</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Bed type</Label>
        <Input type="select" value={bedType} onChange={e => setBedType(e.target.value)}>
          <option></option>
          <option>Airbed</option>
          <option>Couch</option>
          <option>Real Bed</option>
          <option>Futon</option>
          <option>Pull-out Sofa</option>
        </Input>
      </FormGroup>
      <FormGroup check>
        <Label className="lead">The prediction may take upto 5 mins.</Label>
      </FormGroup>

      <Button color="success" className="Predict-Button" type="submit" onClick={async ()  => {
        const sending = {
          neighborhood,
          city,
          superhost,
          photoIsThere,
          verified,
          roomType,
          amenitiesOne,
          amenitiesTwo,
          amenitiesThree,
        };
        const response = await fetch('/results', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(sending)
        })
        if(response.ok){
          console.log("worked");
        }
      }}
      >Predict my Airbnb's price!</Button>
    </Form>
  );
}

class Login extends React.Component {

  state = {isSignedIn: false}

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user})
      console.log("user", user)
    })
  }

  render(){
    return(
      <div className="Landing">
        <div className="Landing-header">
              {this.state.isSignedIn ?
              (
              <div>
                <HostForm />
                {/*<a href='/results'><Button className="Predict-Button" color="success" ></Button></a>*/}
                <div className="header-buttons">
                    <div>
                      <h1 className="display-4">Welcome {firebase.auth().currentUser.displayName}</h1>
                      <img alt="profile picture" top width="30%" src={firebase.auth().currentUser.photoURL} />
                    </div>

                    <div className="predict-signout">
                      <Button onClick={() => firebase.auth().signOut()}>Sign out!</Button>
                    </div>

                    {/*<div className="predict-next">
                      <Button> Predict! </Button>>
                    </div>*/}
                </div>
              </div>
              )
              :
              (
                <div>
                  <div className="lead">
                      <p>Want to predict how much your airbnb listing will be worth?</p>
                      <p>Gives us the area, type of home, and a few other details. Our ML algorithm will calculate the value of your Airbnb listing!</p>
                      <p>Log in below and let's get started!</p>
                  </div>
                  <div className="LogInConsole">
                    <StyledFirebaseAuth
                      uiConfig={this.uiConfig}
                      firebaseAuth={firebase.auth()}
                    />
                  </div>
                </div>
              )
              }
        </div>
      </div>
    )
  }
}

function Landing() {
  return (
    <div>
      <div>
        <TopBar />
      </div>
      <div>
        <Login />
      </div>
    </div>
  );
}

export default Landing;

{/*
  <div className="Landing">
    <header className="Landing-header">
      <img src={logo} className="Landing-logo" alt="logo" />
      <p>
        Edit <code>src/landing.js</code> and save to reload.
      </p>
  <option>
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      <option>
    </hea<option>
  </div>
  */}
