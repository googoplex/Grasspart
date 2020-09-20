import React, {useState} from 'react';
import Movies from './movies';
import Nav from './nav'


const MoviesList = () =>{
    
    const [Users, setMovies] = useState([
        {
        
        name: 'John Paul',
        password:'09324566732423',
        email:'kontolmeme512@gmail.com',
        Age:'17',
        Gender:'Male',
        Country: 'Philippines',
        price: '100 php',
        id: 12345
        },
        {
        name: 'Diana Gwapo',
        password:'09324566732423',
        email:'Diana.jane@gmail.com',
        Age:'17',
        Gender:'Male',
        Country: 'China',
        price: '100 php',
        id: 12345
        },
        {
        name: 'Angela Bayot',
        password:'09324566732423',
        email:'Angelo@gmail.com',
        Age:'17',
        Gender:'Male',
        Country: 'Japan',
        price: '100 php',
        id: 12345
        },
       
        {
        name: 'Boy Batusay',
        password:'09324566732423',
        email:"kontolmeme512@gmail.com",
        Age:'17',
        Gender:'Male',
        Country:'Unite State',
        price: '100 php',
        id: 12345
        }
       
       
       

    ]);
            return(
            <div>  
            {Users.map(user =>(
            <Movies  name={user.name} password={user.password} email={user.email}
            age={user.Age} gender ={user.Gender} country={user.Country}
            />
            ))}
            </div>
            );
        

};
export default MoviesList;