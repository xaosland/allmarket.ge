import { baseApi } from '@/services/baseApi'
import { items } from '@/type/type'

export const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getTable: builder.query<items, void>({
        query: () => `~/api/categoriesapi/get`,
      }),
    }
  },
})

export const { useGetTableQuery } = decksService
