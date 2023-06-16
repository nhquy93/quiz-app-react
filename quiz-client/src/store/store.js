import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { topicsReducer } from "./features/topicsSlice";
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
import { resultReducer } from "./features/resultSlice";
import { authReducer } from "./features/authSlice";
import { utilsReducer } from "./features/utilSlice";
import { detailReducer } from "./features/detailSlice";

const rootReducer = combineReducers({
  topicsSlice: topicsReducer,
  detailSlice: detailReducer,
  resultSlice: resultReducer,
  authSlice: authReducer,
  utilsSlice: utilsReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["authSlice"],
};

const persistedReducers = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
