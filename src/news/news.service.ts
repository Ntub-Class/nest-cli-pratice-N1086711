import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
    
    getAllNews(): string {
        return 'OK';
    }

    getOneNews(id): string {
        return `OK`;
    }

    postNews(): string {
        return 'OK';
    }

    putNews(body, id): string {
        return `OK`;
    }
    
    deleteNews(id): string {
        return `OK`
    }
}
