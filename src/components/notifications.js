import React from 'react'
import './notifications.css'


function Notifications({pressed}) {
  return (
    <div class="notifications-container" style={{ display: pressed ? 'block' : 'none' }}>
        <div class="fake-notification">
            <p style={{margin:'5px',fontWeight:'bold'}}>Bill 3223 Over Dued, Please make the payments as soon as possible.</p>
        </div>
    </div>
  )
}

export default Notifications