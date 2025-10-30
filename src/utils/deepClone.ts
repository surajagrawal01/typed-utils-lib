
type LooseObjectRecord = Record<string, any>;
type propertyCheck = unknown[] | string | number | LooseObjectRecord

export function deepClone<T extends propertyCheck>(obj: T): T {
    if (obj === null || typeof (obj) !== 'object') return obj;

    if (Array.isArray(obj)) {
        return obj.map((ele) => deepClone(ele)) as T;
    }

    const clonedObj = {} as LooseObjectRecord

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(obj[key] as propertyCheck)
        }
    }

    return clonedObj as T;
}   