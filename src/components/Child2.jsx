import React, {useContext} from 'react'
import { UserContext } from '../context/UserContext'

export const Child2 = () => {
    const { setUser } = useContext( UserContext )

    const onLogin = () => {
        setUser({
            id: 313,
            name: 'Marco Acosta',
            email: 'marco.acosta@uao.edu.co'
        })
    }

    return (
        <>
            <div>Child Component 2</div>
            <button
            className='btn btn-primary'
            onClick= { () => onLogin() }
            >
                Set User Info    
            </button>
        </>
    )
}