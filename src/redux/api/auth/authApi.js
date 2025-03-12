import baseApi from "../baseApi";


const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        singup: build.mutation({
            query: (userData) => ({
                url: `/user/create`,
                method: "POST",
                body: userData,
                credentials: "omit"
            })
        }),

        login: build.mutation({
            query: (credentials) => ({
                url: "/auth/login",
                method: "POST",
                body: credentials,
                credentials: "omit"
            })
        }),

        verifyEmail: build.mutation({
            query: (emailData) => ({
                url: "/user/auth/verify-email",
                method: "POST",
                body: emailData
            })
        }),

        resendVerificationCode: build.mutation({
            query: (resendCodeData) => ({
                url: "/user/auth/email-verification/resend-code",
                method: "POST",
                body: resendCodeData
            })
        }),

        sendForgetOtp: build.mutation({
            query: (email) => ({
                url: `/user/forget-password`,
                method: 'POST',
                body: { email },
            }),
        }),

        verifyForgotOtp: build.mutation({
            query: ({ email, otp }) => ({
                url: "/auth/verify-otp",
                method: "POST",
                body: { email, otp },
            }),
        }),

        resendVerificationCode: build.mutation({
            query: ({ email }) => ({
                url: '/user/auth/email-verification/resend-code',
                method: 'POST',
                body: { email },
            }),
        }),
        changePassword: build.mutation({
            query: (data) => ({
                url: "/auth/admin/change-password",
                method: "POST",
                body: data,
            }),
        }),
    }),
})


export const {
    resendCodeData,
    useLoginMutation,
    useSingupMutation,
    useVerifyEmailMutation,
    useSendForgetOtpMutation,
    useChangePasswordMutation,
    useVerifyForgotOtpMutation,
    useResendVerificationCodeMutation,
} = authApi;
export default authApi;