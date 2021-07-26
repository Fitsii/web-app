import Head from 'next/head';

const Meta = () => (
    <Head>
        <meta charSet="UTF-8" />
        <title>Fitsii</title>
        <meta name="description" content="Fitsii Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" sizes="192x192" href="/public/fitsii.png" />
        <link rel="apple-touch-icon" href="/public/fitsii.png" />
        <link rel="mask-icon" href="/public/fitsii.png" color="#49B882" />
        <link rel="icon" href="/public/fitsii.png" />

        {/*Custom Links*/}
        <link href="https://fonts.googleapis.com/css?family=Poppins:400,500,600" rel="stylesheet" />
        <link
            href="https://fonts.googleapis.com/css?family=Noticia+Text:400,400i|Playfair+Display:400,700|Montserrat:400,500,600,700,800&display=swap"
            rel="stylesheet"
        />

        <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        {/* <link rel="stylesheet" type="text/css" href="../node_modules/antd/dist/antd.css" /> */}

        <meta property="og:url" content="Fitsii LLC" />
        <meta property="og:title" content="DISCOVER THE POWER OF TRAINNING" />
        <meta property="og:description" content="Get more from every workout with customized guideance of personal training" />
        <meta name="twitter:site" content="defaultOGURL" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
    </Head>
);

export default Meta;
