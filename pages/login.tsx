import React, { useRef } from 'react'

import { LockClosedIcon } from '@heroicons/react/solid'
import Link from 'next/Link'
import { useForm } from 'react-hook-form'
import Layout from '../app/components/layouts/Page'

interface FormData {
    email: string
    password: string
    remember?: boolean
}


const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ mode: 'onChange' })

    const onSubmit = handleSubmit((data: any) => {
        console.log(data)
    })
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 card shadow-md p-6">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                </div>
                <form className="mt-2 space-y-6" onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="email-address pb-2">
                            Email address
                        </label>
                        <input
                            {...register('email', {
                                required: true, pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Entered value does not match email format"
                                }
                            })}
                            id="email-address"
                            name="email"
                            type="email"
                            className={`appearance-none rounded-none block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm 
                                ${errors.email ? 'border-red-300' : 'border-gray-300'}`}
                            placeholder="Email address"
                        />
                        {errors.email && <span className="text-red-700">Invalid or no email entered</span>}
                    </div>
                    <div>
                        <label htmlFor="password">
                            Password
                        </label>
                        <input
                            {...register('password', { required: true, minLength: 6 })}
                            id="password"
                            name="password"
                            type="password"
                            className={`appearance-none rounded-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm
                                ${errors.password ? 'border-red-300' : 'border-gray-300'}`}
                            placeholder="Password"
                        />
                        {errors.password && <span className="text-red-700">Invalid or no password entered</span>}
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                {...register('remember')}
                                id="remember"
                                name="remember"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                            </span>
                            Sign in
                        </button>
                        <p className="mt-6 text-center text-base font-medium text-gray-500">
                            Don&apos;t have an account?
                            <Link href="/singup" >
                                <a className="text-indigo-600 hover:text-indigo-500">
                                    Sign up
                                </a>
                            </Link>

                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

Login.getLayout = (page: any) => (
    <Layout>{page}</Layout>
)

Login.layout = Layout;

export default Login