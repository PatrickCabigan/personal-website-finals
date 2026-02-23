"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const helmet_1 = require("helmet");
let cachedApp;
async function bootstrap() {
    if (!cachedApp) {
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        app.enableCors({
            origin: process.env.FRONTEND_URL || '*',
            credentials: true,
        });
        app.useGlobalPipes(new common_1.ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        }));
        app.use((0, helmet_1.default)());
        app.setGlobalPrefix('api');
        await app.init();
        cachedApp = app;
    }
    return cachedApp;
}
async function handler(req, res) {
    try {
        const app = await bootstrap();
        const server = app.getHttpAdapter().getInstance();
        return server(req, res);
    }
    catch (error) {
        console.error('Serverless error:', error);
        res.status(500).json({ error: error.message });
    }
}
if (!process.env.VERCEL) {
    async function localBootstrap() {
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        app.enableCors();
        app.setGlobalPrefix('api');
        await app.listen(3001);
        console.log('✨ Personal Website API running on http://localhost:3001');
    }
    localBootstrap();
}
//# sourceMappingURL=main.js.map