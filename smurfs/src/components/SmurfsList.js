import React, { useContext } from 'react'
import { SmurfContext } from "../contexts/SmurfContext"

import SmurfCard from './SmurfCard'

export default function SmurfsList(props) {
    const { smurfs } = useContext(SmurfContext)
    return (
        <div>{
            smurfs && smurfs.map((smurf) => <SmurfCard key={smurf.id} smurf={smurf} />)
        }</div>
    )
}