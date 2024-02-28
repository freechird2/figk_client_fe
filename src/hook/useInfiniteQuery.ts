import { useInfiniteQuery, UseInfiniteQueryOptions } from 'react-query'

function useGetInfiniteQuery<TQueryKey extends [string, string?], TQueryFnData, TError, TData = TQueryFnData>(
    queryKey: TQueryKey,
    fetcher: (_: any) => Promise<any>,
    options?: Omit<
        UseInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryFnData, TQueryKey>,
        'queryKey' | 'queryFn'
    >
) {
    const { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage, error } = useInfiniteQuery(
        queryKey,
        fetcher,
        {
            ...options,
        }
    )

    return { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage, error }
}

export default useGetInfiniteQuery
