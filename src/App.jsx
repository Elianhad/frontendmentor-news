import { useEffect, useState } from 'react'
import Attribution from './components/Attribution'
import Header from './components/Header'
import New from './components/New'
import Cards from './components/Cards'
import imgHeroMobil from './assets/images/image-web-3-mobile.jpg'
import imgHeroDesktop from './assets/images/image-web-3-desktop.jpg'

function App () {
  const [widthDevice, setWidthDevice] = useState(window.innerWidth)

  useEffect(() => {
    const onResize = (e) => {
      setWidthDevice(window.innerWidth)
    }
    window.addEventListener('resize', onResize)
    return () => window.addEventListener('resize', onResize)
  }, [])

  return (
    <main className='container'>
      <Header widthDevice={widthDevice} />
      <div className='layout-desktop'>
        <section className='container-hero'>
          <div className='img-hero'>
            <img
              src={widthDevice === 375 ? imgHeroMobil : imgHeroDesktop}
              alt='imagen hero'
            />
          </div>
          <div className='layout-desktop-hero'>
            <h1 className='hero-title'>The Bright Future of Web 3.0?</h1>
            <div className='content-hero'>
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className='btn'>read more</button>
            </div>
          </div>
        </section>
        <New />
      </div>
      <Cards />
      <Attribution />
    </main>
  )
}

export default App
