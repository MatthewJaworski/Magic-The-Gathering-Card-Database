import React from 'react'
import MainSectionLeft from './Left/MainSectionLeft';
import MainSectionRight from './Right/MainSectionRight';
const MainSection = () => {
    return (
        <section className="h-[calc(100vh-52px)]  msm:grid-cols-1 msm:grid-rows-8 grid grid-cols-2 grid-rows-1
         bg-white">
            <MainSectionLeft/>
            <MainSectionRight/>
        </section>
    )
}

export default MainSection
