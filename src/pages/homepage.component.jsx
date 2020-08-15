import React from 'react'
import Directory from '../components/Directory/directory.component'

const HomePage=(props)=>
{
    console.log(props)
    return(
        <div className='homePage'>
        <Directory/>
        </div>
    );
}

export default HomePage