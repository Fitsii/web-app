import { useCallback } from 'react'
import { api } from '../services/api'

const usePublicRoutes = () => {

    const getNearbyClasses = useCallback(async (longitude?: number, latitude?: number) => {
        const results = await api.trainee.getClasses(longitude, latitude)
        console.log({ results })
        return results
    }, [])

    const getNearbyInstructions = useCallback(async (longitude?: number, latitude?: number) => {
        const results = await api.trainee.getInstructors(longitude, latitude)
        console.log({ results })
        return results
    }, [])

    const getNearbyInstitutes = useCallback(async (longitude?: number, latitude?: number) => {
        const results = await api.trainee.getInstitutes(longitude, latitude)
        console.log({ results })
        return results
    }, [])

    return {
        getNearbyClasses, getNearbyInstructions, getNearbyInstitutes
    }

}

export default usePublicRoutes