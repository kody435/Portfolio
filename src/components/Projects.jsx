import React from 'react'

const Projects = () => {
  return (
      <div>
          <div className='flex items-center flex-col pt-28'>
                <h1 className='text-bold text-6xl'>Projects</h1>
          </div>
          <section className='flex flex-col items-center mb-52 space-x-0 md:space-x-0 lg:space-x-20 xl:space-x-20 2xl:space-x-20  pl-5 pr-5  md:flex-col lg:flex-row xl:flex-row 2xl:flex-row '>
                  <div className='hover:border-2 hover:border-gray-300 mt-20 rounded-3xl ring-1 hover:shadow-xl hover:scale-105 hover:delay-50  '>
                      <section className="flex flex-col items-center flex-col-2 pr-1 pl-1">
                          <div>
                              <img src="https://raw.githubusercontent.com/kody435/Portfolio/main/Web%20Logo-No.png" alt="OCTULUS" className='w-52 h-52'></img>
                          </div>

                          <div>
                              <h2 className='text-4xl text-black'>Octulus</h2>
                          </div>

                          <div>
                              <p className="text-xl font-semibold flex-row text-center pt-10">
                                  A Movie Streaming Platform which is built with Latest Tech Stack like NextJS, GraphQL, GraphCMS and it is fully responsive.
                              </p>
                          </div>

                          <div className='flex flex-col md:flex-col lg:flex-row xl:flex-row '>
                              <a href='https://www.snarkyidiot.live'>
                              <div className='m-2 my-12 pt-3 pb-3 pl-6 pr-6 rounded-2xl border-2 border-gray-900 hover:bg-gray-200 flex row '>
                                      <h2 className='pr-1'>Check out</h2>
                                    <box-icon name='link-external'></box-icon>
                                  </div>
                          </a>
                          <a href='https://github.com/kody435/movie-app'>
                              <div className='m-2 my-12 pt-3 pb-3 pl-6 pr-6 rounded-2xl border-2 border-gray-900 hover:bg-gray-200 flex row '>
                                  <h2 className='pr-1'>Check out</h2>
                                  <box-icon name='github' type="logo"></box-icon>
                              </div>
                          </a>
                          </div>
                      </section>
              </div>

              <div className='hover:border-2 hover:border-gray-300 mt-20 rounded-3xl ring-1 hover:shadow-xl hover:scale-105 hover:delay-50  '>
                  <section className="flex flex-col items-center flex-col-2 pr-1 pl-1">
                      <div>
                          <img src="https://raw.githubusercontent.com/kody435/Portfolio/main/Web%20Logo-No.png" alt="OCTULUS" className='w-52 h-52'></img>
                      </div>

                      <div>
                          <h2 className='text-4xl text-black'>Hulu Clone 2.0</h2>
                      </div>

                      <div>
                          <p className="text-xl font-semibold flex-row text-center pt-10">
                              A Movie Streaming Platform which is built with Latest Tech Stack like NextJS, GraphQL, GraphCMS and it is fully responsive.
                          </p>
                      </div>

                      <div className='flex flex-col md:flex-col lg:flex-row xl:flex-row '>
                          <a href='https://www.snarkyidiot.live'>
                              <div className='m-2 my-12 pt-3 pb-3 pl-6 pr-6 rounded-2xl border-2 border-gray-900 hover:bg-gray-200 flex row '>
                                  <h2 className='pr-1'>Check out</h2>
                                  <box-icon name='link-external'></box-icon>
                              </div>
                          </a>
                          <a href='https://github.com/kody435/movie-app'>
                              <div className='m-2 my-12 pt-3 pb-3 pl-6 pr-6 rounded-2xl border-2 border-gray-900 hover:bg-gray-200 flex row '>
                                  <h2 className='pr-1'>Check out</h2>
                                  <box-icon name='github' type="logo"></box-icon>
                              </div>
                          </a>
                      </div>
                  </section>
              </div>
              
          </section>
          
    </div>
  )
}

export default Projects