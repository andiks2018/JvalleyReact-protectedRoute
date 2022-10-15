import React, {useEffect, useState} from 'react'

export default function Dashboard() {

    //state
    const [user, setUser]=useState()

    //cdm component dip mount
    useEffect(()=>{
        let result = JSON.parse(localStorage.getItem('user'))
        console.info(result)
        setUser({
            email:result.email
        })
    }, [])

    //logout
    const handleLogout =()=>{
        localStorage.clear()
        window.location.reload()
    }
  return (
    <main className='
    w-screen min-h-screen flex flex-col max-w-[1200px] mx-auto pt-20 '>
        <h1 className='text-4xl'>
        Welcome <b className='text-4xl'>{ user?.email }</b> 
        </h1>

        <button className='h-12 bg-slate-800 text-white rounded-md
        w-[120px] mt-4' onClick={handleLogout}>Logout</button>
        
    </main>
  )
}
