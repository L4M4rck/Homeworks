import { Child1 } from '.Child1'
import { Child2 } from '.Child2'
import { userProvider } from '../context/UserProvider'

export const Parent = () => {
    return (
        <UserProvider>
            <h1>Parent App</h1>
            <hr />
            <Child1 />
            <Child2 />
        </UserProvider>
    )
}