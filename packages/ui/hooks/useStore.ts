import { useState, useEffect, Dispatch } from "react";
import { Storage, TStorageEntry } from "../utils";

/**
 * Persist state in localStorage
 *
 * @param {string} key
 * @param {unknown} initialValue
 */
export const useStore = <T extends TStorageEntry>(
    key: string,
    initialValue: T
): [T, Dispatch<T>] => {
    const [value, setValue] = useState(initialValue);

    const updateValue: Dispatch<T | Function> = (payload) => {
        let newValue: T;
        if (typeof payload === "function") {
            newValue = payload(value);
        } else newValue = payload;
        setValue(newValue);
        Storage.setItem(key, newValue);
    };

    useEffect(() => {
        setValue(Storage.getItem(key, initialValue));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [value, updateValue];
};
