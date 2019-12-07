import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    
    getAllUser(): string {
        return 'OK';
    }

    getOneUser(id): string {
        return `OK`;
    }

    postUser(): string {
        return 'OK';
    }

    putUser(body, id): string {
        return `OK`;
    }
    
    deleteUser(id): string {
        return `OK`
    }
}
