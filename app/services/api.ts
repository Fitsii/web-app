import axios from 'axios'
import { SERVICE_URL } from '../config/env'
import { createInstituteService } from './instituteService'
import { createTraineeService } from './traineeService'

const instance = axios.create({
    baseURL: 'https://us-central1-fitsii-test.cloudfunctions.net/api',
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'cache-control': 'no-cache',
    },
})

instance.interceptors.request.use((requestConfig) => {
    return {
        ...requestConfig,
        headers: {
            ...requestConfig.headers,
        },
    }
})

export const api = {
    institute: createInstituteService(instance),
    trainee: createTraineeService(instance),
}
