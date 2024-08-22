import React from 'react'

const Gallery = () => {
  return (
    <div className='gallery-section'>
      <h2>Yayoi Kusama's Works</h2>

      {/* gallery container */}
      <div className='gallery-container'>
    
        <div class="parent">
            <div className="div1">
              <img src="https://publicdelivery.org/wp-content/uploads/2017/08/Yayoi-Kusama-%E2%80%93-Pumpkin-1994-Benesse-Art-Site-Naoshima-Japan-2048x1330.jpg" alt="giant pumpkin" className='gallery-img'/>
            </div>
            
            <div className="div2">
              <img src="https://www.willowbones.com/wp-content/uploads/2015/11/PB060923.jpg" alt="spotty room" className='gallery-img'/>
            </div>

            <div className="div3">
              <img src="https://files.ocula.com/anzax/bf/bf6495af-ed9a-4a5e-b043-90e9f585d86d_2000_1333.jpg" alt="the moving" className='gallery-img'/>
            </div>

            <div className="div4">
              <img src="https://files.ocula.com/anzax/bf/bf6495af-ed9a-4a5e-b043-90e9f585d86d_2000_1333.jpg" alt="the moving moment" className='gallery-img'/>
            </div>

            <div className="div5">
              <img src="https://journal-a.com/wp-content/uploads/2021/05/gb21_yayoi_kusama_presse_16-1536x1024.jpg" alt="flash art" className='gallery-img'/>
            </div>
            
            <div className="div6">
              <img src="https://media.icamiami.org/2019/09/9b064c67-yayoi-kusama-all-the-eternal-love-i-have-for-the-pumpkins-detail-2016.jpg" alt="pumpkins" className='gallery-img'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
