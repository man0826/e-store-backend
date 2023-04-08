// import { Prisma, PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// const categoryData: Prisma.CategoryCreateInput[] = [
//   {
//     name: 'JACKETS',
//     slug: 'jackets',
//   },
//   {
//     name: 'SHIRTS',
//     slug: 'shirts',
//   },
//   {
//     name: 'T-SHIRTS',
//     slug: 't-shirts',
//   },
//   {
//     name: 'SWEAT',
//     slug: 'sweat',
//   },
//   {
//     name: 'BOTTOMS',
//     slug: 'bottoms',
//   },
//   {
//     name: 'ACCESSORIES',
//     slug: 'accessories',
//   },
//   {
//     name: 'NEW ARRIVALS',
//     slug: 'new-arrivals',
//   },
//   {
//     name: 'TRENDING',
//     slug: 'trending',
//   },
// ];

// const productData: Prisma.ProductCreateInput[] = [
//   {
//     name: '92 Low-Fi Hi-Tek Nuptse',
//     slug: '92-low-fi-hi-tek-nuptse',
//     description: '',
//     images: [
//       '/images/product/jackets/92 Low-Fi Hi-Tek Nuptse01_f.jpg',
//       '/images/product/jackets/92 Low-Fi Hi-Tek Nuptse02.jpg',
//       '/images/product/jackets/92 Low-Fi Hi-Tek Nuptse03.jpg',
//       '/images/product/jackets/92 Low-Fi Hi-Tek Nuptse01_b.jpg',
//     ],
//     price: 48000,
//     colors: ['YELLOW', 'NAVY', 'BROWN'],
//     sizes: ['S', 'M', 'L'],
//     categories: {
//       connect: [
//         {
//           id: 1,
//         },
//         {
//           id: 7,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: '86 Low-Fi Hi-Tek Mountain Jacket',
//     slug: '86-low-fi-hi-tek-mountain-jacket',
//     description: '',
//     images: [
//       '/images/product/jackets/86 Low-Fi Hi-Tek Mountain Jacket01_f.jpg',
//       '/images/product/jackets/86 Low-Fi Hi-Tek Mountain Jacket02.jpg',
//       '/images/product/jackets/86 Low-Fi Hi-Tek Mountain Jacket03.jpg',
//       '/images/product/jackets/86 Low-Fi Hi-Tek Mountain Jacket01_b.jpg',
//     ],
//     price: 38000,
//     colors: ['NAVY', 'AQUA', 'BROWN'],
//     sizes: ['S', 'M', 'L', 'XL'],
//     categories: {
//       connect: [
//         {
//           id: 1,
//         },
//         {
//           id: 7,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Inner Down Jacket x Taion',
//     slug: 'inner-down-jacket-x-taion',
//     description: '',
//     images: [
//       '/images/product/jackets/Inner Down Jacket x Taion01_f.jpg',
//       '/images/product/jackets/Inner Down Jacket x Taion02.jpg',
//       '/images/product/jackets/Inner Down Jacket x Taion03.jpg',
//       '/images/product/jackets/Inner Down Jacket x Taion01_b.jpg',
//     ],
//     price: 9800,
//     colors: ['BLACK', 'OLIVE', 'BROWN'],
//     sizes: ['S', 'M', 'L', 'XL'],
//     categories: {
//       connect: [
//         {
//           id: 1,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Recycled Light Down Jacket',
//     slug: 'recycled-light-down-jacket',
//     description: '',
//     images: [
//       '/images/product/jackets/Recycled Light Down Jacket01_f.jpg',
//       '/images/product/jackets/Recycled Light Down Jacket02.jpg',
//       '/images/product/jackets/Recycled Light Down Jacket03.jpg',
//       '/images/product/jackets/Recycled Light Down Jacket01_b.jpg',
//     ],
//     price: 29800,
//     colors: ['BLACK', 'GRAY', 'OLIVE'],
//     sizes: ['S', 'M', 'L'],
//     categories: {
//       connect: [
//         {
//           id: 1,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Retro 1994 Himalayan Parka XX KAWS',
//     slug: 'retro-1994-himalayan-parka-xx-kaws',
//     description: '',
//     images: [
//       '/images/product/jackets/Retro 1994 Himalayan Parka XX KAWS01_f.jpg',
//       '/images/product/jackets/Retro 1994 Himalayan Parka XX KAWS02.jpg',
//       '/images/product/jackets/Retro 1994 Himalayan Parka XX KAWS01_b.jpg',
//     ],
//     price: 78000,
//     colors: ['WHITE', 'BLACK'],
//     sizes: ['S', 'M', 'L', 'XL'],
//     categories: {
//       connect: [
//         {
//           id: 1,
//         },
//         {
//           id: 7,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Y2K Reversible Hoodie',
//     slug: 'y2k-reversible-hoodie',
//     description: '',
//     images: [
//       '/images/product/jackets/Y2K Reversible Hoodie01_f.jpg',
//       '/images/product/jackets/Y2K Reversible Hoodie02.jpg',
//       '/images/product/jackets/Y2K Reversible Hoodie03.jpg',
//       '/images/product/jackets/Y2K Reversible Hoodie04.jpg',
//       '/images/product/jackets/Y2K Reversible Hoodie01_b.jpg',
//     ],
//     price: 14800,
//     colors: ['SILVER', 'BLACK', 'PURPLE', 'BLUE'],
//     sizes: ['S', 'M', 'L'],
//     categories: {
//       connect: [
//         {
//           id: 1,
//         },
//         {
//           id: 7,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Plaid Denim Hoodie Jacket',
//     slug: 'plaid-denim-hoodie-jacket',
//     description: '',
//     images: [
//       '/images/product/jackets/Plaid Denim Hoodie Jacket01_f.jpg',
//       '/images/product/jackets/Plaid Denim Hoodie Jacket02.jpg',
//       '/images/product/jackets/Plaid Denim Hoodie Jacket01_b.jpg',
//     ],
//     price: 26800,
//     colors: ['SKYBLUE', 'BLACK'],
//     sizes: ['S', 'M', 'L'],
//     categories: {
//       connect: [
//         {
//           id: 1,
//         },
//         {
//           id: 7,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Vintage Mythic Puffer Jacket',
//     slug: 'vintage-mythic-puffer-jacket',
//     description: '',
//     images: [
//       '/images/product/jackets/Vintage Mythic Puffer Jacket01_f.jpg',
//       '/images/product/jackets/Vintage Mythic Puffer Jacket02.jpg',
//       '/images/product/jackets/Vintage Mythic Puffer Jacket01_b.jpg',
//     ],
//     price: 48000,
//     colors: ['BLACK', 'OLIVE'],
//     sizes: ['S', 'M', 'L'],
//     categories: {
//       connect: [
//         {
//           id: 1,
//         },
//         {
//           id: 7,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Nylon Varsity Jacket',
//     slug: 'nylon-varsity-jacket',
//     description: '',
//     images: [
//       '/images/product/jackets/Nylon Varsity Jacket_f.jpg',
//       '/images/product/jackets/Nylon Varsity Jacket_b.jpg',
//     ],
//     price: 14800,
//     colors: ['GREEN'],
//     sizes: ['S', 'M', 'L'],
//     categories: {
//       connect: [
//         {
//           id: 1,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Wool Varsity Jacket',
//     slug: 'wool-varsity-jacket',
//     description: '',
//     images: [
//       '/images/product/jackets/Wool Varsity Jacket_f.jpg',
//       '/images/product/jackets/Wool Varsity Jacket_b.jpg',
//     ],
//     price: 24800,
//     colors: ['ORANGE'],
//     sizes: ['S', 'M', 'L'],
//     categories: {
//       connect: [
//         {
//           id: 1,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Custom Fit Oxford Shirt',
//     slug: 'custom-fit-oxford-shirt',
//     description: '',
//     images: [
//       '/images/product/shirts/Custom Fit Oxford Shirt01_f.jpg',
//       '/images/product/shirts/Custom Fit Oxford Shirt02.jpg',
//       '/images/product/shirts/Custom Fit Oxford Shirt03.jpg',
//       '/images/product/shirts/Custom Fit Oxford Shirt01_b.jpg',
//     ],
//     price: 18000,
//     colors: ['SKYBLUE', 'SILVER', 'WHITE'],
//     sizes: ['S', 'M', 'L', 'XL'],
//     categories: {
//       connect: [
//         {
//           id: 2,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Classic Shirt',
//     slug: 'classic-shirt',
//     description: '',
//     images: [
//       '/images/product/shirts/Classic Shirt01_f.jpg',
//       '/images/product/shirts/Classic Shirt02.jpg',
//       '/images/product/shirts/Classic Shirt01_b.jpg',
//     ],
//     price: 28800,
//     colors: ['SKYBLUE', 'GRAY'],
//     sizes: ['S', 'M', 'L'],
//     categories: {
//       connect: [
//         {
//           id: 2,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'OD Oxford Stripe Shirt',
//     slug: 'od-oxford-stripe-shirt',
//     description: '',
//     images: [
//       '/images/product/shirts/OD Oxford Stripe Shirt_f.jpg',
//       '/images/product/shirts/OD Oxford Stripe Shirt_b.jpg',
//     ],
//     price: 9800,
//     colors: ['PINK'],
//     sizes: ['S', 'M', 'L'],
//     categories: {
//       connect: [
//         {
//           id: 2,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Valley Twill Flannel Shirt',
//     slug: 'valley-twill-flannel-shirt',
//     description: '',
//     images: [
//       '/images/product/shirts/Valley Twill Flannel Shirt_f.jpg',
//       '/images/product/shirts/Valley Twill Flannel Shirt_b.jpg',
//     ],
//     price: 18000,
//     colors: ['OLIVE'],
//     sizes: ['S', 'M', 'L'],
//     categories: {
//       connect: [
//         {
//           id: 2,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Wool Overshirt',
//     slug: 'wool-overshirt',
//     description: '',
//     images: [
//       '/images/product/shirts/Wool Overshirt01_f.jpg',
//       '/images/product/shirts/Wool Overshirt02.jpg',
//       '/images/product/shirts/Wool Overshirt01_b.jpg',
//     ],
//     price: 14800,
//     colors: ['PURPLE', 'ORANGE'],
//     sizes: ['S', 'M', 'L', 'XL'],
//     categories: {
//       connect: [
//         {
//           id: 2,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Waiter Shirt',
//     slug: 'waiter-shirt',
//     description: '',
//     images: [
//       '/images/product/shirts/Waiter Shirt_f.jpg',
//       '/images/product/shirts/Waiter Shirt_b.jpg',
//     ],
//     price: 7800,
//     colors: ['BLACK'],
//     sizes: ['S', 'M', 'L'],
//     categories: {
//       connect: [
//         {
//           id: 2,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Tundra Shirt',
//     slug: 'tundra-shirt',
//     description: '',
//     images: [
//       '/images/product/shirts/Tundra Shirt_f.jpg',
//       '/images/product/shirts/Tundra Shirt_b.jpg',
//     ],
//     price: 9800,
//     colors: ['BEIGE'],
//     sizes: ['S', 'M', 'L'],
//     categories: {
//       connect: [
//         {
//           id: 2,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'B.D. Big Fade Check',
//     slug: 'bd-big-fadecheck',
//     description: '',
//     images: [
//       '/images/product/shirts/B.D. Big Fade Check_f.jpg',
//       '/images/product/shirts/B.D. Big Fade Check_b.jpg',
//     ],
//     price: 9800,
//     colors: ['PINK'],
//     sizes: ['S', 'M', 'L'],
//     categories: {
//       connect: [
//         {
//           id: 2,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Core Flannel',
//     slug: 'core-flannel',
//     description: '',
//     images: [
//       '/images/product/shirts/Core Flannel_f.jpg',
//       '/images/product/shirts/Core Flannel_b.jpg',
//     ],
//     price: 12800,
//     colors: ['BLACK'],
//     sizes: ['S', 'M', 'L', 'XL'],
//     categories: {
//       connect: [
//         {
//           id: 2,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Crystal Ball Shirt',
//     slug: 'crystal-ball-shirt',
//     description: '',
//     images: [
//       '/images/product/shirts/Crystal Ball Shirt_f.jpg',
//       '/images/product/shirts/Crystal Ball Shirt_b.jpg',
//     ],
//     price: 7900,
//     colors: ['SKYBLUE'],
//     sizes: ['S', 'M', 'L'],
//     categories: {
//       connect: [
//         {
//           id: 2,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Sign Shirt',
//     slug: 'sign-shirt',
//     description: '',
//     images: [
//       '/images/product/shirts/Sign Shirt_f.jpg',
//       '/images/product/shirts/Sign Shirt_b.jpg',
//     ],
//     price: 6800,
//     colors: ['NAVY'],
//     sizes: ['S', 'M', 'L'],
//     categories: {
//       connect: [
//         {
//           id: 2,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'All City Blackletter Long-Sleeve Tee',
//     slug: 'all-city-blackletter-long-sleeve-tee',
//     description: '',
//     images: [
//       '/images/product/t-shirts/All City Blackletter Long-Sleeve Tee01_f.jpg',
//       '/images/product/t-shirts/All City Blackletter Long-Sleeve Tee02.jpg',
//       '/images/product/t-shirts/All City Blackletter Long-Sleeve Tee01_b.jpg',
//     ],
//     price: 8800,
//     colors: ['BLACK', 'GREEN'],
//     sizes: ['S', 'M', 'L', 'XL'],
//     categories: {
//       connect: [
//         {
//           id: 3,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'All City College Tee',
//     slug: 'all-city-college-tee',
//     description: '',
//     images: [
//       '/images/product/t-shirts/All City College Tee01_f.jpg',
//       '/images/product/t-shirts/All City College Tee02.jpg',
//       '/images/product/t-shirts/All City College Tee01_b.jpg',
//     ],
//     price: 7800,
//     colors: ['BLACK', 'GRAY'],
//     sizes: ['S', 'M', 'L', 'XL'],
//     categories: {
//       connect: [
//         {
//           id: 3,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Boke Flower T-shirt',
//     slug: 'boke-flower-t-shirt',
//     description: '',
//     images: [
//       '/images/product/t-shirts/Boke Flower T-shirt01_f.jpg',
//       '/images/product/t-shirts/Boke Flower T-shirt02.jpg',
//       '/images/product/t-shirts/Boke Flower T-shirt03.jpg',
//       '/images/product/t-shirts/Boke Flower T-shirt01_b.jpg',
//     ],
//     price: 8800,
//     colors: ['WHITE', 'NAVY', 'BROWN'],
//     sizes: ['S', 'M', 'L'],
//     categories: {
//       connect: [
//         {
//           id: 3,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Classic Fit Heavyweight Jersey T-Shirt',
//     slug: 'classic fit-heavyweight-jersey-t-shirt',
//     description: '',
//     images: [
//       '/images/product/t-shirts/Classic Fit Heavyweight Jersey T-Shirt01_f.jpg',
//       '/images/product/t-shirts/Classic Fit Heavyweight Jersey T-Shirt02.jpg',
//       '/images/product/t-shirts/Classic Fit Heavyweight Jersey T-Shirt01_b.jpg',
//     ],
//     price: 9800,
//     colors: ['WHITE', 'NAVY'],
//     sizes: ['S', 'M', 'L', 'XL'],
//     categories: {
//       connect: [
//         {
//           id: 3,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Crew Neck T-Shirt',
//     slug: 'crew-neck-t-shirt',
//     description: '',
//     images: [
//       '/images/product/t-shirts/Crew Neck T-Shirt01_f.jpg',
//       '/images/product/t-shirts/Crew Neck T-Shirt02.jpg',
//       '/images/product/t-shirts/Crew Neck T-Shirt01_b.jpg',
//     ],
//     price: 6800,
//     colors: ['WHITE', 'BLACK'],
//     sizes: ['S', 'M', 'L', 'XL'],
//     categories: {
//       connect: [
//         {
//           id: 3,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'EDGERTON TEE',
//     slug: 'edgerton-tee',
//     description: '',
//     images: [
//       '/images/product/t-shirts/EDGERTON TEE01_f.jpg',
//       '/images/product/t-shirts/EDGERTON TEE02.jpg',
//       '/images/product/t-shirts/EDGERTON TEE01_b.jpg',
//     ],
//     price: 10800,
//     colors: ['OLIVE', 'BEIGE'],
//     sizes: ['S', 'M', 'L'],
//     categories: {
//       connect: [
//         {
//           id: 3,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Flight Heritage 85 GFX Long Sleeve Crew',
//     slug: 'flight-heritage-85-gfx-long-sleeve-crew',
//     description: '',
//     images: [
//       '/images/product/t-shirts/Flight Heritage 85 GFX Long Sleeve Crew01_f.jpg',
//       '/images/product/t-shirts/Flight Heritage 85 GFX Long Sleeve Crew02.jpg',
//       '/images/product/t-shirts/Flight Heritage 85 GFX Long Sleeve Crew01_b.jpg',
//     ],
//     price: 8800,
//     colors: ['WHITE', 'BLACK'],
//     sizes: ['S', 'M', 'L', 'XL'],
//     categories: {
//       connect: [
//         {
//           id: 3,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Frame Short Sleeve Tee',
//     slug: 'frame-short-sleeve-tee',
//     description: '',
//     images: [
//       '/images/product/t-shirts/Frame Short Sleeve Tee01_f.jpg',
//       '/images/product/t-shirts/Frame Short Sleeve Tee02.jpg',
//       '/images/product/t-shirts/Frame Short Sleeve Tee03.jpg',
//       '/images/product/t-shirts/Frame Short Sleeve Tee01_b.jpg',
//     ],
//     price: 6700,
//     colors: ['BROWN', 'WHITE', 'GREEN'],
//     sizes: ['S', 'M', 'L', 'XL'],
//     categories: {
//       connect: [
//         {
//           id: 3,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Hero T-Shirt',
//     slug: 'hero-t-shirt',
//     description: '',
//     images: [
//       '/images/product/t-shirts/Hero T-Shirt01_f.jpg',
//       '/images/product/t-shirts/Hero T-Shirt02.jpg',
//       '/images/product/t-shirts/Hero T-Shirt01_b.jpg',
//     ],
//     price: 5500,
//     colors: ['WHITE', 'BLACK'],
//     sizes: ['S', 'M', 'L', 'XL'],
//     categories: {
//       connect: [
//         {
//           id: 3,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'I Have Seen The Future',
//     slug: 'i-have-seen-the-future',
//     description: '',
//     images: [
//       '/images/product/t-shirts/I Have Seen The Future01_f.jpg',
//       '/images/product/t-shirts/I Have Seen The Future02.jpg',
//       '/images/product/t-shirts/I Have Seen The Future01_b.jpg',
//     ],
//     price: 6800,
//     colors: ['BLACK', 'NAVY'],
//     sizes: ['S', 'M', 'L'],
//     categories: {
//       connect: [
//         {
//           id: 3,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'In Memory T-Shirt',
//     slug: 'in-memory-t-shirt',
//     description: '',
//     images: [
//       '/images/product/t-shirts/In Memory T-Shirt01_f.jpg',
//       '/images/product/t-shirts/In Memory T-Shirt02.jpg',
//       '/images/product/t-shirts/In Memory T-Shirt01_b.jpg',
//     ],
//     price: 7800,
//     colors: ['BLACK', 'BROWN'],
//     sizes: ['S', 'M', 'L'],
//     categories: {
//       connect: [
//         {
//           id: 3,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Long Sleeve T-Shirt x Tim Lehi',
//     slug: 'long-sleeve-t-shirt-x-tim-lehi',
//     description: '',
//     images: [
//       '/images/product/t-shirts/Long Sleeve T-Shirt x Tim Lehi01_f.jpg',
//       '/images/product/t-shirts/Long Sleeve T-Shirt x Tim Lehi02.jpg',
//       '/images/product/t-shirts/Long Sleeve T-Shirt x Tim Lehi01_b.jpg',
//     ],
//     price: 8800,
//     colors: ['WHITE', 'BLACK'],
//     sizes: ['S', 'M', 'L'],
//     categories: {
//       connect: [
//         {
//           id: 3,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Made in USA Track Tee',
//     slug: 'made-in-usa-track-tee',
//     description: '',
//     images: [
//       '/images/product/t-shirts/Made in USA Track Tee01_f.jpg',
//       '/images/product/t-shirts/Made in USA Track Tee02.jpg',
//       '/images/product/t-shirts/Made in USA Track Tee01_b.jpg',
//     ],
//     price: 8800,
//     colors: ['BROWN', 'BEIGE'],
//     sizes: ['S', 'M', 'L'],
//     categories: {
//       connect: [
//         {
//           id: 3,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Mock Neck Long Sleeve Tee',
//     slug: 'mock-neck-long-sleeve-tee',
//     description: '',
//     images: [
//       '/images/product/t-shirts/Mock Neck Long Sleeve Tee01_f.jpg',
//       '/images/product/t-shirts/Mock Neck Long Sleeve Tee02.jpg',
//       '/images/product/t-shirts/Mock Neck Long Sleeve Tee01_b.jpg',
//     ],
//     price: 7900,
//     colors: ['BLACK', 'WHITE'],
//     sizes: ['S', 'M', 'L', 'XL'],
//     categories: {
//       connect: [
//         {
//           id: 3,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'X-Ray SS Tee',
//     slug: 'x-ray-ss-tee',
//     description: '',
//     images: [
//       '/images/product/t-shirts/X-Ray SS Tee01_f.jpg',
//       '/images/product/t-shirts/X-Ray SS Tee02.jpg',
//       '/images/product/t-shirts/X-Ray SS Tee01_b.jpg',
//     ],
//     price: 6900,
//     colors: ['ORANGE', 'BLACK'],
//     sizes: ['S', 'M', 'L'],
//     categories: {
//       connect: [
//         {
//           id: 3,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Hoodie',
//     slug: 'hoodie',
//     description: '',
//     images: [
//       '/images/product/sweat/Hoodie01_f.jpg',
//       '/images/product/sweat/Hoodie02.jpg',
//       '/images/product/sweat/Hoodie01_b.jpg',
//     ],
//     price: 12800,
//     colors: ['BEIGE', 'WHITE'],
//     sizes: ['S', 'M', 'L', 'XL'],
//     categories: {
//       connect: [
//         {
//           id: 4,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Howell Hoodie',
//     slug: 'howell-hoodie',
//     description: '',
//     images: [
//       '/images/product/sweat/Howell Hoodie01_f.jpg',
//       '/images/product/sweat/Howell Hoodie02.jpg',
//       '/images/product/sweat/Howell Hoodie01_b.jpg',
//     ],
//     price: 13500,
//     colors: ['AQUA', 'BROWN'],
//     sizes: ['S', 'M', 'L', 'XL'],
//     categories: {
//       connect: [
//         {
//           id: 4,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Ma23 Embroidered Hooded Sweat',
//     slug: 'ma23-embroidered-hooded-sweat',
//     description: '',
//     images: [
//       '/images/product/sweat/Ma23 Embroidered Hooded Sweat01_f.jpg',
//       '/images/product/sweat/Ma23 Embroidered Hooded Sweat02.jpg',
//       '/images/product/sweat/Ma23 Embroidered Hooded Sweat01_b.jpg',
//     ],
//     price: 9800,
//     colors: ['BLACK', 'GRAY'],
//     sizes: ['S', 'M', 'L'],
//     categories: {
//       connect: [
//         {
//           id: 4,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Made in USA Hoodie',
//     slug: 'made-in-usa-hoodie',
//     description: '',
//     images: [
//       '/images/product/sweat/Made in USA Hoodie01_f.jpg',
//       '/images/product/sweat/Made in USA Hoodie02.jpg',
//       '/images/product/sweat/Made in USA Hoodie01_b.jpg',
//     ],
//     price: 18800,
//     colors: ['BROWN', 'GREEN'],
//     sizes: ['S', 'M', 'L'],
//     categories: {
//       connect: [
//         {
//           id: 4,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Mycelium Network Hoodie',
//     slug: 'mycelium-network-hoodie',
//     description: '',
//     images: [
//       '/images/product/sweat/Mycelium Network Hoodie01_f.jpg',
//       '/images/product/sweat/Mycelium Network Hoodie02.jpg',
//       '/images/product/sweat/Mycelium Network Hoodie01_b.jpg',
//     ],
//     price: 1400,
//     colors: ['GRAY', 'BLACK'],
//     sizes: ['S', 'M', 'L', 'XL'],
//     categories: {
//       connect: [
//         {
//           id: 4,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Pullover Hoodie x WTAPS',
//     slug: 'pullover-hoodie-x-wtaps',
//     description: '',
//     images: [
//       '/images/product/sweat/Pullover Hoodie x WTAPS01_f.jpg',
//       '/images/product/sweat/Pullover Hoodie x WTAPS02.jpg',
//       '/images/product/sweat/Pullover Hoodie x WTAPS01_b.jpg',
//     ],
//     price: 19800,
//     colors: ['OLIVE', 'BLACK'],
//     sizes: ['S', 'M', 'L'],
//     categories: {
//       connect: [
//         {
//           id: 4,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Pullover Hoodie',
//     slug: 'pullover-hoodie',
//     description: '',
//     images: [
//       '/images/product/sweat/Pullover Hoodie01_f.jpg',
//       '/images/product/sweat/Pullover Hoodie02.jpg',
//       '/images/product/sweat/Pullover Hoodie01_b.jpg',
//     ],
//     price: 9800,
//     colors: ['PURPLE', 'BLACK'],
//     sizes: ['S', 'M', 'L', 'XL'],
//     categories: {
//       connect: [
//         {
//           id: 4,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Rbm Chenile Hoodie',
//     slug: 'rbm-chenile-hoodie',
//     description: '',
//     images: [
//       '/images/product/sweat/Rbm Chenile Hoodie_f.jpg',
//       '/images/product/sweat/Rbm Chenile Hoodie_b.jpg',
//     ],
//     price: 12000,
//     colors: ['ORANGE'],
//     sizes: ['S', 'M', 'L'],
//     categories: {
//       connect: [
//         {
//           id: 4,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: '551z Straight Crop',
//     slug: '551z-straight-crop',
//     description: '',
//     images: [
//       '/images/product/bottoms/551z Straight Crop01_f.jpg',
//       '/images/product/bottoms/551z Straight Crop02.jpg',
//       '/images/product/bottoms/551z Straight Crop01_b.jpg',
//     ],
//     price: 11900,
//     colors: ['SKYBLUE', 'WHITE'],
//     sizes: ['S', 'M', 'L'],
//     categories: {
//       connect: [
//         {
//           id: 5,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'All City Blackletter Sweat Pants',
//     slug: 'all-city-blackletter-sweat-pants',
//     description: '',
//     images: [
//       '/images/product/bottoms/All City Blackletter Sweat Pants01_f.jpg',
//       '/images/product/bottoms/All City Blackletter Sweat Pants02.jpg',
//       '/images/product/bottoms/All City Blackletter Sweat Pants01_b.jpg',
//     ],
//     price: 12800,
//     colors: ['GREEN', 'BLACK'],
//     sizes: ['S', 'M', 'L'],
//     categories: {
//       connect: [
//         {
//           id: 5,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Corduroy Studio Work Pant',
//     slug: 'corduroy-studio-work-pant',
//     description: '',
//     images: [
//       '/images/product/bottoms/Corduroy Studio Work Pant01_f.jpg',
//       '/images/product/bottoms/Corduroy Studio Work Pant02.jpg',
//       '/images/product/bottoms/Corduroy Studio Work Pant01_b.jpg',
//     ],
//     price: 14800,
//     colors: ['BLACK', 'GREEN'],
//     sizes: ['S', 'M', 'L'],
//     categories: {
//       connect: [
//         {
//           id: 5,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Core Sweatpant',
//     slug: 'core-sweatpant',
//     description: '',
//     images: [
//       '/images/product/bottoms/Core Sweatpant01_f.jpg',
//       '/images/product/bottoms/Core Sweatpant02.jpg',
//       '/images/product/bottoms/Core Sweatpant01_b.jpg',
//     ],
//     price: 14800,
//     colors: ['SKYBLUE', 'BEIGE'],
//     sizes: ['S', 'M', 'L'],
//     categories: {
//       connect: [
//         {
//           id: 5,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Dalmatian Jeans',
//     slug: 'dalmatian-jeans',
//     description: '',
//     images: [
//       '/images/product/bottoms/Dalmatian Jeans01_f.jpg',
//       '/images/product/bottoms/Dalmatian Jeans02.jpg',
//       '/images/product/bottoms/Dalmatian Jeans01_b.jpg',
//     ],
//     price: 12000,
//     colors: ['BROWN', 'GRAY'],
//     sizes: ['S', 'M', 'L', 'XL'],
//     categories: {
//       connect: [
//         {
//           id: 5,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Double Knee Pant',
//     slug: 'double-knee-pant',
//     description: '',
//     images: [
//       '/images/product/bottoms/Double Knee Pant01_f.jpg',
//       '/images/product/bottoms/Double Knee Pant02.jpg',
//       '/images/product/bottoms/Double Knee Pant03.jpg',
//       '/images/product/bottoms/Double Knee Pant01_b.jpg',
//     ],
//     price: 9800,
//     colors: ['BLACK', 'BROWN', 'SKYBLUE'],
//     sizes: ['S', 'M', 'L'],
//     categories: {
//       connect: [
//         {
//           id: 5,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Flight Heritage Woven Pant',
//     slug: 'flight-heritage-woven-pant',
//     description: '',
//     images: [
//       '/images/product/bottoms/Flight Heritage Woven Pant01_f.jpg',
//       '/images/product/bottoms/Flight Heritage Woven Pant02.jpg',
//       '/images/product/bottoms/Flight Heritage Woven Pant01_b.jpg',
//     ],
//     price: 14800,
//     colors: ['BLACK', 'BEIGE'],
//     sizes: ['S', 'M', 'L'],
//     categories: {
//       connect: [
//         {
//           id: 5,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'H.D. Track Pant',
//     slug: 'hd-track-pant',
//     description: '',
//     images: [
//       '/images/product/bottoms/H.D. Track Pant01_f.jpg',
//       '/images/product/bottoms/H.D. Track Pant02.jpg',
//       '/images/product/bottoms/H.D. Track Pant03.jpg',
//       '/images/product/bottoms/H.D. Track Pant01_b.jpg',
//     ],
//     price: 14800,
//     colors: ['ORANGE', 'PINK', 'BROWN'],
//     sizes: ['S', 'M', 'L'],
//     categories: {
//       connect: [
//         {
//           id: 5,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Made in USA Sweatpant',
//     slug: 'made-in-usa-sweatpant',
//     description: '',
//     images: [
//       '/images/product/bottoms/Made in USA Sweatpant01_f.jpg',
//       '/images/product/bottoms/Made in USA Sweatpant02.jpg',
//       '/images/product/bottoms/Made in USA Sweatpant01_b.jpg',
//     ],
//     price: 14400,
//     colors: ['GREEN', 'BROWN'],
//     sizes: ['S', 'M', 'L'],
//     categories: {
//       connect: [
//         {
//           id: 5,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Monday Pant',
//     slug: 'monday-pant',
//     description: '',
//     images: [
//       '/images/product/bottoms/Monday Pant01_f.jpg',
//       '/images/product/bottoms/Monday Pant02.jpg',
//       '/images/product/bottoms/Monday Pant01_b.jpg',
//     ],
//     price: 19900,
//     colors: ['YELLOW', 'GREENYELLOW'],
//     sizes: ['S', 'M', 'L'],
//     categories: {
//       connect: [
//         {
//           id: 5,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Origins 86 Convertible Mountain Pant',
//     slug: 'origins-86-convertible-mountain-pant',
//     description: '',
//     images: [
//       '/images/product/bottoms/Origins 86 Convertible Mountain Pant01_f.jpg',
//       '/images/product/bottoms/Origins 86 Convertible Mountain Pant02.jpg',
//       '/images/product/bottoms/Origins 86 Convertible Mountain Pant01_b.jpg',
//     ],
//     price: 14400,
//     colors: ['NAVY', 'SILVER'],
//     sizes: ['S', 'M', 'L'],
//     categories: {
//       connect: [
//         {
//           id: 5,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Standard',
//     slug: 'standard',
//     description: '',
//     images: [
//       '/images/product/bottoms/Standard01_f.jpg',
//       '/images/product/bottoms/Standard02.jpg',
//       '/images/product/bottoms/Standard01_b.jpg',
//     ],
//     price: 11800,
//     colors: ['SKYBLUE', 'WHITE'],
//     sizes: ['S', 'M', 'L'],
//     categories: {
//       connect: [
//         {
//           id: 5,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'AC Performance Detroit Tigers 5950',
//     slug: 'ac-performance-detroit-tigers-5950',
//     description: '',
//     images: [
//       '/images/product/accessories/AC Performance Detroit Tigers 5950_f.jpg',
//       '/images/product/accessories/AC Performance Detroit Tigers 5950_f.jpg',
//     ],
//     price: 14600,
//     colors: ['BLACK'],
//     sizes: ['FREE'],
//     categories: {
//       connect: [
//         {
//           id: 6,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Acperf Emea Chiwhi Gm 5950 Chicago White Sox',
//     slug: 'acperf-emea-chiwhi-gm-5950-chicago-white-sox',
//     description: '',
//     images: [
//       '/images/product/accessories/Acperf Emea Chiwhi Gm 5950 Chicago White Sox_f.jpg',
//       '/images/product/accessories/Acperf Emea Chiwhi Gm 5950 Chicago White Sox_b.jpg',
//     ],
//     price: 8800,
//     colors: ['BLACK'],
//     sizes: ['FREE'],
//     categories: {
//       connect: [
//         {
//           id: 6,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Coops 59Fifty RC New York Mets',
//     slug: 'coops-59fifty-rc-newyork-mets',
//     description: '',
//     images: [
//       '/images/product/accessories/Coops 59Fifty RC New York Mets_f.jpg',
//       '/images/product/accessories/Coops 59Fifty RC New York Mets_b.jpg',
//     ],
//     price: 8800,
//     colors: ['WHITE'],
//     sizes: ['FREE'],
//     categories: {
//       connect: [
//         {
//           id: 6,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'FR 2L Rain Cap',
//     slug: 'fr-2l-rain-cap',
//     description: '',
//     images: [
//       '/images/product/accessories/FR 2L Rain Cap01_f.jpg',
//       '/images/product/accessories/FR 2L Rain Cap02.jpg',
//       '/images/product/accessories/FR 2L Rain Cap01_b.jpg',
//     ],
//     price: 5800,
//     colors: ['BLACK', 'ORANGE'],
//     sizes: ['FREE'],
//     categories: {
//       connect: [
//         {
//           id: 6,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Boonie Hat',
//     slug: 'boonie-hat',
//     description: '',
//     images: [
//       '/images/product/accessories/Boonie Hat01_f.jpg',
//       '/images/product/accessories/Boonie Hat02.jpg',
//       '/images/product/accessories/Boonie Hat01_b.jpg',
//     ],
//     price: 6800,
//     colors: ['OLIVE', 'BLUE'],
//     sizes: ['FREE'],
//     categories: {
//       connect: [
//         {
//           id: 6,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Denim Bell Bucket',
//     slug: 'denim-bell-bucket',
//     description: '',
//     images: [
//       '/images/product/accessories/Denim Bell Bucket_f.jpg',
//       '/images/product/accessories/Denim Bell Bucket_b.jpg',
//     ],
//     price: 6500,
//     colors: ['SKYBLUE'],
//     sizes: ['FREE'],
//     categories: {
//       connect: [
//         {
//           id: 6,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Furgora Casual',
//     slug: 'furgora-casual',
//     description: '',
//     images: [
//       '/images/product/accessories/Furgora Casual_f.jpg',
//       '/images/product/accessories/Furgora Casual_b.jpg',
//     ],
//     price: 9800,
//     colors: ['BROWN'],
//     sizes: ['FREE'],
//     categories: {
//       connect: [
//         {
//           id: 6,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Liquify Casual',
//     slug: 'liquify-casual',
//     description: '',
//     images: [
//       '/images/product/accessories/Liquify Casual01_f.jpg',
//       '/images/product/accessories/Liquify Casual02.jpg',
//       '/images/product/accessories/Liquify Casual01_b.jpg',
//     ],
//     price: 6200,
//     colors: ['WHITE', 'PINK'],
//     sizes: ['FREE'],
//     categories: {
//       connect: [
//         {
//           id: 6,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Acrylic Watch Hat',
//     slug: 'acrylic-watch-hat',
//     description: '',
//     images: [
//       '/images/product/accessories/Acrylic Watch Hat01_f.jpg',
//       '/images/product/accessories/Acrylic Watch Hat02.jpg',
//       '/images/product/accessories/Acrylic Watch Hat03.jpg',
//       '/images/product/accessories/Acrylic Watch Hat01_b.jpg',
//     ],
//     price: 3200,
//     colors: ['BROWN', 'OLIVE', 'SKYBLUE'],
//     sizes: ['FREE'],
//     categories: {
//       connect: [
//         {
//           id: 6,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Shaker Beanie',
//     slug: 'shaker-beanie',
//     description: '',
//     images: [
//       '/images/product/accessories/Shaker Beanie01_f.jpg',
//       '/images/product/accessories/Shaker Beanie02.jpg',
//       '/images/product/accessories/Shaker Beanie03.jpg',
//       '/images/product/accessories/Shaker Beanie01_b.jpg',
//     ],
//     price: 4100,
//     colors: ['BLACK', 'WHITE', 'OLIVE'],
//     sizes: ['FREE'],
//     categories: {
//       connect: [
//         {
//           id: 6,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'All Weather 4-Wheeler',
//     slug: 'all-weather-4-wheeler',
//     description: '',
//     images: [
//       '/images/product/accessories/All Weather 4-Wheeler01_f.jpg',
//       '/images/product/accessories/All Weather 4-Wheeler02.jpg',
//       '/images/product/accessories/All Weather 4-Wheeler01_b.jpg',
//     ],
//     price: 48000,
//     colors: ['BLACK', 'OLIVE'],
//     sizes: ['FREE'],
//     categories: {
//       connect: [
//         {
//           id: 6,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Base Camp Voyager Dopp Kit',
//     slug: 'base-camp-voyager-dopp-kit',
//     description: '',
//     images: [
//       '/images/product/accessories/Base Camp Voyager Dopp Kit01_f.jpg',
//       '/images/product/accessories/Base Camp Voyager Dopp Kit02.jpg',
//       '/images/product/accessories/Base Camp Voyager Dopp Kit01_b.jpg',
//     ],
//     price: 4500,
//     colors: ['BLACK', 'OLIVE'],
//     sizes: ['FREE'],
//     categories: {
//       connect: [
//         {
//           id: 6,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Grocery Bag',
//     slug: 'grocery-bag',
//     description: '',
//     images: [
//       '/images/product/accessories/Grocery Bag01_f.jpg',
//       '/images/product/accessories/Grocery Bag02.jpg',
//       '/images/product/accessories/Grocery Bag01_b.jpg',
//     ],
//     price: 10800,
//     colors: ['BLACK', 'SKYBLUE'],
//     sizes: ['FREE'],
//     categories: {
//       connect: [
//         {
//           id: 6,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Small Essential Bag',
//     slug: 'small-essential-bag',
//     description: '',
//     images: [
//       '/images/product/accessories/Small Essential Bag01_f.jpg',
//       '/images/product/accessories/Small Essential Bag02.jpg',
//       '/images/product/accessories/Small Essential Bag01_b.jpg',
//     ],
//     price: 5800,
//     colors: ['BLACK', 'BURLYWOOD'],
//     sizes: ['FREE'],
//     categories: {
//       connect: [
//         {
//           id: 6,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Tanker 2Way Helmet Bag',
//     slug: 'tanker-2way-helmet-bag',
//     description: '',
//     images: [
//       '/images/product/accessories/Tanker 2Way Helmet Bag01_f.jpg',
//       '/images/product/accessories/Tanker 2Way Helmet Bag02.jpg',
//       '/images/product/accessories/Tanker 2Way Helmet Bag01_b.jpg',
//     ],
//     price: 28000,
//     colors: ['BLACK', 'OLIVE'],
//     sizes: ['FREE'],
//     categories: {
//       connect: [
//         {
//           id: 6,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Tanker Boston Bag',
//     slug: 'tanker-boston-bag',
//     description: '',
//     images: [
//       '/images/product/accessories/Tanker Boston Bag01_f.jpg',
//       '/images/product/accessories/Tanker Boston Bag02.jpg',
//       '/images/product/accessories/Tanker Boston Bag01_b.jpg',
//     ],
//     price: 22000,
//     colors: ['BLACK', 'OLIVE'],
//     sizes: ['FREE'],
//     categories: {
//       connect: [
//         {
//           id: 6,
//         },
//         {
//           id: 8,
//         },
//       ],
//     },
//   },
// ];

// const doSeedCategories = async () => {
//   const categories = [];
//   for (const category of categoryData) {
//     const createCategories = prisma.category.create({
//       data: category,
//     });
//     categories.push(createCategories);
//   }
//   await prisma.$transaction(categories);
// };

// const doSeedProducts = async () => {
//   const products = [];
//   for (const product of productData) {
//     const createProducts = prisma.product.create({
//       data: product,
//     });
//     products.push(createProducts);
//   }
//   await prisma.$transaction(products);
// };

// const main = async () => {
//   await doSeedCategories();
//   await doSeedProducts();
// };

// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
