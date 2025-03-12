import baseApi from "../baseApi"; // Make sure this is imported correctly

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    signup: build.mutation({
      query: (userData) => ({
        url: `api/v1/users/register`,
        method: "POST",
        body: userData,
        credentials: "omit", // Assuming this is for CORS or some other reason
      }),
    }),

    // Uncomment and use these when you're ready to implement them
    // login: build.mutation({
    //     query: (credentials) => ({
    //         url: "/auth/login",
    //         method: "POST",
    //         body: credentials,
    //         credentials: "omit",
    //     }),
    // }),

    // verifyEmail: build.mutation({
    //     query: (emailData) => ({
    //         url: "/user/auth/verify-email",
    //         method: "POST",
    //         body: emailData,
    //     }),
    // }),

    // resendVerificationCode: build.mutation({
    //     query: (resendCodeData) => ({
    //         url: "/user/auth/email-verification/resend-code",
    //         method: "POST",
    //         body: resendCodeData,
    //     }),
    // }),

    // sendForgetOtp: build.mutation({
    //     query: (email) => ({
    //         url: `/user/forget-password`,
    //         method: 'POST',
    //         body: { email },
    //     }),
    // }),

    // verifyForgotOtp: build.mutation({
    //     query: ({ email, otp }) => ({
    //         url: "/auth/verify-otp",
    //         method: "POST",
    //         body: { email, otp },
    //     }),
    // }),

    // changePassword: build.mutation({
    //     query: (data) => ({
    //         url: "/auth/admin/change-password",
    //         method: "POST",
    //         body: data,
    //     }),
    // }),
  }),
});

export const {
  useSignupMutation, // Exporting the hook for signup
  useLoginMutation, // Exporting the login mutation hook (commented out for now)
  useVerifyEmailMutation, // Exporting the email verification hook (commented out for now)
  useSendForgetOtpMutation, // Exporting the forgot OTP hook (commented out for now)
  useChangePasswordMutation, // Exporting change password hook (commented out for now)
  useVerifyForgotOtpMutation, // Exporting verify forgot OTP hook (commented out for now)
  useResendVerificationCodeMutation, // Exporting resend verification code hook (commented out for now)
} = authApi;

export default authApi;
