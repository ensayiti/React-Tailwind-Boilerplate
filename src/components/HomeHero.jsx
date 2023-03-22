import React from 'react'
import reactImg from '../assets/react.svg'

const HomeHero = () => {
    return (
        <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <img className="lg:w-32 md:w-32 w-32 mb-10 object-cover object-center rounded" alt="react" src={reactImg} />
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Home</h1>
                    <p className="leading-relaxed mb-4">This boilerplate include React Router, React Icons, & TailwindCSS. No app.css and all styling on index.css</p>
                    <p className='leading-relaxed mb-4 font-bold text-red-400 text-lg'>You need to change navbar and footer to responsive component</p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Button</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeHero