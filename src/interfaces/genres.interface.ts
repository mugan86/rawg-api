import { Game } from './games.interface';
export interface GenresResult {
    status: boolean;
    message: string;
    count: number;
    next?: any;
    previous?: any;
    results: Result[];
}
  
interface Result {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
    games: Game[];
    following: boolean;
}
  
  