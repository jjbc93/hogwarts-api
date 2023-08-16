import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { HttpConnectionService } from "./http-connection.service";

@Injectable()
export class CharactersApiService {

    constructor(
        private readonly http: HttpConnectionService,
    ) {}

    public async exec(): Promise<any> {
        try {
            const url = "/characters";
            return await this.http.get(url);
        }catch(e) {
            throw new InternalServerErrorException("Api character service not available")
        }
    }

}