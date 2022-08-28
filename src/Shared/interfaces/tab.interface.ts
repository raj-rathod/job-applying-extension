export interface Tab {
    id: string | null;
    title: string;
    url?: string
    favIconUrl?: string;
    windowId: number;
    tabIndex: number;
    categoryId?: number;
    isRemoved?: boolean;
    status?: string;
}