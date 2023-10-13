import React, { UserContext} from 'react'
import { UserContext } from '../context/UserContext'
export const Child1 = () => {
    const {user} = useContext ( UserContext )

    return (
        <>
            <div>Child Component 1</div>
            <pre>
                { JSON.stringfy(user, null, 3)}
            </pre>
        </>
    )
}