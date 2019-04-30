__devMode__&& console.log('src/comps/content/render/content')

import React from 'react'
import withState from '../../../hocs/state'
import reducer from '../redux/reducer'
import style from '../style/content.css'

const inst= name=> state=>
(
  state.foo.show&&
  <div className= {`${style.contentPlaceholder} ${style.contentFlexColumn1}`}>
    <div className={`${style.contentFlexRow1}`}>
      {state.foo.children}
    </div>
  </div>
)

export default withState()(inst)(reducer)
