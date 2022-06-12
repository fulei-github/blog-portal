/*
 * @Description: mixin全局混入
 * @Date: 2022-05-19 18:29:31
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-12 15:54:14
 */
import { formatLabelByLocalCode } from "@/utils/dictionary"
import { dayFormat } from "@/utils/dayjs"
import { random } from "@/utils/common"

export default {

  methods: {
    formatLabelByLocalCode,
    dayFormat,
    random
  }
}