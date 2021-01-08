import { format } from "date-fns"

export const DateFormatFilters = {
  install(Vue) {
    Vue.filter("formatDate", value => format(value, "d MMM yyyy"))
  }
}
