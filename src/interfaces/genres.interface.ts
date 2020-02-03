import { GameItem } from "./games.interface";
export interface GenresResult {
    status: boolean;
    message: string;
    count?: number;
    next?: string;
    previous?: string;
    results?: GenreItem[];
    genre?: GenreItem
}
  
export interface GenreItem {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
    games: GameItem[];
    following: boolean;
}
  
  