import request from '@/utils/request'

export const findAllCatagory = () => {
  return request('/home/category/head', 'get')
}
