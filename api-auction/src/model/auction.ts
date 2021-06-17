export type auctionData = {
   title: string
   description: string
   author: string
   initial_value: number
   bid_progression: number
   bid_value: number
   expiration_date: string
}

export type auction = auctionData & { id: string }