import React from 'react';


export default function About(){

  return(
    <div className="aboutContainer">
      <div className="aboutContainer__content">
        <div className="aboutText">
          <br/>
          <p>
            pgc is not just one style or idea,
          </p>
          <br/>
          <p>
            it is an opportunity to connect, create and give back.
          </p>
          <br/>
          <p className='center'>~~~</p>
          <br/>
          <p>
            pgc no es un solo estilo o idea,
          </p>
          <br/>
          <p>
            es una oportunidad para conectar, crear y retribuir.
          </p>

          <div className="membersList">
            <a href='github.com/tadeo-garcia'
              className="membersList__member">tadeo</a>
            <span>&&</span>
            <a href='http://prettygoodco-op.com'
              className="membersList__member">danny</a>
      
        </div>
          <a 
          href="https://prettygoodcoop.s3-us-west-1.amazonaws.com/assets/fineprint.pdf" 
          className='aboutFineprint' rel="noreferrer" target='_blank'>
            read the fine print
          </a>
        </div>
      </div>
    </div>
  )
}

