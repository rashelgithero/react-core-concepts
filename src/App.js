import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  const products = [
    {name: " Key-board", price: ' $40' },
    {name: ' Mouse', price: ' $30'},
    {name: 'Charger', price: ' $10'},
    {name: 'Mobile', price: ' $100'},
    {name: 'Laptop', price: ' $200'}

  ]
  
  
  
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Counter></Counter>
        <Users></Users>
        {
          products.map(productive => <Product product = {productive}></Product> )
        }
        
               
         
      </header>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(9); 
  
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={() =>setCount(count + 1)} style={{backgroundColor: 'cyan'}}>Increase</button>
      <br />
      <button onMouseMove={() =>setCount(count - 1)} style={{backgroundColor: 'orange'}}>Decrease</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h3>Dynamic Users:</h3>
      
        
        
        {users.map(user => <li>{user.phone}</li> )}
      
    </div>
  )
}

function Product (props){
  const productStyle ={
    border: '2px solid grey',
    borderRadius: '5px',
    height: '250px',
    width: '300px',
    margin: '20px',
    padding: '10px 20px' 
  }

  const {name, price} = props.product;
  console.log(name, price)


  return (
    <div style={productStyle}>
      <h2>name: {name} </h2>
      <p>price: {price} </p>
      <button style={{backgroundColor: 'cyan', fontSize: '20px'}}>Buy Now</button>
    </div>
  )
}

 



export default App;
