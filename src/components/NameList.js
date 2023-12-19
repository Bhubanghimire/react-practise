import React, {Component} from "react";
import Person from "./Person"


function NameList() {
    const persons = [
        {
            id:1,
            name:"Bhuban 1",
            age:19
        },
        {
            id:1,
            name:"Bhuban 2",
            age:19
        },
        {
            id:1,
            name:"Bhuba 3",
            age:19
        }
    ]

    const personList = persons.map(person => <Person person={person} ></Person>)
    return <div>{personList}</div>

}
export default NameList