import { baseApi } from "../../api/baseApi";

const salesApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
      getAllSalesProduct: builder.query({
        query: (args) => {
            return {
                url: '/sales',
                params:args
            };
        },
        providesTags: ["sales"],
    }),
      getAllSalesQuantityProduct: builder.query({
        query: (args) => {
            return {
                url: '/sales/product',
                params:args
            };
        },
        providesTags: ["sales"],
    }),
      updateProductSales: builder.mutation({
        query: (updateInfo) => {
          return {
            url: `/sales/${updateInfo.id}`,
            method: "PUT",
            body: updateInfo.data,
          };
        },
        invalidatesTags: ["sales"],
      }),
      deleteSalesProduct: builder.mutation({
        query: ({id}) => {
          return {
            url: `/sales/${id}`,    
            method: "DELETE",
          };
        },
        invalidatesTags: ["sales"],
      }),
    }),
  });



export const {useDeleteSalesProductMutation,
              useGetAllSalesProductQuery,
              useUpdateProductSalesMutation,
              useGetAllSalesQuantityProductQuery
            } = salesApi