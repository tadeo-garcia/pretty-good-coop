import React , { useState, useEffect }  from 'react';

export default function Splash() {
  const [desktop, setDesktop] = useState(window.innerWidth > 900)

  const updateScreen = ()=>{
    setDesktop(window.innerWidth>900)
  }
  
  useEffect( () => {
    window.addEventListener('resize', updateScreen)
    return () => window.removeEventListener('resize', updateScreen)
  })

  return (
    <>
      <div className="homepageContent">
          {desktop ? (
          <div className="homepageContent__Desktop">
            <div className="homeSpinner"/>
            <div className="homeSpinner"/>
            <div className="homeSpinner"/>
          </div>
        ):(
          <div className="homepageContent__Mobile">
            <div className="homeSpinner"/>
          </div>
        )}
      </div>
    </>
  )
}
