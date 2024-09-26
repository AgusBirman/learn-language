import mongoose from 'mongoose'
import 'dotenv/config'
import getStudents from './getStudents.js'


const { MONGODB_URL } = process.env

mongoose.connect(MONGODB_URL)
    .then(() => {
        try {
            getStudents('66a94dcb34505782bcd8cfd0')
                .then(students => console.log(students))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
