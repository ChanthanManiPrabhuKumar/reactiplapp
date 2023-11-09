import React, { useState } from 'react'
import "./style.css"
import {Headers} from './header'
import Teams from './listofipl'
import TeamCard from './teamscard'

function App(){

    const [teamlist,updateTeamList] = useState([
        {teamurl : "https://i.pinimg.com/originals/29/2b/d5/292bd5c291ff709c415928ff94454259.png",
         teamName :  "Mumbai Indians",
        section : "mi"},
         {teamurl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWK-gKmdGnl3BQUCewOv2lHvkPWDfaXh52IQ&usqp=CAU",
         teamName :  "Chennai Super Kings",
         section : "csk"},
         {teamurl : "https://i.pinimg.com/originals/a4/87/26/a48726809d1115236c20842dc781ae55.png",
         teamName :  "Delhi Captials",
         section : "dc"},
         {teamurl : "https://yt3.googleusercontent.com/szR92lL8-5jqaQ6m1Lmh2EE7uRuv1XC_FWnEgX_eFx07r2A_GlXbMvubEO-sbALvTsfCsBzegA=s900-c-k-c0x00ffffff-no-rj",
         teamName :  "Royal Challengers Banglore",
         section : "rcb"},
         {teamurl : "https://e1.pxfuel.com/desktop-wallpaper/817/687/desktop-wallpaper-sunrisers-hyderabad-srh-team.jpg",
         teamName :  "Sunrisers Hyderbad",
         section : "srh"}])

    return(
        <div>
        <Headers/>
        <h1>Top 5 ipl Teams</h1>
        {teamlist.map(  (team)  => {
            return <Teams Name = {team.teamName} Id = {team.section}/>
        })}
        
        {teamlist.map(  (team)  => {
            console.log(team.teamName,team.teamurl);
           return <TeamCard Name = {team.teamName}  Img = {team.teamurl} Section={team.section}/>
        })}
        </div>
       
    )
}
export default App;