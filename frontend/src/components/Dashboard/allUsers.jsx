import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../styles/users.css'

function Users() {
    const [arr,setArr] = useState([])
    const [followState, setFollowState] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/auth/")
        .then(function(res){
            console.log(res.data);
            setArr(res.data.data)
            setFollowState(Array(res.data.data.length).fill('follow'))
        })
        .catch((e)=>{
            console.log(e);
        })
    },[])

    const followUser = (index) =>{
        let newFollowState = [...followState]
        if(newFollowState[index] === 'follow'){
            newFollowState[index] = 'Unfollow'
        }
        else if(newFollowState[index] === 'Unfollow'){
            newFollowState[index] = 'follow'
        }
        setFollowState(newFollowState)
    }

    return (
        <div className='user-container flex-col'>
            {arr.length > 0 && 
                arr.map((data,index)=>{
                    return(
                        <div className='user-div flex-row' key={index}>
                            <p>{data.username}</p>
                            <p className='follow-btn cursor-pointer' onClick={() => followUser(index)}>{followState[index]}</p>
                        </div>
                    )
                })}
        </div>
    )
}

export default Users
