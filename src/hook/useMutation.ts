import { useMutation, UseMutationOptions } from 'react-query'

/**
 * options 내에 onSuccess 가 포함되어 있기 때문에 successCallback 유동적으로 사용
 */
function useTMutation<TQueryKey extends [string, string], TQueryFnData, TError, TData = TQueryFnData>(
    queryKey: TQueryKey,
    fetcher: (_: TData) => Promise<any>,
    successCallback: () => void,
    options?: Omit<UseMutationOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn'>
) {
    const { mutate, isLoading, data, error } = useMutation(queryKey, fetcher, {
        ...options,
        onSuccess: successCallback,
    })

    return { mutate, isLoading, data, error }
}

export default useTMutation
