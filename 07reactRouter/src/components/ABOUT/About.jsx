import React from "react";
import { Outlet } from "react-router";
export default function About() {
    return (
        <>
            <Outlet />
            <div className="bg-white py-16">
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-0-12">
                        <div className="md:w-5/12 lg:w-5/12">
                            <img
                                src="https://images.pexels.com/photos/20413999/pexels-photo-20413999/free-photo-of-gentoo-penguins-in-antarctica.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="image"
                            />
                        </div>
                        <div className="md:w-7/12 lg:w-6/12">
                            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                                Penguins are cool because they live in snow and snow is cool hehe
                            </h2>
                            <p className="mt-6 text-gray-600">
                                True that! ❄️🐧 Penguins chilling in the snow like it's their personal ice palace just makes them 10x cooler. Imagine vibing in sub-zero temperatures, no blankets, no heaters — just fluff, squad goals, and belly slides.
                                They're basically the coolest gang in the coldest place
                            </p>
                            <p className="mt-4 text-gray-600">
                                Imagine it:
                                🐧 Penguins waddling like a synchronized squad.
                                🐱 Cats casually strutting alongside, acting like they own the iceberg.
                                Penguins bring the squad vibes, and cats add the attitude. Together, they'd be the ultimate cool crew — chill, stylish, and impossible to mess with
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}