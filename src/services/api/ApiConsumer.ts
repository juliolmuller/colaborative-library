import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { Model } from '@/models'

class ApiConsumer<TModel extends Model> {
  private http: AxiosInstance

  constructor(uri: string) {
    this.http = axios.create({
      baseURL: `${process.env.VUE_APP_API_URL}/${uri}`,
    })
  }

  async get(params?: AxiosRequestConfig['params']) {
    const response = await this.http.get<TModel[]>('/', {
      params: {
        _limit: 100,
        ...params,
      },
    })

    return response.data
  }

  async find(id: Model['id']) {
    const response = await this.http.get<TModel | null>(`/${id}`)

    return response.data
  }

  async create(data: Omit<TModel, 'id'>) {
    const response = await this.http.post<TModel>('/', data)

    return response.data
  }

  async update(id: Model['id'], data: Omit<TModel, 'id'>) {
    const response = await this.http.put<TModel>(`/${id}`, data)

    return response.data
  }

  async destroy(id: Model['id']) {
    const response = await this.http.delete<TModel>(`/${id}`)

    return response.data
  }
}

export default ApiConsumer
