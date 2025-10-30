type timerType = ReturnType<typeof setTimeout>

export function debounce<T extends (...args: any[]) => unknown>(fn: T, delay: number) {
    let timer: timerType
    return function (...args: Parameters<T>) {
        if (timer) {
            clearTimeout(timer)
        }

        timer = setTimeout(() => fn(...args), delay)
    }
}
