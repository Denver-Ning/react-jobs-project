/// <reference types="vite/client" />

declare interface ImpoertMetaEnv {
  readonly MODE: string
  // readonly VITE_BASE_URL: string
  // readonly VITE_TIME_OUT: number
}
 
declare interface ImpoertMeta {
  readonly env: ImpoertMetaEnv
}
