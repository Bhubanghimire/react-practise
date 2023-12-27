import React from "react";
import Person from "./Person"


function NameList() {
    const persons = [
        {
            id:1,
            name:"Bhuban 1",
            age:19
        },
        {
            id:2,
            name:"Bhuban 2",
            age:19
        },
        {
            id:3,
            name:"Bhuba 3",
            age:19
        }
    ]
    const names = ['bhuban', "saroj", "sweta", "nitika", "bhuban"]

    const personList = persons.map(person => <Person key={person.id} person={person} ></Person>)
    const nameList = names.map((name,index) => <h2 key={index}> {name}</h2>)

    return <div>
        <div> {personList}</div>
               <div> {nameList} </div>
    </div>

}
export default NameList