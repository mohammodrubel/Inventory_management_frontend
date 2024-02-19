import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: (args) => {
        
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item) => {
            params.append(item.name, item.value);
          });
        }
      
        return {
          url: "/product",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["product"],
    }),
    AddNewProductSales: builder.mutation({
      query: (data) => {
        return {
          url: "/sales/sales-product",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["product"],
    }),
 
    AddNewProduct: builder.mutation({
      query: (data) => {
        return {
          url: "/product/create-product",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["product"],
    }),
    updateProduct: builder.mutation({
      query: (updateInfo) => {
        return {
          url: `/product/${updateInfo.id}`,
          method: "PUT",
          body: updateInfo.data,
        };
      },
      invalidatesTags: ["product"],
    }),
    CloneProduct: builder.mutation({
      query: ({data}) => {
        return {
          url: "/product/create-product",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["product"],
    }),
    deleteProduct: builder.mutation({
      query: ({id}) => {
        return {
          url: `/product/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["product"],
    }),
  }),
});

export const { useAddNewProductSalesMutation,useGetAllProductQuery,useDeleteProductMutation,useCloneProductMutation,useUpdateProductMutation ,useAddNewProductMutation } = productApi;
