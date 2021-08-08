interface Window {
  config: {
    TEST_API_URL: string
    PROD_API_URL: string
    APP_VERSION: string
  }
}

const isDev = process.env.NODE_ENV !== 'production'

export const SERVICE_URL = isDev
  ? process.env.TEST_API_URL
  : process.env.PROD_API_URL

export const APP_VERSION = process.env.APP_VERSION
