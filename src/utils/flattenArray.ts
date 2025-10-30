type parameterCheck = unknown[]

export function flattenArray<T extends parameterCheck>(arr: T): parameterCheck {
    const newArr = [] as parameterCheck

    function flatten(arr: T) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                flatten(arr[i] as T)
            } else {
                newArr.push(arr[i])
            }
        }
    }
    flatten(arr)

    return newArr;
}