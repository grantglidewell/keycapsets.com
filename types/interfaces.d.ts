declare module 'typings' {
    interface Keycapset {
        _id?: string;
        name?: string;
        type?: string;
        material?: string;
        brand?: string;
        designerName?: string;
        groupbuyStartDate?: string;
        groupbuyEndDate?: string;
        active?: boolean;
        coverImageUrl?: string;
        imageUrls?: string[];
        websiteUrl?: string;
        vendors?: Array<Vendor>;
        slug?: string;
        createdAt?: Date;
        updatedAt?: Date;
        accentColor1: string;
        accentColor2: string;
        accentColor3: string;
        isInterestCheck: boolean;
    }

    interface Vendor {
        _id?: string;
        socials?: string[];
        name?: string;
        country?: string;
        logoUrl?: string;
        createdAt?: Date;
        updatedAt?: Date;
        url?: string;
        slug?: string;
    }

    interface Filters {
        [key as string]: String;
        activeTab: string;
        availability: string;
    }

    interface InititalState {
        filters: Filters;
        tabs: string[];
        availability: string[];
        keycapsets: Keycapset[];
        filteredSets: Keycapset[];
        searchQuery: string;
        allKeycapsetsCount: number;
        setGlobalState?: Function;
    }
}
