import React from 'react'

const Projects = () => {

    const items = [
        {
            title:"Param's Anime GIF Portal",
            description:'A Movie Streaming Platform which is built with Latest Tech Stack like NextJS, GraphQL, GraphCMS and it is fully responsive.',
            link: 'https://riddles-mocha.vercel.app',
            github:'https://github.com/kody435/riddles'
        },
        {
            title: "Param's Anime GIF Portal",
            description:'A Movie Streaming Platform which is built with Latest Tech Stack like NextJS, GraphQL, GraphCMS and it is fully responsive.',
            link: 'https://riddles-mocha.vercel.app',
            github:'https://github.com/kody435/riddles'
        }
    ]

  return (
      <div className='bg-black text-white pb-20'>
          <div className='flex items-center flex-col pt-28'>
                <h1 className='text-bold text-6xl'>Projects</h1>
          </div>
          <section className='grid grid-cols-1 lg:grid-cols-2 m-10 space-x-5'>
              {items.map((items) =>(
                  <div className='mt-20 rounded-3xl bg-gray-700 '>
                      <section className="flex flex-col items-center flex-col-2 pr-1 pl-1">
                          <div className='p-6'>
                          <h2 className='text-4xl'>{items.title}</h2>
                          </div>
                          <div>
                              <p className="text-xl font-semibold flex-row text-center pt-10">
                                  {items.description}
                              </p>
                          </div>
                          <div className='flex flex-col md:flex-col lg:flex-row xl:flex-row '>
                              <a href={items.link}>
                              <div className='m-2 my-12 pt-3 pb-3 pl-6 pr-6 rounded-2xl border-2 border-gray-900 hover:border-gray-800 hover:bg-gray-800 flex row '>
                                      <h2 className='pr-1'>Visit WebApp</h2>
                                  <box-icon name='link-external' color="#fff"></box-icon>
                                  </div>
                          </a>
                          <a href={items.github}>
                              <div className='m-2 my-12 pt-3 pb-3 pl-6 pr-6 rounded-2xl border-2 border-gray-900 hover:border-gray-800 hover:bg-gray-800 flex row '>
                                  <h2 className='pr-1'>Check out repo</h2>
                                  <box-icon type='logo' name='github' color='#ffffff'></box-icon>
                              </div>
                          </a>
                  </div>
                      </section>
              </div> 
              ))}         
              
          </section>
          
    </div>
  )
}

export default Projects