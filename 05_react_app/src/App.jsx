
import { useState } from 'react';
import './App.css'
import LogIn from './components/Login'
import SignUp from './components/SignUp'

function MyButton({count, onClick}){
  
  return(
    <button onClick={onClick}> 
      Clicked Me..!!  {count} times
    </button>
  )
}
function MyImg(){
  return(
    <img 
    className='avatar'
    src={user.img}
    alt={'Picture of '+ user.name}
    style={{
      width: user.imgSize,
      height: user.imgSize
    }}
    />
  )
}

const user = {
  name: "Akhilesh Mahto",
  email: "akhileshedd@gmail.com",
  img: "https://i.imgur.com/yXOvdOSs.jpg",
  imgSize: 90,
  loggedIn: false
}

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function MyList(){
  const listItems = products.map(product =>
    <li key={product.id}
    style={{
      color: product.isFruit ? 'magenta' : 'darkgreen'
    }}>
      {product.title}
    </li>
  );
  
  return (
    <ul>{listItems}</ul>
  );
}


function App() {
  let content;
  if (user.loggedIn) {
    content = <LogIn />
  }else{
    content = <SignUp />
  }
  const [count, setCount] = useState(0)
  function handleClick() {
    setCount(count + 1)
  }
  
  return (
    <>
      <h1>Hello {user.name}</h1>
      <MyImg /><br />
      <MyButton count={count} onClick={handleClick}/>
      <MyButton count={count} onClick={handleClick}/>
      {content}
      <MyList />
    </>
  )
}

export default App
