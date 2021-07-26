import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon, } from '@heroicons/react/outline'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../assets/logo.png'

const links = [
    { name: 'Institute', href: '/institutes' },
    { name: 'Instructor', href: '/instructor' },
    { name: 'Classes', href: '/classes' },
]

const MainNav = () => {
    return (
        <Popover className="relative z-50">
            {({ open }) => (
                <>
                    <div className="mx-auto bg-white">
                        <div className="container px-3 mx-auto flex justify-between items-center py-3 md:justify-start md:space-x-10 p-3">
                            <div className="flex justify-start lg:w-0 lg:flex-1 text-center">
                                <a href="#">
                                    <span className="sr-only">FITSII</span>
                                    <Image
                                        className="h-8 w-auto sm:h-10"
                                        src={Logo}
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="mr-1 -my-2 md:hidden">
                                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Open menu</span>
                                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                            <Popover.Group as="nav" className="hidden md:flex space-x-10">
                                {links.map((link, index) => (
                                    <Link href={link.href} key={index}>
                                        <a className="text-base font-medium text-gray-900 hover:text-primary" key={index}>
                                            {link.name}
                                        </a>
                                    </Link>
                                ))}
                            </Popover.Group>
                            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                <Link href='/login'>
                                    <a
                                        className="bg-white text-gray-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                                    >
                                        login
                                    </a>
                                </Link>
                                <Link href="/signup">
                                    <a
                                        className="ml-2 whitespace-nowrap text-xs items-center justify-center px-4 py-2 border border-transparent rounded shadow-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 hover:text-gray-200"
                                    >
                                        Sign up
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Transition
                        show={open}
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            static
                            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                                <div className="pt-5 pb-6 px-5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <Image
                                                className="h-8 w-auto"
                                                src={Logo}
                                                alt="Workflow"
                                            />
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Close menu</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <nav className="grid gap-y-8">
                                            {links.map((link, index) => (
                                                <Link key={index}
                                                    href={link.href}>
                                                    <a
                                                        className="-m-3 py-2 flex items-center rounded-md hover:bg-gray-50"
                                                    >
                                                        <span className="ml-3 text-base font-medium text-gray-900">{link.name}</span>
                                                    </a>
                                                </Link>
                                            ))}
                                        </nav>
                                    </div>
                                </div>
                                <div className="py-6 px-5 space-y-6">
                                    <div>
                                        <Link
                                            href='/signup'>
                                            <a
                                                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                            >
                                                Sign up
                                            </a>
                                        </Link>
                                        <p className="mt-6 text-center text-base font-medium text-gray-500">
                                            Existing customer?{' '}
                                            <Link href="/login" >
                                                <a className="text-indigo-600 hover:text-indigo-500">
                                                    Sign in
                                                </a>
                                            </Link>

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover >
    )
}

export default MainNav
