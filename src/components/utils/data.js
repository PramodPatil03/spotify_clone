// import singer1 from './Images/Artists/singer1.png'
// import singer2 from './Images/Artists/singer2.png'
// import singer3 from './Images/Artists/singer3.png'
// import singer4 from './Images/Artists/singer4.png'
// import singer5 from './Images/Artists/singer5.png'
// import singer6 from './Images/Artists/singer6.png'

// import song1 from './Images/Albums/card1img.jpeg'
// import song2 from './Images/Albums/card2img.png'
// import song3 from './Images/Albums/card3img.png'
// import song4 from './Images/Albums/card4img.png'
// import song5 from './Images/Albums/card5img.jpeg'
// import song6 from './Images/Albums/card6img.jpeg'

// import radio1 from './Images/Radios/img1.png'
// import radio2 from './Images/Radios/img2.png'
// import radio3 from './Images/Radios/img3.png'
// import radio4 from './Images/Radios/img4.png'
// import radio5 from './Images/Radios/img5.png'
// import radio6 from './Images/Radios/img6.png'

const artists = [
    {
        id: 1,
        name: 'Pritam',
        image: 'https://lh3.googleusercontent.com/sjGMYJQ1J3FZEIBsMYUztMjjYOM4-NJ24CjmIHqxTWCxAM1YgjL-d_17u7_PRhTouOwwAjbu-2x5S6I=w544-h544-p-l90-rj',
        genre: 'Singer, Composer',
        listeners: '40,555,869'
    },
    {
        id: 2,
        name: 'Arijit Singh',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEaO9oNwP0hT6rCxrP1_xtB2Q_ORBTsB3cmw&s',
        genre: 'Artist',
        listeners: '40,555,869'
    },
    {
        id: 3,
        name: 'Kailash Kher',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHauWMdoN0Q7G8tHDH8aAOxGEncFjYKEjIgA&s',
        genre: 'Artist',
        listeners: 80000
    },
    {
        id: 4,
        name: 'Anu Malik',
        image: 'https://content.jdmagicbox.com/v2/comp/mumbai/79/022p840179/catalogue/anu-malik-santacruz-west-mumbai-music-directors-0cquapyskc.jpg',
        genre: 'Artist',
        listeners: 80000
    },
    {
        id: 5,
        name: 'Arman Malik',
        image: 'https://yt3.googleusercontent.com/Y3Xd5a92Olf_5x5igDk8MzzqyKChkP3jKoV6-Iux8e7zChGDMSsrLIt95T8GZd--0FTqQE9KfQ=s900-c-k-c0x00ffffff-no-rj',
        genre: 'Artist',
        listeners: 80000
    },
    {
        id: 6,
        name: 'A R Rahman',
        image: 'https://scontent.fblr11-1.fna.fbcdn.net/v/t1.6435-9/138807996_253535449471644_618407793471233850_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=flma4aHDBwAQ7kNvgGsVbEW&_nc_ht=scontent.fblr11-1.fna&oh=00_AYD8yef14LXuBY1H1pWvfusoleO-hA64OhGs8ZgRnjXv4Q&oe=66D5F8CC',
        genre: 'Artist',
        listeners: 80000
    },
    {
        id: 7,
        name: 'Shreya Ghoshal',
        image: 'https://i.guim.co.uk/img/media/3f29827729071dd891107ba9bb07d9c756d5b5a6/0_2_2400_1440/master/2400.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=8c23e2fc0a1be1ed5753f0e27da9247c',
        genre: 'Artist',
        listeners: 80000
    },
    {
        id: 8,
        name: 'Sonu Nigam',
        image: 'https://i.scdn.co/image/ab6761610000e5ebbc959d7569618ec2af2210f5',
        genre: 'Artist',
        listeners: 80000
    }
]
const albums = [
    { id: 1, name: "Top 50", region: "Global", image: 'https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg' },
    { id: 2, name: "Viral 50", region: "India", image: 'https://charts-images.scdn.co/assets/locale_en/viral/daily/region_in_default.jpg' },
    { id: 3, name: "Top 50", region: "India", image: 'https://charts-images.scdn.co/assets/locale_en/regional/daily/region_in_default.jpg' },
    { id: 4, name: "Top 50", region: "USA", image: 'https://charts-images.scdn.co/assets/locale_en/regional/daily/region_us_default.jpg' },
    { id: 5, name: "Top 50", region: "Brazil", image: 'https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg' },
    { id: 6, name: "Top 50", region: "Mexico", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6XEH6md4J0jUkrIacD9FJ6rDtvO1qgiBcHUKVM-DdvTdU6BvWzaIGBBa8wKZVYRnCABo&usqp=CAU' },
    { id: 7, name: "Top 50", region: "Singapore", image: 'https://charts-images.scdn.co/assets/locale_en/regional/daily/region_sg_default.jpg' },
    { id: 8, name: "Top 50", region: "Canada", image: 'https://charts-images.scdn.co/assets/locale_en/regional/daily/region_ca_default.jpg' },
]
const radios = [
    { id: 1, name: 'A R Rahman', desc: 'With Shankar Mahadevan, Anirudh Ravichandran', image: 'https://seeded-session-images.scdn.co/v2/img/540/r/artist/1mYsTxnqsietFxj1OgoGbG/de' },
    { id: 2, name: 'Udit Narayan', desc: 'With Kumar Sanu, Alka Yagnik', image: 'https://seeded-session-images.scdn.co/v2/img/540/r/artist/70B80Lwx2sxti0M1Ng9e8K/en' },
    { id: 3, name: 'K K', desc: 'With Mohit Chauhan, Ankit Tiwari', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1140PO2YRFOQc_eXBQ3ipz7ARiqLiCyCigA&s' },
    { id: 4, name: 'Diljit Dosanjh', desc: 'With Garry Sandhu, Ranjit Bawa', image: 'https://seeded-session-images.scdn.co/v2/img/540/r/artist/2FKWNmZWDBZR4dE5KX4plR/en' },
    { id: 5, name: 'Arijit Singh', desc: 'With Neha Kakkar, Pritam chakraborty', image: 'https://seeded-session-images.scdn.co/v2/img/540/r/artist/4YRxDV8wJFPHPTeXepOstw/de' },
    { id: 6, name: 'Shreya Ghoshal', desc: 'With Sonu Nigam,Sunidhi Chauhan', image: 'https://seeded-session-images.scdn.co/v2/img/540/r/artist/0oOet2f43PA68X5RxKobEy/de' },
    { id: 7, name: 'Atif Aslam', desc: 'With Ali zafar, Nusrat Fateh Ali Khan', image: 'https://seeded-session-images.scdn.co/v2/img/540/r/artist/2oSONSC9zQ4UonDKnLqksx/en-GB' },
    { id: 8, name: 'Kumar Sanu', desc: 'With Udit Narayan, Alka Yagnik', image: 'https://seeded-session-images.scdn.co/v2/img/540/r/artist/4K6blSRoklNdpw4mzLxwfn/en' },
]

const music = [
    [
        {
            music_id: 1,
            song_name: 'Channa Mereya (From "Ae Dil Hai Mushkil")',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273ff1cda069aac9352c258f8d1',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 2,
            song_name: 'Aabad Barbar (From "Ludo")',
            song_banner: 'https://i.scdn.co/image/ab67616d00001e02f338d36ff740be4cdc5ec709',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 3,
            song_name: 'Shaayad (From "Love Aaj Kal")',
            song_banner: 'https://i.scdn.co/image/ab67616d00001e02c51066dc572e8942e5ef1f44',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 4,
            song_name: 'Raabta-Title tract',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b2732e44757f6ea4eb34d2a0d42f',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 5,
            song_name: 'Ik Vaari Aa (From "Raabta")',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273ece89c7bf7d8141a1e8eef42',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 6,
            song_name: 'Itni si Baat Hai (From "Azhar")',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273ac47a8ab83d832318df5a9fc',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 7,
            song_name: 'Gerua (From "Dilwale")',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b27370c85ecf066ee9c721b06e3c',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 8,
            song_name: 'Kabira (From "Yeh Jawani Hai Deewani")',
            song_banner: 'https://i.scdn.co/image/ab67616d00001e02b0e498453d639aa49322c24a',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 9,
            song_name: 'Tum Se Hi (From "Jab We Met")',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b27352fe6875028c892308ffc2f7',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 10,
            song_name: 'Tum Se Hi (From "Jab We Met")',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b27352fe6875028c892308ffc2f7',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 11,
            song_name: 'Tum Se Hi (From "Jab We Met")',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b27352fe6875028c892308ffc2f7',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 12,
            song_name: 'Tum Se Hi (From "Jab We Met")',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b27352fe6875028c892308ffc2f7',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 13,
            song_name: 'Tum Se Hi (From "Jab We Met")',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b27352fe6875028c892308ffc2f7',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 14,
            song_name: 'Tum Se Hi (From "Jab We Met")',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b27352fe6875028c892308ffc2f7',
            weekly_plays: '126,599,989',
            time: '4:06'
        }

    ],
    [
        {
            music_id: 1,
            song_name: 'Ve kamleya',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b27339890c916878b32aebd1d0ee',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 2,
            song_name: 'Sajni (From "Laapata Ladies")',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273d5f4378b1ffc9119fdc7306d',
            weekly_plays: '764,803,132',
            time: '4:46'
        },
        {
            music_id: 3,
            song_name: 'O Mahi',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b2737506d87e6489c5a93c042523',
            weekly_plays: '156,367,556',
            time: '3:53'
        },
        {
            music_id: 4,
            song_name: 'Apna Bana Le',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273a0f38823e6bdb40b4f3555bd',
            weekly_plays: '284,654,254',
            time: '3:53'
        },
        {
            music_id: 5,
            song_name: 'Tum Kya Mile',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b2735f8a6f2a27d5d75abc41501a',
            weekly_plays: '182,568,246',
            time: '4:37'
        },
        {
            music_id: 6,
            song_name: 'Hawayein - Jab Harry met Sejal',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b2730f29b052ea18eb757ec7ca9a',
            weekly_plays: '187,246,365',
            time: '3:53'
        },
        {
            music_id: 7,
            song_name: 'Naina - Dangal',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b2730f8e26a782d388ea3e417d54',
            weekly_plays: '256,653,798',
            time: '4:57'
        },
        {
            music_id: 8,
            song_name: 'Phir Bhi Tumko ',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273aca529b2fdfaabf2f50fc9e3',
            weekly_plays: '124,568,695',
            time: '3:53'
        },
        {
            music_id: 9,
            song_name: 'Galti se Mistake',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273f10ef7774581590cf480ed5c',
            weekly_plays: '156,549,656',
            time: '3:53'
        }
    ],
    [
        {
            music_id: 1,
            song_name: 'Chak Lein De (From "Chandani Chowk To China")',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b27302b6076ea19e82afa5abceab',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 2,
            song_name: 'Chand Sifarish (From "Fanaa")',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273e5a1738b803722c0f931e1b0',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 3,
            song_name: 'Saiyaan',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273cd3f6c3c2f2aa9b76fe635b1',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 4,
            song_name: 'Piya Ghar Avenge',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b2733f79927fb84925994c52875e',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 5,
            song_name: 'Teri Deewani',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273cd3f6c3c2f2aa9b76fe635b1',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 6,
            song_name: 'Mere Nishaan (From "OMG")',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273cae8942a913237e3839b37b4',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 7,
            song_name: 'Allah Ke Bande',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273a853b902decce7830d171841',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 8,
            song_name: 'Yun Hi Chala Chal (From "Swades")',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273e63c0ab993ae23b9efa3fe27  ',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 9,
            song_name: 'Bam Lahri',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273cd3f6c3c2f2aa9b76fe635b1',
            weekly_plays: '126,599,989',
            time: '4:06'
        }

    ],
    [
        {
            music_id: 1,
            song_name: 'Chak Lein De (From "Chandani Chowk To China")',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b27302b6076ea19e82afa5abceab',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 2,
            song_name: 'Chand Sifarish (From "Fanaa")',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273e5a1738b803722c0f931e1b0',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 3,
            song_name: 'Saiyaan',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273cd3f6c3c2f2aa9b76fe635b1',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 4,
            song_name: 'Piya Ghar Avenge',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b2733f79927fb84925994c52875e',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 5,
            song_name: 'Teri Deewani',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273cd3f6c3c2f2aa9b76fe635b1',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 6,
            song_name: 'Mere Nishaan (From "OMG")',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273cae8942a913237e3839b37b4',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 7,
            song_name: 'Allah Ke Bande',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273a853b902decce7830d171841',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 8,
            song_name: 'Yun Hi Chala Chal (From "Swades")',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273e63c0ab993ae23b9efa3fe27  ',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 9,
            song_name: 'Bam Lahri',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273cd3f6c3c2f2aa9b76fe635b1',
            weekly_plays: '126,599,989',
            time: '4:06'
        }

    ],
    [
        {
            music_id: 1,
            song_name: 'Chak Lein De (From "Chandani Chowk To China")',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b27302b6076ea19e82afa5abceab',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 2,
            song_name: 'Chand Sifarish (From "Fanaa")',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273e5a1738b803722c0f931e1b0',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 3,
            song_name: 'Saiyaan',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273cd3f6c3c2f2aa9b76fe635b1',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 4,
            song_name: 'Piya Ghar Avenge',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b2733f79927fb84925994c52875e',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 5,
            song_name: 'Teri Deewani',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273cd3f6c3c2f2aa9b76fe635b1',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 6,
            song_name: 'Mere Nishaan (From "OMG")',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273cae8942a913237e3839b37b4',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 7,
            song_name: 'Allah Ke Bande',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273a853b902decce7830d171841',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 8,
            song_name: 'Yun Hi Chala Chal (From "Swades")',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273e63c0ab993ae23b9efa3fe27  ',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 9,
            song_name: 'Bam Lahri',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273cd3f6c3c2f2aa9b76fe635b1',
            weekly_plays: '126,599,989',
            time: '4:06'
        }

    ],
    [
        {
            music_id: 1,
            song_name: 'Chak Lein De (From "Chandani Chowk To China")',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b27302b6076ea19e82afa5abceab',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 2,
            song_name: 'Chand Sifarish (From "Fanaa")',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273e5a1738b803722c0f931e1b0',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 3,
            song_name: 'Saiyaan',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273cd3f6c3c2f2aa9b76fe635b1',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 4,
            song_name: 'Piya Ghar Avenge',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b2733f79927fb84925994c52875e',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 5,
            song_name: 'Teri Deewani',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273cd3f6c3c2f2aa9b76fe635b1',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 6,
            song_name: 'Mere Nishaan (From "OMG")',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273cae8942a913237e3839b37b4',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 7,
            song_name: 'Allah Ke Bande',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273a853b902decce7830d171841',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 8,
            song_name: 'Yun Hi Chala Chal (From "Swades")',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273e63c0ab993ae23b9efa3fe27  ',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 9,
            song_name: 'Bam Lahri',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273cd3f6c3c2f2aa9b76fe635b1',
            weekly_plays: '126,599,989',
            time: '4:06'
        }

    ],
    [
        {
            music_id: 1,
            song_name: 'Chak Lein De (From "Chandani Chowk To China")',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b27302b6076ea19e82afa5abceab',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 2,
            song_name: 'Chand Sifarish (From "Fanaa")',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273e5a1738b803722c0f931e1b0',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 3,
            song_name: 'Saiyaan',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273cd3f6c3c2f2aa9b76fe635b1',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 4,
            song_name: 'Piya Ghar Avenge',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b2733f79927fb84925994c52875e',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 5,
            song_name: 'Teri Deewani',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273cd3f6c3c2f2aa9b76fe635b1',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 6,
            song_name: 'Mere Nishaan (From "OMG")',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273cae8942a913237e3839b37b4',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 7,
            song_name: 'Allah Ke Bande',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273a853b902decce7830d171841',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 8,
            song_name: 'Yun Hi Chala Chal (From "Swades")',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273e63c0ab993ae23b9efa3fe27  ',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 9,
            song_name: 'Bam Lahri',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273cd3f6c3c2f2aa9b76fe635b1',
            weekly_plays: '126,599,989',
            time: '4:06'
        }

    ],
    [
        {
            music_id: 1,
            song_name: 'Chak Lein De (From "Chandani Chowk To China")',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b27302b6076ea19e82afa5abceab',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 2,
            song_name: 'Chand Sifarish (From "Fanaa")',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273e5a1738b803722c0f931e1b0',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 3,
            song_name: 'Saiyaan',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273cd3f6c3c2f2aa9b76fe635b1',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 4,
            song_name: 'Piya Ghar Avenge',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b2733f79927fb84925994c52875e',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 5,
            song_name: 'Teri Deewani',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273cd3f6c3c2f2aa9b76fe635b1',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 6,
            song_name: 'Mere Nishaan (From "OMG")',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273cae8942a913237e3839b37b4',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 7,
            song_name: 'Allah Ke Bande',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273a853b902decce7830d171841',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 8,
            song_name: 'Yun Hi Chala Chal (From "Swades")',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273e63c0ab993ae23b9efa3fe27  ',
            weekly_plays: '126,599,989',
            time: '4:06'
        },
        {
            music_id: 9,
            song_name: 'Bam Lahri',
            song_banner: 'https://i.scdn.co/image/ab67616d0000b273cd3f6c3c2f2aa9b76fe635b1',
            weekly_plays: '126,599,989',
            time: '4:06'
        }

    ],
]

const singleMusic = [
    {
        music_id: 1,
        song_name: 'Channa Mereya',
        song_banner: 'https://i.scdn.co/image/ab67616d0000b273ff1cda069aac9352c258f8d1',
        weekly_plays: '126,599,989',
        time: '4:06',
        artists: [{
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEaO9oNwP0hT6rCxrP1_xtB2Q_ORBTsB3cmw&s',
            name: 'Arijit Singh'
        }, {
            image: 'https://lh3.googleusercontent.com/sjGMYJQ1J3FZEIBsMYUztMjjYOM4-NJ24CjmIHqxTWCxAM1YgjL-d_17u7_PRhTouOwwAjbu-2x5S6I=w544-h544-p-l90-rj',
            name: 'Pritam'
        }]
    },
    {
        music_id: 2,
        song_name: 'Aabad Barbar',
        song_banner: 'https://i.scdn.co/image/ab67616d00001e02f338d36ff740be4cdc5ec709',
        weekly_plays: '126,599,989',
        time: '4:06',
        artists: [{
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEaO9oNwP0hT6rCxrP1_xtB2Q_ORBTsB3cmw&s',
            name: 'Arijit Singh'
        }, {
            image: 'https://lh3.googleusercontent.com/sjGMYJQ1J3FZEIBsMYUztMjjYOM4-NJ24CjmIHqxTWCxAM1YgjL-d_17u7_PRhTouOwwAjbu-2x5S6I=w544-h544-p-l90-rj',
            name: 'Pritam'
        }]
    },
    {
        music_id: 3,
        song_name: 'Shaayad ',
        song_banner: 'https://i.scdn.co/image/ab67616d00001e02c51066dc572e8942e5ef1f44',
        weekly_plays: '126,599,989',
        time: '4:06',
        artists: [{
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEaO9oNwP0hT6rCxrP1_xtB2Q_ORBTsB3cmw&s',
            name: 'Arijit Singh'
        }, {
            image: 'https://lh3.googleusercontent.com/sjGMYJQ1J3FZEIBsMYUztMjjYOM4-NJ24CjmIHqxTWCxAM1YgjL-d_17u7_PRhTouOwwAjbu-2x5S6I=w544-h544-p-l90-rj',
            name: 'Pritam'
        }]
    },
    {
        music_id: 4,
        song_name: 'Raabta-Title tract',
        song_banner: 'https://i.scdn.co/image/ab67616d0000b2732e44757f6ea4eb34d2a0d42f',
        weekly_plays: '126,599,989',
        time: '4:06',
        artists: [{
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEaO9oNwP0hT6rCxrP1_xtB2Q_ORBTsB3cmw&s',
            name: 'Arijit Singh'
        }, {
            image: 'https://lh3.googleusercontent.com/sjGMYJQ1J3FZEIBsMYUztMjjYOM4-NJ24CjmIHqxTWCxAM1YgjL-d_17u7_PRhTouOwwAjbu-2x5S6I=w544-h544-p-l90-rj',
            name: 'Pritam'
        }]
    },
    {
        music_id: 5,
        song_name: 'Ik Vaari Aa',
        song_banner: 'https://i.scdn.co/image/ab67616d0000b273ece89c7bf7d8141a1e8eef42',
        weekly_plays: '126,599,989',
        time: '4:06',
        artists: [{
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEaO9oNwP0hT6rCxrP1_xtB2Q_ORBTsB3cmw&s',
            name: 'Arijit Singh'
        }, {
            image: 'https://lh3.googleusercontent.com/sjGMYJQ1J3FZEIBsMYUztMjjYOM4-NJ24CjmIHqxTWCxAM1YgjL-d_17u7_PRhTouOwwAjbu-2x5S6I=w544-h544-p-l90-rj',
            name: 'Pritam'
        }]
    },
    {
        music_id: 6,
        song_name: 'Itni si Baat Hai',
        song_banner: 'https://i.scdn.co/image/ab67616d0000b273ac47a8ab83d832318df5a9fc',
        weekly_plays: '126,599,989',
        time: '4:06',
        artists: [{
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEaO9oNwP0hT6rCxrP1_xtB2Q_ORBTsB3cmw&s',
            name: 'Arijit Singh'
        }, {
            image: 'https://lh3.googleusercontent.com/sjGMYJQ1J3FZEIBsMYUztMjjYOM4-NJ24CjmIHqxTWCxAM1YgjL-d_17u7_PRhTouOwwAjbu-2x5S6I=w544-h544-p-l90-rj',
            name: 'Pritam'
        }]
    },
    {
        music_id: 7,
        song_name: 'Gerua (From "Dilwale")',
        song_banner: 'https://i.scdn.co/image/ab67616d0000b27370c85ecf066ee9c721b06e3c',
        weekly_plays: '126,599,989',
        time: '4:06',
        artists: [{
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEaO9oNwP0hT6rCxrP1_xtB2Q_ORBTsB3cmw&s',
            name: 'Arijit Singh'
        }, {
            image: 'https://lh3.googleusercontent.com/sjGMYJQ1J3FZEIBsMYUztMjjYOM4-NJ24CjmIHqxTWCxAM1YgjL-d_17u7_PRhTouOwwAjbu-2x5S6I=w544-h544-p-l90-rj',
            name: 'Pritam'
        }]
    },
    {
        music_id: 8,
        song_name: 'Kabira',
        song_banner: 'https://i.scdn.co/image/ab67616d00001e02b0e498453d639aa49322c24a',
        weekly_plays: '126,599,989',
        time: '4:06',
        artists: [{
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEaO9oNwP0hT6rCxrP1_xtB2Q_ORBTsB3cmw&s',
            name: 'Arijit Singh'
        }, {
            image: 'https://lh3.googleusercontent.com/sjGMYJQ1J3FZEIBsMYUztMjjYOM4-NJ24CjmIHqxTWCxAM1YgjL-d_17u7_PRhTouOwwAjbu-2x5S6I=w544-h544-p-l90-rj',
            name: 'Pritam'
        }]
    },
    {
        music_id: 9,
        song_name: 'Tum Se Hi',
        song_banner: 'https://i.scdn.co/image/ab67616d0000b27352fe6875028c892308ffc2f7',
        weekly_plays: '126,599,989',
        time: '4:06',
        artists: [{
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEaO9oNwP0hT6rCxrP1_xtB2Q_ORBTsB3cmw&s',
            name: 'Arijit Singh'
        }, {
            image: 'https://lh3.googleusercontent.com/sjGMYJQ1J3FZEIBsMYUztMjjYOM4-NJ24CjmIHqxTWCxAM1YgjL-d_17u7_PRhTouOwwAjbu-2x5S6I=w544-h544-p-l90-rj',
            name: 'Pritam'
        }]
    }

]

module.exports = { artists, albums, radios, music, singleMusic }