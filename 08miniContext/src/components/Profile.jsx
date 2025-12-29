import React , {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {User} = useContext(UserContext)
    
    if(!User) return <div>please login</div>

    return <div>welcome {User.username}</div>
}

export default Profile