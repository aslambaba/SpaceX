import React from 'react';
import { useQuery, gql } from '@apollo/client';

const EXCHANGE_RATES = gql`
query{
  lanches{
    mission_name
  }
}
  
`;
function MainPage() {
    const { loading, error, data } = useQuery(EXCHANGE_RATES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    console.log(data);
    Object.keys(data).map(obj=>{
      console.log(data[obj]);
      const d = data[obj];

      d.map(obj=>console.log(obj.flight_number))
    })
    return (
        <div>
            <h2>GQL PAGE</h2>
        </div>
    )
}

export default MainPage;