type FnType = (...args: any[]) => unknown
type CacheObject = { [key: string]: any }

export function memoize<T extends FnType>(fn: T) {
    const cacheResult = {} as CacheObject
    return function (...args: Parameters<T>) {
        if (cacheResult.hasOwnProperty(args.join(','))) {
            console.log('Through Cache')
            return cacheResult[args.join(',')]

        } else {
            const result = fn(...args)
            cacheResult[args.join(',')] = result
            return result
        }
    }
}