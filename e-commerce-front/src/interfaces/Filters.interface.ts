export type Category = 'gamer' | 'desktop' | 'sreaming' | 'all';

export interface FiltersInterface {
    search: string;
    priceRange: [number, number];
    category: Category;
}