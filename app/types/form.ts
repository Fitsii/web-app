import { RegisterOptions } from 'react-hook-form'
import { ReactNode } from 'react'

export interface SelectOption {
    value: any
    label: string
}

export interface FieldConfig {
    name?: string
    label?: string
    registerOptions?: RegisterOptions
    options?: SelectOption[]
    Component: string | ReactNode
}

export enum ComponentType {
    Input = 'Input',
    SearchDropdown = 'SearchDropdown',
    Textarea = 'Textarea'
}
