// import { abp, app } from './api'
import * as pay from './pay-system'
import * as health from './health'
import * as auth from './auth'

// // const api = Object.assign(app, abp)
// const api = Object.assign({ abp }, { app })

export default {
  auth,
  pay,
  health
}
