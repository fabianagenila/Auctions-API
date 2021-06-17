import { app } from "./controller/app"
import { getAllAuctions } from "./controller/getAllAuctions";
import { createAuction } from './controller/createAuction'
import { getAuctionById } from "./controller/getAuctionById";
import { createBid } from "./controller/createBid";

app.post('/auction', createAuction);

app.get('/auction/all', getAllAuctions);
app.get('/auction/:id', getAuctionById);

app.put('/auction/bid/:id', createBid);


