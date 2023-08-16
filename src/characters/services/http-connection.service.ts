import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CharactersService } from '../characters.service';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';

@Injectable()
export class HttpConnectionService {
    private readonly logger = new Logger(CharactersService.name);
    constructor(
        private readonly http: HttpService,
        private readonly configService: ConfigService
    ){}

    async get(url: string): Promise<any> {
        const baseUrl = this.configService.get('API_ENDPOINT');
        const endpoint = `${baseUrl}${url}`
        let headers = { 'Content-Type': 'application/json' };
        const {data} = await firstValueFrom(
            this.http.get(endpoint, {headers}).pipe(
                catchError((error: AxiosError) => {
                    this.logger.error(`Invalid Response ${error.code}`);
                    throw new InternalServerErrorException();
                })
            )

        )
        return data
    }
}
