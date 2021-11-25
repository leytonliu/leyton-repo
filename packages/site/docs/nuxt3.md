# Nuxt 3

 官网地址：https://v3.nuxtjs.org

### 项目初始化

```bash
npx nuxi init nuxt3-app

yarn install

yarn dev -o
```



### 目录结构

```bash
.
├── README.md
├── app.vue
├── assets
├── components
├── composables
├── layouts
├── node_modules
├── nuxt.config.ts
├── package.json
├── pages
├── plugins
├── public
├── server
├── tsconfig.json
└── yarn.lock
```



### 基本使用

#### useAsyncData

```typescript
const {
  data: Ref<DataT>,
  pending: Ref<boolean>,
  refresh: (force?: boolean) => Promise<void>,
  error?: any
} = useAsyncData(
  key: string,
  fn: () => Object,
  options?: { lazy: boolean, server: boolean }
)
```

key: 

#### useLazyAsyncData

####  useFetch

#### useLazyFetch

#### 







