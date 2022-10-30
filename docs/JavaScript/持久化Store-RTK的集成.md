## 引言

因为使用了`react-toolkit`(RTK) 的TS版本作为`React`的状态管理工具,某些状态需要在刷新之后不丢失数据的情况下,就需要进行`持久化`
的保存这些状态,那么就使用到了`redux-persist`这个库

## 使用

1. 安装`redux-persist`
   已经安装了`react-redux`与`@reduxjs/toolkit`的情况: 只需要安装此库即可

```pwsh
pnpm i redux-persist
```

### 配置

1. 设置`redux-persist`配置

```ts
// store/index.ts
import storage from 'redux-persist/lib/storage'

// redux-persist配置+ const persistConfig = {
	key:'root', // 给浏览器的DevTools以及相关插件识别的名称
	storage // 存储方式: 默认localStorage, 可使用serissonStore浏览器会话级别存储
}
```

2. 配置`reducer`

```ts
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from '../features/user' // 导入Reducer

// 根Reducer配置
const rootReducer = combineReducers({
	user: userReducer,
})
```

3. 持久化状态

```ts
// 持久化reducer状态
const persistReducer = persistReducer(persistConfig,rootReducers)

// redux-tookit的配置
export const store = configureStore({
	reducer: persistReducer
})
```

4. 导入使用
   // app主入口文件 一般是index.ts (vite是main.ts, next是_app.ts) 核心代码:

```ts
// _app.ts
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { store } from '@/store'

function App () {
  return (
    <Provider store={ store }>
      <PersistGate persistor={ persistStore(store) }>
        <App/>
      </PersistGate>
    </Provider>
  )
}
```

### 使用

`store` 配置

```ts
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// 用户行为
import userReducer from '@/features/user'

// 配置redux-persist
const persistConfig = {
  key: 'root',
  storage,
}

// Reducer
const rootReducers = combineReducers({
  user: userReducer,
})

// 持久化状态
const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
  reducer: persistedReducer,
})

export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
```

`app`配置:

- react.js

```ts
// index.ts
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

function App () {
  return (
    <Provider store={ store }>
      <PersistGate persistor={ persistStore(store) }>
        <App/>
      </PersistGate>
    </Provider>
  )
}
```

- next.js

```ts
// _app.ts
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

// 持久化的store
import { store } from '@/store'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <Provider store={ store }>
      <PersistGate persistor={ persistStore(store) }>
        <Component { ...pageProps } />
      </PersistGate>
    </Provider>
  )
}

export default MyApp
```