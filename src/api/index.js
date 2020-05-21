import { abp, app } from './api'

// const api = Object.assign(app, abp)
const api = Object.assign({ abp }, { app })

export default api

