import './App.css'
import { TextField } from '@mui/material'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  const [pmount,setamount]=useState(0)
  const [rate,setrate]=useState(0)
  const [time,settime]=useState(0)
  const [re,setres]=useState(0)

  const [validamount,setvalidamount]=useState(false)
  const [validrate,setvalirate]=useState(false)
  const [validtime,setvalidtime]=useState(false)
  const validinput=(e)=>
  {
    const {name,value}=e.target
    console.log(name,value);

    if(value.match(/^[0-9]*.?[0-9]+$/))
    {
        if(name=='pamount')
      {
        setvalidamount(true)
        setamount(value)
      }
      else if(name=='rate')
      {
        setvalirate(true)
        setrate(value)
      }
      else{
        setvalidtime(true)
        settime(value)
      }

    }
    else
    {
      if(name=='pamount')
    {
      setvalidamount(false)
      setamount(0)
    }
    else if(name=='rate')
    {
      setvalirate(false)
      setrate(0)
    }
    else{
      setvalidtime(false)
      settime()
    }
    }

  }
  console.log(pmount,rate,time);
  const resetform=()=>{
    setamount(0)
    setrate(0)
    settime(0)

    setvalidamount(false)
    setvalidtime(false)
    setvalirate(false)
    setres(0)

  }
   const submitted=(e)=>{
    e.preventDefault()
    const res=(pmount*rate*time)/100
    setres(res)

   }

  return (


    <>
      <div className='w-100 bg-dark d-flex justify-content-center align-items-center ' style={{height:'100vh'}}>
        <div className='bg-light w-50 shadow rounded p-5'>
          <h2>Simple Intrest Calculator</h2>
          <div className='d-flex justify-content-center p-5 shadow border mt-3 bg-warning'>
          ₹ {re}

          </div>
          <form onSubmit={(e)=>{submitted(e)}}>
            <div className='mt-3'>
               <TextField id="outlined-basic" style={{width:"100%"}} name='pamount' onChange={(e)=>{validinput(e)}} label=" ₹principle Amount" variant="outlined" />
               {
                !validamount &&
                <div className='text-danger'>--------invalid value---------</div>
               }
           
            </div>
            <div className='mt-3'>
               <TextField id="outlined-basic" style={{width:"100%"}} label="%Rate" name='rate' onChange={(e)=>{validinput(e)}} variant="outlined" />
               {
                !validrate &&
                <div className='text-danger'>--------invalid value-------</div>
               }
           
            </div>
            <div className='mt-3'>
               <TextField id="outlined-basic" style={{width:"100%"}} label="Time" name='time' onChange={(e)=>{validinput(e)}} variant="outlined" />
               {
                !validtime &&
                <div className='text-danger'>*-------invalid value------*</div>
               }
            </div>
            <Stack spacing={2} direction="row">
                <Button variant="contained" type='submit' disabled={validamount&&validrate&&validtime?false:true} className='mt-3 w-50 p-2 bg-success'>Submit</Button>
                <Button variant="contained" type='reset' onClick={resetform} className='mt-3 w-50 p-2 bg-danger'>Reset</Button>
            </Stack>
        


          </form>

        </div>

      </div>
      
    </>
  )
}

export default App
