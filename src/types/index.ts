export type Method = 'get' | 'GET'
| 'delete' | 'Delete'
| 'head' | 'HEAD'
| 'options' | 'OPTION'
export interface AxiosRequestConfig {
    url: string
    method?: string
}