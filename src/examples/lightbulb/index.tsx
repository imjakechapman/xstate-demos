import React from 'react'
import { useMachine } from '@xstate/react'

import { LightBulbMachine } from "./machine"

const LightBulb: React.FC<any> = () => {
  const [current, send] = useMachine(LightBulbMachine)
  const isOff = current.matches('off')
  return (
    <div style={{ display: 'flex', flex: '1 1', backgroundColor: isOff ? '#111' : '#efefef', position: 'relative' }}>
      <img style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%) rotate(180deg)' }} className="nonselect" src={isOff ? './images/lightbulb-off.svg' : './images/lightbulb-on.svg'} alt={`lightbulb is ${isOff ? 'off' : 'on'}`} />
      <div style={{ display: 'flex', flex: '1 1', flexDirection: 'row', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'flex-end', alignItems: 'flex-end', justifyContent: 'center' }}>
          <img onClick={() => send('TOGGLE')} className="nonselect" src={isOff ? './images/lightswitch-off.svg' : './images/lightswitch-on.svg'} alt={`lightswitch is turned ${isOff ? 'off' : 'on'}`} />
        </div>
      </div>
    </div>
  )
}

export { LightBulb }