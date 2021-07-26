import { EMAIL, PHONE_NUMBER } from '../constants/patterns'
import { ComponentType, FieldConfig } from '../types/form'

export const contactFormConfig: FieldConfig[] = [
    {
        name: 'name',
        label: 'Name',
        Component: ComponentType.Input,
        registerOptions: {
            required: true,
            maxLength: { value: 20, message: 'maximum 20 characters' },
        },
    },
    {
        name: 'email',
        label: 'Email',
        Component: ComponentType.Input,
        registerOptions: {
            required: true,
            pattern: {
                value: EMAIL,
                message: 'invalid email',
            },
        },
    },
    {
        name: 'phone_no',
        label: 'Phone no.',
        Component: ComponentType.Textarea,
        registerOptions: {
            required: true,
        },
    },
]
