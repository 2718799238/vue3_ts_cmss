import { defineStore } from 'pinia'
import {
  getAmountList,
  getCategoryCount,
  getGoodsAddressSale,
  getGoodsCategoryFavor,
  getGoodsCategorySale,
  getGoodsSaleTop10
} from '@/server/module/main/analysis/dashboard'

export const useDashbardStore = defineStore('dashbard', {
  state: (): any => ({
    amountList: [],
    categoryCount: [],
    goodsAddressSale: [],
    goodsCategoryFavor: [],
    goodsCategorySale: [],
    goodsSaleTop10: []
  }),
  actions: {
    async fetchAction() {
      const amountRes = await getAmountList()
      this.amountList = amountRes.data.data

      const categoryCountRes = await getCategoryCount()
      this.categoryCount = categoryCountRes.data.data

      const goodsAddressSaleRes = await getGoodsAddressSale()
      this.goodsAddressSale = goodsAddressSaleRes.data.data

      const goodsCategoryFavorRes = await getGoodsCategoryFavor()
      this.goodsCategoryFavor = goodsCategoryFavorRes.data.data

      const goodsCategorySale = await getGoodsCategorySale()
      this.goodsCategorySale = goodsCategorySale.data.data

      const goodsSaleTop10Res = await getGoodsSaleTop10()
      this.goodsSaleTop10 = goodsSaleTop10Res.data.data
    }
  }
})
