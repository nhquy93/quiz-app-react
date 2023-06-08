import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { topicsReducer } from "./topics/topics-slice";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { answeredReducer } from "./answered/answered-slice";
import { authReducer } from "./auth/auth-slice";

const rootReducer = combineReducers({
  topicsSlice: topicsReducer,
  answeredSlice: answeredReducer,
  authSlice: authReducer
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: [],
};

const persistedReducers = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
    })
});

const persistor = persistStore(store);

export { store, persistor };
