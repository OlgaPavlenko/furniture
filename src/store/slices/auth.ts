import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import HTTPService from 'store/utils/services/httpService';
import { IAuthData, IAuthInitialState } from 'store/utils/interfaces/auth';
import { CLIENT_PATHS } from 'constants/constants';

toast.configure();

export const registration = createAsyncThunk(
  'auth/registration',
  async ({ password, email }: IAuthData): Promise<any> => {
    const data = await HTTPService.post(`${CLIENT_PATHS.register}`, {
      password,
      email,
    });
    return data;
  },
);

// export const login = createAsyncThunk('auth/login', async ({ email, password }: ILoginData) => {
//   return async ({ password, email }: ILoginData): Promise<any> => {
//     const data = await HTTPService.post(`${process.env.REACT_APP_API_URL}/signin`, {
//       password,
//       email,
//     });
//     return data;
//   };
// });

// export const logout = createAsyncThunk('auth/logout', async () => {
//   return logoutUser();
// });

const initialState: IAuthInitialState = {
  userId: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registration.fulfilled, (state, action) => {
        state.userId = action.payload.data.user?.id;
      })
      .addCase(registration.rejected, (state, action) => {
        const { message } = action.error;
        if (message) {
          switch (JSON.parse(message).status) {
            case 100:
              toast('AuthStatuses:100');
              break;
            case 300:
            case 400:
              toast(`${JSON.parse(message).data} - ('AuthStatuses:400')`, {
                autoClose: false,
              });
              break;
            case 500:
              toast('AuthStatuses:500');
              break;
            default:
              return JSON.parse(message).response;
          }
        }
        return null;
      });
    // .addCase(login.fulfilled, (state, action) => {
    //   // state.userId = action.payload;
    // })
    // .addCase(login.rejected, (state, action) => {
    //   const { message } = action.error;
    //   if (message) {
    //     toast(JSON.parse(message).data);
    //   } else {
    //     toast('AuthStatuses:error');
    //   }
    // });
    //   .addCase(logout.fulfilled, (state) => {
    //     state.userId = null;
    //   });
  },
});

export const authReducer = authSlice.reducer;
