import { useEffect, useState } from 'react'
import { Context } from '../../../useContext'
import logic from '../../../logic'
import View from '../../../components/library/View'
import useContext from '../../../useContext'
import ShareQR from '../ShareQR'
import AddStudent from '../AddStudent'
import { useParams } from 'react-router-dom'

function QR() {
    const [userRole, setUserRole] = useState('')
    const { userId } = useParams()
    const { alert } = useContext(Context)

    useEffect(() => {
        getRole()
    }, [])

    const getRole = () => {
        try {
            const role = logic.getUserRole()
            setUserRole(role)
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    return <View className='ActivityView'>
        {userRole === 'student' && <ShareQR />}
        {userRole === 'teacher' && <AddStudent userId={userId} />}
    </View >
}

export default QR

