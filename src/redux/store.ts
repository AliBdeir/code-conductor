import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { dataReducer } from './slices/data-slice';
import { layoutReducers } from './slices/layout-slice';
import { StateLoader as StateLoaderClass } from '../tools/persistence';

const stateLoader = new StateLoaderClass('state');

const persistedState = stateLoader.loadState() as any;

export const store = configureStore({
  reducer: combineReducers({
    layout: layoutReducers,
    data: dataReducer,
  }),
  preloadedState: persistedState,
})


// Subscribe to store changes and save the state to localStorage
store.subscribe(() => {
    stateLoader.saveState(store.getState());
  });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;