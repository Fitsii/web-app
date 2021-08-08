import { AxiosInstance } from 'axios'

export interface AdminServiceResponse {
    message: string
    data: []
}


export const createInstituteService = (instance: AxiosInstance) => {
    return {
        createSession: async (
            id: string,
            user_id?: string
        ): Promise<AdminServiceResponse> => {
            const response = await instance.post('/createClass', {
                id,
                user_id,
            })
            return response.data
        },
    }
}
