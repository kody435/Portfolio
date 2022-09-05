import React from 'react'
import profile from './sticker.png'

const Navbar = () => {
  return (
      <div>
          <div className='pt-5 pb-14 flex flex-row'>
              <section className='w-36 ml-10'>
                  <img src={profile} alt='' className=''></img>
              </section>
              <section className='flex flex-row justify-end w-full items-center space-x-10 pr-28 '>
                  <div>
                    <a href='/about'>
                        <h2>About</h2>
                    </a>
                  </div>
                  <div>
                      <a href='https://github.com/kody435' target="_blank" rel="noreferrer">
                        <box-icon type='logo' name='github' animation='tada-hover'></box-icon>
                      </a>
                  </div>
                  <div>
                      <a href='https://twitter.com/Param435_' target="_blank" rel="noreferrer">
                        <box-icon type='logo' name='twitter' animation='tada-hover'></box-icon>
                      </a>
                  </div>
                  <div>
                      <a href='https://telegram.me/Param435' target="_blank" rel="noreferrer">
                        <box-icon type='logo' name='telegram' animation='tada-hover'></box-icon>
                      </a>
                  </div>
                  <div>
                      <a href='https://instagram.com/param435_' target="_blank" rel="noreferrer">
                        <box-icon type='logo' name='instagram' animation='tada-hover'></box-icon>
                      </a>
                  </div>
              </section>
          </div>
    </div>
  )
}

export default Navbar