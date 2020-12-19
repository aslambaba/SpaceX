import React from 'react'
import {gql, useQuery} from '@apollo/client';
import {useParams} from 'react-router-dom';


const Get_Rocket = gql`
    query Rocket($rocket_id: String!){
        rocket(rocket_id: $rocket_id){
            rocket_id
            rocket_name
            rocket_type
          }
    }
`;
function RocketDetails(){
    const {rocket_id} = useParams();
    const {data,loading,error} = useQuery(Get_Rocket,{
        variables: {rocket_id}
    })
    if(loading) return <p>Loading....</p>
    if(error) return <p>Eroor :(</p>
    const Rocket_Result = data.rocket;
    console.log(Rocket_Result);
    
    return(
        <div>
            <h2>Rocket Details</h2>
            <p>{Rocket_Result.rocket_id}</p>
            <p>{Rocket_Result.rocket_name}</p>
            <p>{Rocket_Result.rocket_type}</p>
        </div>
    )
}

export default RocketDetails;