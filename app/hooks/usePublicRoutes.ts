import { useCallback } from 'react'
import { api } from '../services/api'

const usePublicRoutes = () => {

    const getNearbyClasses = useCallback(async (longitude?: number, latitude?: number) => {
        const results = await api.trainee.getClasses(longitude, latitude)
        return results
    }, [])

    const getNearbyInstructor = useCallback(async (longitude?: number, latitude?: number) => {
        const results = await api.trainee.getInstructors(longitude, latitude)
        return results
    }, [])

    const getNearbyInstitutes = useCallback(async (longitude?: number, latitude?: number) => {
        const results = await api.trainee.getInstitutes(longitude, latitude)
        return results
    }, [])

    const getInstituteDetails = useCallback(async (id: string) => {
        const results = await api.trainee.getInstituteDetails(id)
        return results
    }, [])

    const getInstructorDetails = useCallback(async (id: string) => {
        const results = await api.trainee.getInstructorDetails(id)
        return results
    }, [])

    return {
        getNearbyClasses, getNearbyInstructor, getNearbyInstitutes, getInstituteDetails, getInstructorDetails
    }

}

export default usePublicRoutes