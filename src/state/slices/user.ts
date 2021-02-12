import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { firebase, googleAuthProvider } from '../../firebase/firebase';

export const login = createAsyncThunk('user/login', async () => {
  await firebase.auth().signInWithRedirect(googleAuthProvider);
});

export const logout = createAsyncThunk('user/login', async () => {
  await firebase.auth().signOut();
});

type User = {
  uid: string;
  name: string;
  email: string;
  photoUrl: string;
};

const initialState: User = { uid: '', name: '', email: '', photoUrl: '' };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // called from app.tsx where onAuthStateChanged can provide uid
    setUserDetails: (state, action: PayloadAction<User>) => {
      // set all state properties
      return action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(logout.pending, () => {
      return initialState;
    });
  },
});

export const { setUserDetails } = userSlice.actions;
export default userSlice.reducer;
