import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import './styles/MainPage.css';

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
    <div className='MainContainer'>
      <h1>SpaceX</h1>
      {
        Object.keys(Results).map(Obj => {
          let status;
          if(Results[Obj].launch_success){
            status = 'Successful';
          }
          else{
            status = 'Failed';
          }
          return (
            <Link to={`/launch/${Results[Obj].flight_number}`} className='LinkD'>
              <div className="LanchesItem">
                <h2>{Results[Obj].mission_name}</h2>
                <p>{status}</p>
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}

export default MainPage;