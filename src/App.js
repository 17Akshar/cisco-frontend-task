import { useState,useEffect } from 'react';
import './App.css';
import { w3cwebsocket as W3Cwebsocket } from 'websocket';
import Banner from './Banner'
import Exhibit from './Exhibit';
const client = new W3Cwebsocket("ws://localhost:55455")
function App() {
  useEffect(()=>{
    client.onopen = () =>{
      console.log("CONNECTED TO SERVER")
    }
  },[])
  const [time ,setTime] = useState(0)
  client.onmessage = (request)=>{
    var dt = new Date()
    var current_time = dt.getMilliseconds()
    const datafromserver = JSON.parse(request.data)
    setTime((datafromserver-current_time)/1000)
  }
  const [IP4,setIP4] = useState("none")
  const [IP6,setIP6] = useState("none")
  const getData = async() => {
    const response = await fetch("https://api64.ipify.org?format=json")
    const result = await response.json()
    setIP4(result.ip)
    setIP6(result.ip)

  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <>
    <div className='main'>
    <div className='Banner'>
    <Banner title = "Sextant Dashboard"></Banner>
    </div>
    <div className='exhibit'>
{    (IP4=="none") ? <Exhibit name="Loading.." address="Loading"></Exhibit>:<Exhibit name="IPV4" address={IP4}></Exhibit>
}  
{
  (IP6=="none")?<Exhibit name="Loading.." address="Loading"></Exhibit>:<Exhibit name="IPV6" address={IP6}></Exhibit>
}
{
  (time==0)?<Exhibit name="Loading.." address="Loading"></Exhibit>:<Exhibit name="LATENCY" address={time}></Exhibit>
}         
</div>
    </div>
    </>
  );
}

export default App;
