import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { layoutReducers } from './slices/layout-slice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { dataReducer } from './slices/data-slice'


const loadState = (): RootState | undefined => {
    try {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  };

  export const saveState = (state: RootState) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch (err) {
      console.error(err);
    }
  };

const persistedState = loadState() as any;

export const store = configureStore({
  reducer: combineReducers({
    layout: layoutReducers,
    data: dataReducer,
  }),
  preloadedState: persistedState,
})


// Subscribe to store changes and save the state to localStorage
store.subscribe(() => {
    saveState(store.getState());
  });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;