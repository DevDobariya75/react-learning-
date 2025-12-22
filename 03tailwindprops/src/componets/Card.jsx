import React from 'react'

function Card({username , season="winter"}) {  
    console.log(username);
    
  return (
    <div className="max-w-sm rounded  overflow-hidden shadow-lg">
  <img className="w-full" src="https://imgs.search.brave.com/oRbyufHcpGI1L6EnZr5HYScO2egFOYaxM0M9iqZtEMw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTY5/MDA2NjMxL3Bob3Rv/L2lsbGlzdHJhdGl2/ZS1tb3VudGFpbnMt/YXQtc3Vuc2V0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz12/X0JwRDRHQTlEZ1ly/T0l4NG1yaWdfeHB1/YlhJT181QmNrY2Fw/VWk5V3ZFPQ" alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{username} Watching The Coldest Sunset</div>
    <p className="text-amber-100 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-amber-50 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-amber-50 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{season}</span>
  </div>
  </div>
  )
}

export default Card