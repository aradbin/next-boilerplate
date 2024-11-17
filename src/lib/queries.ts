import { useQuery } from '@tanstack/react-query'
import { getRequest } from './requests'
import { EndpointType } from './types'

export const GetQuery = (queryKey: string, url: keyof EndpointType, params: unknown = {}, enabled: boolean = true) => {
  return useQuery({
    queryKey: [queryKey, params],
    queryFn: () => getRequest(url, params),
    enabled: enabled,
  })
}
