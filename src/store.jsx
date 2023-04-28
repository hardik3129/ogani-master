import { createStore } from "redux";
import rootreducer from "./redux/reducer";
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: 'root',
    storage,
}

const PersistedReducer = persistReducer(persistConfig, rootreducer)

const store = createStore(PersistedReducer)
const persistor = persistStore(store)

export { store, persistor }