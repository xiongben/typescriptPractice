import React from 'react';


function UserInfo(props:any){
    const {name,num}:{name:string,num: number} = props.data;
    return(
        <div>
            <h2>user info box</h2>
            <p>name: {name}</p>
            <p>number: {num}</p>
        </div>
    )
}


export default UserInfo
