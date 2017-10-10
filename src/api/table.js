import fetch from '@/utils/fetch'
export function getTableData (token) {
  return fetch({
    url: '/user/tableData',
    method: 'get',
    params: { token }
  })
}
