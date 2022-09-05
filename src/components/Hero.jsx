import React from 'react'

const Hero = () => {
  return (
      <div>
          <div>
              <section className="flex items-center flex-col p-5 pt-8">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-black pb-6">Hey There! 👋</h1>
                  <p className="text-3xl font-semibold text-center">
                      Welcome to Param's Digital home 🏡
                  </p>
              </section>
              <section className="flex items-center flex-col mx-10 md:mx-32 lg:mx-64 pt-12">
                  <p className="text-xl  lg:text-3xl font-semibold flex-row text-center">
                      Param is a Frontend Engineer currently building{" "}
                      <a href="https://snarkyidiot.live/" target="_blank" rel="noreferrer" className=' font-black'><abbr title="Click to visit"><bold>OCTULUS</bold></abbr></a>
                      . He loves creating awesome stuff and writing things he learns along
                      the way, usually about JavaScript, React, and Python.
                  </p>
                  <div className='pt-10 lg:pt-16'>
                        <box-icon type='solid' name='chevron-down' size="lg" animation="fade-down"></box-icon>
                  </div>
              </section>
          </div>
    </div>
  )
}

export default Hero