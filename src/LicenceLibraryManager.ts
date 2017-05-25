import { HelloService } from "./hello-service.interface";

export class HelloComponent {

    constructor(private helloService: HelloService) {}

    public sayHello(): string {
    let window: Window;
        return this.helloService.sayHello();
    }
}
