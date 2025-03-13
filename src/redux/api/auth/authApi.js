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

  }),
});

export const {
  useSignupMutation,
  useLoginMutation, 
useGetCategoriesQuery, 
useGetProductsQuery,
useGetProfileQuery,
useGetAllUserQuery,
} = authApi;

export default authApi;
