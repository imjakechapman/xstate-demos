import { Machine } from 'xstate'

const LightBulbMachine = Machine({
  id: 'LightBulbMachine',
  initial: 'off',
  states: {
    off: {
      on: {
        TOGGLE: {
          target: 'on'
        }
      }
    },
    on: {
      on: {
        TOGGLE: 'off'
      }
    }
  }
})

export { LightBulbMachine }