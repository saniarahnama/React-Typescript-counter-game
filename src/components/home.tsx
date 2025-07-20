import useCounterStore from "../store/useCounterStore";
import { useEffect, useState } from "react";
import 'E:/sania/work/counter-game/src/App.css'

const Home = () => {
  const { count, increase, reset } = useCounterStore();
  const[timer , setTimer] = useState(0);
  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  const start =() =>{
    setTimer(10);
    reset();
  };
  
  const reSet= () =>{
    reset();
    setTimer(0);

  }



  return (
    <div className="bg-night d-flex flex-column justify-content-center align-items-center pt-5 pb-5" >
      <h1 className="mt-5 text-moss-green text-shadow">{timer}</h1>
      <h1 className="mt-5 text-green">{count}</h1>
      <div className="mt-5"><button className="btn btn-green" onClick={start} disabled={timer !== 0}>Start</button></div>
      <div className="mt-5"><button className="btn btn-olive-light" onClick={increase } disabled={timer === 0}>Click me</button></div>
      <div className="mt-5"><button className="btn btn-olive-dark" onClick={reSet}>Reset</button></div>
     
    </div>
  )
}

export default Home
