import React from "react";
import {Api_User} from './User_data';
  
export class apiCalls {
static async getUser(id) {
    const user = await fetch(`http://localhost:3000/user/${id}`);
    const data = await user.json();
    console.log(data.data.userInfos)
    console.log(data.data)
    return (data.data)
    }
static async getUserActivity(id){
    let user = await fetch(`http://localhost:3000/user/${id}/activity`)
    let data = await user.json();
    
    for (let i = 0; i < data.data.sessions.length; i++) {
        data.data.sessions[i].day = i + 1;
    }
    for (let j = 0; j < 3; j++) {
        data.data.sessions.push({...data.data.sessions[j], day:j+8});
      }
    
    return(data.data)
}
static async getUserPerformance(id){
    let user_performance = await fetch(`http://localhost:3000/user/${id}/performance`)
    const data = await user_performance.json();
    return (data.data);
}
static async getUserAverageSession(id){
    let user_sessions = await fetch(`http://localhost:3000/user/${id}/average-sessions`)
    let data = await user_sessions.json()
    return(data.data)
}

}
