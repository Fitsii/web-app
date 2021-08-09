import { AxiosInstance } from 'axios'
import { Now } from '../config/time'

export interface TraineeServiceResponse {
    message: string
    status: string
    data: []
}


export const createTraineeService = (instance: AxiosInstance) => {
    return {
        getClasses: async (
            longitude?: number,
            latitude?: number
        ): Promise<TraineeServiceResponse> => {
            const response = await instance.post('/trainee/getClasses', {
                "currentTimeStamp": Now,
                "location": {
                    "longitude": longitude,
                    "latitude": latitude
                }
            })
            return response.data
        },
        getInstructors: async (
            longitude?: number,
            latitude?: number
        ): Promise<TraineeServiceResponse> => {
            const response = await instance.post('/trainee/getTrainers', {
                "currentTimeStamp": Now,
                "location": {
                    "longitude": longitude,
                    "latitude": latitude
                }
            })
            return response.data
        },
        getInstitutes: async (
            longitude?: number,
            latitude?: number
        ): Promise<TraineeServiceResponse> => {
            const response = await instance.post('/trainee/getInstitutes', {
                "currentTimeStamp": Now,
                "location": {
                    "longitude": longitude,
                    "latitude": latitude
                }
            })
            return response.data
        },

        getInstituteDetails: async (
            id: string
        ): Promise<TraineeServiceResponse> => {
            const response = await instance.post('/trainee/getInstituteDetail', {
                "iid": id
            })
            return response.data
        },

        getInstructorDetails: async (
            id: string
        ): Promise<TraineeServiceResponse> => {
            const response = await instance.post('/trainee/getTrainerDetail', {
                "iid": id
            })
            return response.data
        }

    }
}
