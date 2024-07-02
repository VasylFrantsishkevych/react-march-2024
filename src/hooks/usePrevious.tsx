import {useEffect, useRef} from "react";

 export function usePrevious<T>(value: T): T | undefined {
    const ref = useRef<T>();
     // console.log(value);
     // console.log(ref);
     useEffect(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
}