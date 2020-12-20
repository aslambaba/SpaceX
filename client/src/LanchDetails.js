import React from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client'
import './styles/LaunchDetails.css'

const LanchDetails = gql`
    query LanchQ($flight_id: Int!){
        launch(flight_number: $flight_id){
            flight_number
            mission_name
            launch_year
            launch_success
            rocket{
              rocket_id
              rocket_name
              rocket_type
            }
        }
      }
`;

function LaunchDetails() {
    let { flight_id } = useParams();
    flight_id = parseInt(flight_id);
    const { data, loading, error } = useQuery(LanchDetails,
        { variables: { flight_id }, });
    if (loading) return <p>Loading ....</p>;
    if (error) return <p>Error :)</p>;
    const Result = data.launch;
    console.log(Result);
    let status;
    if (Result.launch_success) {
        status = 'Successful';
    }
    else {
        status = 'Failed';
    }
    return (
        <div className='LaunchConatiner'>
            <h2>Launch Details</h2>
            <div className='launchdetails'>
                <p>Flight Number: {Result.flight_number}</p>
                <p>Mission Name: {Result.mission_name}</p>
                <p>Launch Year: {Result.launch_year}</p>
                <p>Mission: {status}</p>
            </div>
            <h2>Rocket Details</h2>
            <div className='rocketname'>
                <p>Type: {Result.rocket.rocket_type}</p>
                <p>Rocket Name: {Result.rocket.rocket_name}</p>
            </div>
        </div>
    );
}

export default LaunchDetails;