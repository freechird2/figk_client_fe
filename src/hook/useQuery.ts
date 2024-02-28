import { useQuery, UseQueryOptions } from 'react-query'

function useGetQuery<TQueryKey extends [string, string?], TQueryFnData, TError, TData = TQueryFnData>(
    queryKey: TQueryKey,
    fetcher: (_: any) => Promise<any>,
    options?: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn'>
) {
    const { isLoading, data, error, refetch } = useQuery(queryKey, fetcher, {
        ...options,
    })

    return { isLoading, data, error, refetch }
}

export default useGetQuery
