import { Injectable } from "@nestjs/common";

@Injectable()
export class MasterService {
    getMaster(): string {
        return "Master"
    }
}