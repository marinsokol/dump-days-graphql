import axios from 'axios'

import config from '../config'

export default () => {
  const get = async (params) => {
    try {
      const res = await axios({
        url: config.API_URL,
        method: 'get',
        params
      })

      return res.data
    } catch (ex) {
      throw ex
    }
  }

  const post = async (data) => {
    try {
      const res = await axios({
        url: config.API_URL,
        method: 'post',
        data
      })

      return res.data
    } catch (ex) {
      throw ex
    }
  }

  return {
    get,
    post
  }
} 
