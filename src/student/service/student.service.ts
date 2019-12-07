import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
    
    getAllStudent(): string {
        return 'OK';
    }

    getOneStudent(id): string {
        return `OK`;
    }

    postStudent(): string {
        return 'OK';
    }

    putStudent(body, id): string {
        return `OK`;
    }
    
    deleteStudent(id): string {
        return `OK`
    }
}
