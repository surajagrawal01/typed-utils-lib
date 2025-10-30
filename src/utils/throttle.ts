type TimerType = ReturnType<typeof setTimeout> | null

//Throttle function -> allow function to run only once every delay ms.
//For the first time it will get execute immediately but got limited to execute for the given delay time (ms) no matter how many we will call the function
//Once the time passed then allowed to execute again -> It will execute only when the time/delay time specified will be passed from the last function execution call
export function throttle<T extends (...args: any[]) => unknown>(fn: T, delay: number) {
    let timer: TimerType

    return function (...args: Parameters<T>) {
        if (!timer) {
            fn(...args)
            timer = setTimeout(() => {
                timer = null
            }, delay)
        }
    }
}