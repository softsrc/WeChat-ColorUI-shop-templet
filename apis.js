import regeneratorRuntime from 'libs/regenerator-runtime/runtime-module';
import requestUtil from './utils/request'
import exceptionUtil from './utils/exception'
import Cache from './utils/cache'
const host = 'http://localhost:8085'
// const host = 'http://127.0.0.1:9510/'
const api = {
  page: {
    portal: {
      url: `${host}/home/content`,
      method: 'GET'
    },
    info: {
      url: `${host}/server/page/info`,
      method: 'GET'
    },
  },
  user: {
    login: {
      url: `${host}/server/user/login`,
      method: 'POST'
    },
    register: {
      url: `${host}/server/user/register`,
      method: 'POST'
    },
    logout: {
      url: `${host}/server/user/logout`,
      method: 'GET'
    },
    token: {
      url: `${host}/server/user/token`,
      method: 'POST'
    }
  },
  buy: {
    calculate: {
      url: `${host}/server/buy/calculate`,
      method: 'POST'
    },
    create: {
      url: `${host}/server/buy/create`,
      method: 'POST'
    },
    pay: {
      url: `${host}/server/buy/pay`,
      method: 'POST'
    },
  },
  cart: {
    list: {
      url: `${host}/server/cart/list`,
      method: 'POST'
    },
    add: {
      url: `${host}/server/cart/add`,
      method: 'POST'
    },
    edit: {
      url: `${host}/server/cart/edit`,
      method: 'POST'
    },
    del: {
      url: `${host}/server/cart/del`,
      method: 'POST'
    },
    exist: {
      url: `${host}/server/cart/exist`,
      method: 'GET'
    },
    info: {
      url: `${host}/server/cart/info`,
      method: 'GET'
    },
    check: {
      url: `${host}/server/cart/check`,
      method: 'POST'
    },
    destroy: {
      url: `${host}/server/cart/destroy`,
      method: 'POST'
    },
    totalNum: {
      url: `${host}/server/cart/totalNum`,
      method: 'GET'
    },
  },
  goods: {
    list: {
      url: `${host}/server/goods/list`,
      method: 'POST'
    },
    info: {
      url: `${host}/server/goods/info`,
      method: 'GET'
    },
  },
  goodsCollect: {
    mine: {
      url: `${host}/server/goodscollect/mine`,
      method: 'GET'
    },
    add: {
      url: `${host}/server/goodscollect/add`,
      method: 'POST'
    },
    del: {
      url: `${host}/server/goodscollect/del`,
      method: 'POST'
    },
  },
  address: {
    setDefault: {
      url: `${host}/server/address/setDefault`,
      method: 'POST'
    },
    getDefault: {
      url: `${host}/server/address/default`,
      method: 'GET'
    },
    list: {
      url: `${host}/server/address/list`,
      method: 'GET'
    },
    info: {
      url: `${host}/server/address/info`,
      method: 'GET'
    },
    add: {
      url: `${host}/server/address/add`,
      method: 'POST'
    },
    edit: {
      url: `${host}/server/address/edit`,
      method: 'POST'
    },
    del: {
      url: `${host}/server/address/del`,
      method: 'POST'
    },
    types: {
      url: `${host}/server/address/types`,
      method: 'GET'
    },
  },
  wechat: {
    buildConfig: {
      url: `${host}/server/wechat/buildConfig`,
      method: 'GET'
    },
    code: {
      url: `${host}/server/wechat/code`,
      method: 'GET'
    },
    userinfo: {
      url: `${host}/server/wechat/userinfo`,
      method: 'GET'
    },
  },
  order: {
    stateNum: {
      url: `${host}/server/order/stateNum`,
      method: 'GET'
    },
    list: {
      url: `${host}/server/order/list`,
      method: 'GET'
    },
    detail: {
      url: `${host}/server/order/info`,
      method: 'GET'
    },
    cancel: {
      url: `${host}/server/order/cancel`,
      method: 'POST'
    },
    confirmReceipt: {
      url: `${host}/server/order/confirmReceipt`,
      method: 'POST'
    },
    deliverInfo: {
      url: `${host}/server/order/deliverInfo`,
      method: 'GET'
    },
    logistics: {
      url: `${host}/server/order/logistics`,
      method: 'GET'
    },
    goodsList: {
      url: `${host}/server/order/goodsList`,
      method: 'GET'
    },
    goodsInfo: {
      url: `${host}/server/order/goodsInfo`,
      method: 'GET'
    },
  },
  refund: { //退款
    reasonList: {
      url: `${host}/server/orderrefund/reasonList`,
      method: 'GET'
    },
    apply: {
      url: `${host}/server/orderrefund/apply`,
      method: 'POST'
    },
    list: {
      url: `${host}/server/orderrefund/list`,
      method: 'GET'
    },
    info: {
      url: `${host}/server/orderrefund/info`,
      method: 'GET'
    },
    setTrackingNo: {
      url: `${host}/server/orderrefund/setTrackingNo`,
      method: 'POST'
    },
    revoke: {
      url: `${host}/server/orderrefund/revoke`,
      method: 'POST'
    },
  },
  payment: {
    list: {
      url: `${host}/server/payment/list`,
      method: 'GET'
    },
  },
  shop: {
    info: {
      url: `${host}/server/shop/info`,
      method: 'GET',
      result: {
        info: {
          goods_category_style: 0
        }
      }
    },
  },
  upload: {
    addImage: {
      url: `${host}/server/upload/addImage`,
      method: 'POST'
    }
  },
  host
}
const request = async function (api, options = {}) {
  const body = (typeof options.data !== 'undefined') ? options.data : {}
  const cache = new Cache()
  let headers = (typeof options.header !== 'undefined') ? options.header : {}
  const token = cache.get('user_token')
  if (token !== null && typeof token.access_token !== 'undefined') {
    headers = Object.assign(headers, {
      'Access-Token': token.access_token
    });
  }
  console.log('send request ~~~~~111')
  const result = await requestUtil({
    url: api.url,
    method: api.method,
    type: 'json',
    body: body,
    headers: headers
  })
  console.log('send request ~~~~~22', result)
  if (result.status === 200) {
    if (result.body.code === 0) {
      return result.body
    } else if (api.result) {
      return api.result
    } else {
      throw new exceptionUtil(result.body.msg, result.body.code)
    }
  } else if (api.result) {
    return api.result
  } else {
    // todo log
    console.log(`请求11：${api.url} ${api.url.method}：\n`)
    console.log(result)
    // todo 服务器异判断
    throw new exceptionUtil(result.statusText, result.code)
  }
}
export {
  api,
  request
}
