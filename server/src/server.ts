import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

//=============
app.get('/games', async (request, response) => {
    const games = await prisma.game.findMany();

    return response.json(games);
});

//=============
app.post('/ads', (request, response) => {
    return response.status(200).json([]);
});

//=============
app.get('/games/:id/ads', (request, response) => {
    //const gameId = request.params.id;
    
    return response.json([
        { id: 1, name: 'Anúncio 1'},
        { id: 2, name: 'Anúncio 2'},
        { id: 3, name: 'Anúncio 3'},
        { id: 4, name: 'Anúncio 4'},
        { id: 5, name: 'Anúncio 5'},
    ]); 
});

//=============
app.get('/games/:id/discord', (request, response) => {
    //const adId = request.params.id;    

    return response.json([]); 
});

app.listen(3333);





