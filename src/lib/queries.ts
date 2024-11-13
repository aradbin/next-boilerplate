import { useQuery } from '@tanstack/react-query'
import { getRequest } from './requests'

export const getQuery = (queryKey: string, url: string, params: any = {}, enabled: boolean = true) => {
  return useQuery({
    queryKey: [queryKey, params],
    queryFn: () => getRequest(url, params),
    enabled: enabled,
  })
}
