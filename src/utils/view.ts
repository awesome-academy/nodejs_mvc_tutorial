import express from 'express';

export function setupViewEngine(app: express.Application) {
    app.set('view engine', 'pug');
    app.set('views', './src/views');
}
