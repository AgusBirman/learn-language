import errors, { SystemError } from '../../../com/errors'
import validate from '../../../com/validate'

const createVocabulary = (activityId, word, answers) => {
    validate.id(activityId, 'activityId')
    validate.text(word, 'word', 60)

    return fetch(`${import.meta.env.VITE_API_URL}/exercises/vocabulary`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${localStorage.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ activityId, word, answers })
    })
        .catch(() => { throw new SystemError('server error') })
        .then(response => {
            if (response.status === 201)
                return

            return response.json()
                .catch(() => { throw new SystemError('server error') })
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]

                    throw new constructor(message)
                })
        })
}

export default createVocabulary