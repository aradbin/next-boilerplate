import { useQuery } from '@tanstack/react-query'
import { getRequest } from './requests'

export const GetQuery = (queryKey: string, url: string, params: unknown = {}, enabled: boolean = true) => {
  return useQuery({
    queryKey: [queryKey, params],
    queryFn: () => getRequest(url, params),
    enabled: enabled,
  })
}
