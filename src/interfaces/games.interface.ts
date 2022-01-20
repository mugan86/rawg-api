import { GenreItem } from "./genres.interface";
import { TagItem } from "./tags.interface";

export interface GameItem {
    id: number;
    slug: string;
    name: string;
    added: number;
    released: string;
    tba: boolean;
    background_image: string;
    rating: number;
    rating_top: number;
    ratings: Rating[];
    ratings_count: number;
    reviews_text_count: number;
    added_by_status: Addedbystatus;
    metacritic?: number;
    playtime: number;
    suggestions_count: number;
    user_game?: string | undefined;
    reviews_count: number;
    saturated_color: string;
    dominant_color: string;
    platforms: Platform[];
    genres: GenreItem[];
    stores: StoreData[];
    clip: Clip;
    tags: TagItem[];
    short_screenshots: Shortscreenshot[];
}


interface Shortscreenshot {
  id: number;
  image: string;
}

export interface GamesResult {
    status: boolean;
    message: string;
    elementSelect?: string;
    count?: number;
    next?: number;
    previous?: string | undefined;
    page?: number;
    itemsPage?: number;
    totalPages?: number;
    results?: GameItem[];
    game?: GameItem;
  }
  
  interface Clip {
    clip: string;
    clips: Clips;
    video: string;
    preview: string;
  }
  
  interface Clips {
    "320": string;
    "640": string;
    full: string;
  }

  interface StoreData {
    id: number;
    store: Store;
    url_en: string;
    url_ru?: (null | string)[];
  }
  
  interface Store {
    id: number;
    name: string;
    slug: string;
    domain: string;
    games_count: number;
    image_background: string;
  }

  
  interface Platform {
    id: number;
    name: string;
    slug: string;
    image?: string;
    year_end?: string | number | undefined;
    year_start?: string | number | undefined;
    games_count: number;
    image_background: string;
  }
  
  interface Addedbystatus {
    yet: number;
    owned: number;
    beaten: number;
    toplay: number;
    dropped: number;
    playing: number;
  }
  
interface Rating {
  id: number;
  title: string;
  count: number;
  percent: number;
}