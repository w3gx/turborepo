export type TStorageItem = number | string | boolean;
export type TStorageRecord = Record<string, TStorageItem>;
export type TStorageEntry = TStorageItem | TStorageRecord;

const dummyStorage = {
    setItem(key: string, value: TStorageEntry) {},
    getItem(key: string, defaultValue: unknown) {
        return defaultValue || key;
    },
    clear() {},
};

export const Storage = {
    get store() {
        return typeof window !== "undefined" ? localStorage : dummyStorage;
    },
    getItem(key: string, defaultValue: unknown) {
        return this.store.getItem(key) ?? defaultValue;
    },
    setItem(key: string, value: TStorageEntry) {
        const data = JSON.stringify(value);
        this.store.setItem(key, data);
    },
    clear() {
        this.store.clear();
    },
};
