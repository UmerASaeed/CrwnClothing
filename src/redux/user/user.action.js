import { UserActionTypes } from "./user.types";


export const googleSignInStart = () =>
{
    return{
        type:UserActionTypes.GOOGLE_SIGN_IN_START
    }
}

export const googleSignInSuccess = (user) =>
{
    return{
        type:UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
        payload:user
    }
}

export const googleSignInFailure = (errorMessage) =>
{
    return{
        type:UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
        payload:errorMessage
    }
}

export const emailSignInStart = (emailAndPassword) =>
{
    return{
        type:UserActionTypes.EMAIL_SIGN_IN_START,
        payload:emailAndPassword
    }
}

export const emailSignInSuccess = (user) =>
{
    return{
        type:UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
        payload:user
    }
}

export const emailSignInFailure = (errorMessage) =>
{
    return{
        type:UserActionTypes.EMAIL_SIGN_IN_FAILURE,
        payload:errorMessage
    }
}

export const checkUserSession = () =>
{
    return{
       type:UserActionTypes.CHECK_USER_SESSION 
    }
}

export const signOutStart = () =>
{
    return{
        type:UserActionTypes.SIGN_OUT_START
    }
}

export const signOutSuccess = () =>
{
    return{
        type:UserActionTypes.SIGN_OUT_SUCCESS
    }
}

export const signOutFailed = (error) =>
{
    return{
        type:UserActionTypes.SIGN_OUT_FAIL,
        payload:error
    }
}

export const signUpStart = (UserData) =>
{
    
    return{
        type:UserActionTypes.SIGN_UP_START,
        payload:UserData
    }
}

export const signUpSuccess = (User) =>
{
    return{
        type:UserActionTypes.SIGN_UP_SUCCESS,
        payload:User
    }
}

export const signUpFailed = (error) =>
{
    return{
        type:UserActionTypes.SIGN_UP_FAILED,
        payload:error
    }
}