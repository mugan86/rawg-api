export interface PlatformsResult {
    status: boolean;
    message: string;
    elementSelect?: string;
    count?: number;
    next?: string;
    previous?: string;
    results?: PlatformItem[];
    platform?: PlatformItem
  }
  
export interface PlatformItem {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
    image?: string;
    year_start?: string | number;
    year_end?: string | number;
}