import styled from 'styled-components'
import { Form, Select } from 'antd'
import { useForm as useReactHookForm } from 'react-hook-form'
import { useEffect } from 'react'
import { ComponentType, FieldConfig } from '../types/form'

const FormItem = styled(Form.Item)`
  width: 50%;
  padding: 0 10px;
`
const useForm = (formConfig: FieldConfig[], formData: any) => {
    const result = useReactHookForm({
        shouldFocusError: true,
        shouldUnregister: true,
    })

    const {
        register,
        formState: { errors },
        setValue,
        trigger,
    } = result

    useEffect(() => {
        formConfig.forEach(({ name }) => {
            if (name && formData) {
                setValue(name, formData[name])
            }
        })
    }, [formData, formConfig, setValue])

    const mapFields = (mapProps = {}) => {
        return formConfig.map(
            ({ name, label, registerOptions, Component, options, ...rest }) => {
                if (name) {
                    const error = errors[name]
                    const registered = register(name, registerOptions)
                    const defaultValue = formData ? formData[name] : undefined
                    const renderComponent = () => {
                        switch (Component) {
                            case ComponentType.SearchDropdown: {
                                return (
                                    <Select
                                        showSearch
                                        placeholder={label}
                                        data-test-id={`${name}`}
                                        defaultValue={defaultValue}
                                        options={options}
                                        onChange={(e) => {
                                            setValue(name, e)
                                            trigger(name)
                                        }}
                                        {...mapProps}
                                        {...rest}
                                    />
                                )
                            }
                            case ComponentType.Input:
                                return (
                                    <input
                                        className="ant-input"
                                        placeholder={label}
                                        data-test-id={`${name}`}
                                        defaultValue={defaultValue}
                                        {...registered}
                                        {...mapProps}
                                        {...rest}
                                    />
                                )
                            default:
                                return null
                        }
                    }
                    return (
                        <FormItem
                            key={name}
                            label={label}
                            validateStatus={error ? 'error' : undefined}
                            help={error ? error.message || error.type : undefined}
                        >
                            {renderComponent()}
                        </FormItem>
                    )
                }
                return null
            }
        )
    }

    return { ...result, mapFields }
}

export default useForm
