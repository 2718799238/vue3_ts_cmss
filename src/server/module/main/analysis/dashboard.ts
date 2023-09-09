import { dongRequest } from '@/server/index'

export function getAmountList() {
  return dongRequest.get({
    url: '/goods/amount/list'
  })
}

export function getCategoryCount() {
  return dongRequest.get({
    url: '/goods/category/count'
  })
}

export function getGoodsCategorySale() {
  return dongRequest.get({
    url: '/goods/category/sale'
  })
}

export function getGoodsCategoryFavor() {
  return dongRequest.get({
    url: '/goods/category/favor'
  })
}

export function getGoodsAddressSale() {
  return dongRequest.get({
    url: '/goods/address/sale'
  })
}

export function getGoodsSaleTop10() {
  return dongRequest.get({
    url: '/goods/sale/top10'
  })
}
