import React from 'react';
import { useQuery, gql } from '@apollo/client';
import {Link} from 'react-router-dom';
const EXCHANGE_RATES = gql`
query{
  lanches{
    mission_name
    launch_success
    flight_number
  }
}
  
`;
function MainPage() {
    const { loading, error, data } = useQuery(EXCHANGE_RATES);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const Results = data.lanches;
    console.log(Results);
    return (
        <div>
            <h2>GQL PAGE</h2>
            {
              Object.keys(Results).map(Obj=>{
                return(
                  <div>
                    <Link to={`/launch/${Results[Obj].flight_number}`} ><p>{Results[Obj].mission_name}</p></Link>
                    <p>{Results[Obj].lanche_success}</p>
                  </div>
                )
              })
            }
        </div>
    )
}

export default MainPage;