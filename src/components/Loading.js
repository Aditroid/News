// import React, { Component } from 'react'
// import Radar from './Radar.gif'
// export default class Loading extends Component {
//   render() {
//     return (
//       <div>
//         <div className="text-center">
//             <img className='my-3' src={Radar} alt="Loading" />
//         </div>
//       </div>
//     )
//   }
// }

//Now its function based components

import React from 'react'
import Radar from './Radar.gif'
const Loading = () => {
    return (
      <div>
        <div className="text-center">
            <img className='my-3' src={Radar} alt="Loading" />
        </div>
      </div>
    )
  }

export default Loading;