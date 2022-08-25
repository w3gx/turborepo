import { useEffect } from "react";
import { DraftFunction, Updater, useImmer } from "use-immer";
import { Storage, TStorageRecord } from "../utils";

export const useImmerStore = <T extends TStorageRecord>(
    key: string,
    initialValue: T
): [T, Updater<T>] => {
    const [value, update] = useImmer<T>(initialValue);

    const updateDraft = (handler: T | DraftFunction<T>) => {
        update(handler);
    };

    useEffect(() => {
        updateDraft(Storage.getItem(key));
    }, []);

    useEffect(() => {
        Storage.setItem(key, value);
    }, [value]);

    return [value, updateDraft];
};
