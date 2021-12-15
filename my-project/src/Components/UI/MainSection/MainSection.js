import React from 'react'
import "./../../../styles/WelcomePage.css"
import MainSectionLeft from './Left/MainSectionLeft';
import MainSectionRight from './Right/MainSectionRight';
const MainSection = () => {
    return (
        <section className=" mainsection msm:grid-cols-1 msm:grid-rows-8
         bg-white">
            <MainSectionLeft/>
            <MainSectionRight/>
        </section>
    )
}

export default MainSection
