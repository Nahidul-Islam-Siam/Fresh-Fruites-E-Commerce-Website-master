import baseApi from "../baseApi";


const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    signup: build.mutation({
      query: (userData) => ({
        url: `api/v1/users/register`,
        method: "POST",
        body: userData,
        credentials: "omit",
      }),
    }),

    login: build.mutation({
        query: (credentials) => ({
            url: "api/v1/auth/login",
            method: "POST",
            body: credentials,
            credentials: "omit",
        }),
    }),

    getProfile: build.query({
      query: (token) => ({
        url: "api/v1/auth/profile",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      }),
    }),

    getCategories: build.query({
      query: () => ({
        url: "api/v1/category",  
        method: "GET",
      }),
    }),

    getProducts: build.query({
      query: () => ({
        url: "api/v1/products",  
        method: "GET",
      }),
    }),

    getAllUser: build.query({
      query: () => ({
        url: "api/v1/users",  
        method: "GET",
      }),
    }),

    deleteProduct: build.mutation({
      query: (id) => ({
        url: `api/v1/products/${id}`, 
        method: "DELETE",  
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
      invalidatesTags: [{ type: 'Products', id: 'LIST' }],
    }),

    deleteCategory: build.mutation({
      query: (id) => ({
        url: `api/v1/category/${id}`, 
        method: "DELETE",  
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, 
        },
      }),
      invalidatesTags: [{ type: 'Categories', id: 'LIST' }],
    }),

    addProduct: build.mutation({
      query: (productData) => ({
        url: "api/v1/products",
        method: "POST",
        body: productData,
        headers: {
          "Content-Type": "application/json",
          
        },
        credentials: true, 
      }),
    }),


    getProductById: build.query({
      query: (id) => ({
        url: `api/v1/products/${id}`,
        method: "GET",
      }),
    }),

    

  }),
});

export const {
  useSignupMutation,
  useLoginMutation, 
useGetCategoriesQuery, 
useGetProductsQuery,
useGetProfileQuery,
useGetAllUserQuery,
useDeleteProductMutation,
useDeleteCategoryMutation,
useAddProductMutation,
useGetProductByIdQuery,
} = authApi;

export default authApi;
