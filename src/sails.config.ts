import { SailsOptions } from "./sails.options";
const __SAILS_VERSION__ = "1.1.0";

const __OS_PLATFORM__ = "node";

export class SailsConfig implements SailsOptions {
    public url = "ws://localhost:1337";
    public query = `__sails_io_sdk_version=${__SAILS_VERSION__}&__sails_io_sdk_platform=${__OS_PLATFORM__}&__sails_io_sdk_language=javascript`;
    public reconnection = true;
    public autoConnect = true;
    public transports = ["websocket"];
    public useCORSRouteToGetCookie = false;
    public headers = {};
    public timeout = 20000;
    public path = "";
    public prefix = "";
    public initialConnectionHeaders;
    public multiplex;
    public reconnectionAttempts;
    public reconnectionDelay;
    public reconnectionDelayMax;
    public rejectUnauthorized;
    public randomizationFactor;
    public environment;

    public constructor(options: SailsOptions) {
        Object.assign(this, options);
    }
}
