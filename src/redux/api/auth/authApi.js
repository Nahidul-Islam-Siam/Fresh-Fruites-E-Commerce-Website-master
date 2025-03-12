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

    getCategories: build.query({
      query: () => ({
        url: "api/v1/category",  
        method: "GET",
      }),
    }),



  }),
});

export const {
  useSignupMutation,
  useLoginMutation, 
useGetCategoriesQuery, 
} = authApi;

export default authApi;
