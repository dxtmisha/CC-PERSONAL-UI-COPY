export default class API {
  static async fetch (
    {
      path = '',
      request = {},
      headers = {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      init = {}
    }
  ) {
    const method = this._isLocalhost() ? 'GET' : 'POST'

    return (await (await fetch(this._getUrl(path, request), {
      ...init,
      method,
      headers,
      body: this._getBody(method, request)
    })).json())?.data
  }

  static _isLocalhost () {
    return location.hostname === 'localhost'
  }

  static _getBody (method, request) {
    let body

    if (method !== 'GET') {
      if (request instanceof FormData) {
        body = request
      } else {
        body = JSON.stringify(request)
      }
    }

    return body
  }

  static _getUrl (path, request = undefined) {
    if (this._isLocalhost()) {
      if (path.match(/command=/)) {
        console.log(`https://ru.dev2.coralorder.su/restApi/${path}`)
        return `/${path.replace(/\?command=/, '')}.json`
      } else {
        console.log(`https://ru.dev2.coralorder.su/restApi/${path}?command=${request?.command}&cid=2804051`)
        return path.match(/\.json$/) ? path : `/${path.replace(/\?command=([\s\S]+)^/, '$1/')}${request?.command || 'index'}.json`
      }
    } else {
      return `/restApi/${path}`
    }
  }
}
