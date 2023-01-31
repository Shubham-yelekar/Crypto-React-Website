import React, { useState, useEffect } from 'react'
import Marquee from 'react-fast-marquee'
import './Markqee.css'
import axios from 'axios'



const Markqee = () => {

    const [data, setData] = useState(null)

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false'

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    // console.log(data)

    if (!data) return null
    
  return (
    

    <div className='marquee'>
    <Marquee speed={60} gradient={false} pauseOnHover direction="left">
        
            <div className='banner'>
                <div className=' text-1' >
                ✳
                    <h5>{data[0].name}</h5> 
                    <p>${data[0].current_price.toLocaleString()}</p> 
                ✳
                </div>

                <div className=' text-1' >
                ✳
                    <h5>{data[1].name}</h5> 
                    <p>${data[1].current_price.toLocaleString()}</p> 
                ✳
                </div>

                <div className=' text-1' >
                ✳
                    <h5>{data[2].name}</h5> 
                    <p>${data[2].current_price.toLocaleString()}</p> 
                ✳
                </div>

                <div className=' text-1' >
                ✳
                    <h5>{data[3].name}</h5> 
                    <p>${data[3].current_price.toLocaleString()}</p> 
                ✳
                </div>

                <div className=' text-1' >
                ✳
                    <h5>{data[4].name}</h5> 
                    <p>${data[4].current_price.toLocaleString()}</p> 
                ✳
                </div>
                
                <div className=' text-1' >
                ✳
                    <h5>{data[5].name}</h5> 
                    <p>${data[5].current_price.toLocaleString()}</p> 
                ✳
                </div>
            </div>  
              
        
    </Marquee>
    </div>
         
        
  )
}

export default Markqee