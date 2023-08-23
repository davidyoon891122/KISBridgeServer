import { Controller, Get } from "@nestjs/common";
import { MasterService } from "./master.service";


@Controller("master")
export class MasterController {
    constructor(private masterService: MasterService) {}

    @Get("/")
    getMaster(): string {
        return this.masterService.getMaster()
    }

}