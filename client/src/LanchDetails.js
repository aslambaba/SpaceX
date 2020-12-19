import React from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client'
import {
    Link,
    useRouteMatch,
} from 'react-router-dom';

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
            }
        }
      }
`;

function LaunchDetails() {
    const {url} = useRouteMatch();
    let { flight_id } = useParams();
    flight_id = parseInt(flight_id);
    const { data, loading, error } = useQuery(LanchDetails,
        { variables: { flight_id }, });
    if (loading) return <p>Loading ....</p>;
    if (error) return <p>Error :)</p>;
    const Result = data.launch;
    console.log(Result);
    return (
        <div>
            <p>LanchDetails</p>
            <p>{Result.flight_number}</p>
            <p>{Result.mission_name}</p>
            <p>{Result.launch_year}</p>
            <Link to={`/rocket/${Result.rocket.rocket_id}`}><p>{Result.rocket.rocket_name}</p></Link>
        </div>
    );
}

export default LaunchDetails;