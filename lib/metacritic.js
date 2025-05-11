import mockData from "../mock/mockGames.json"

export async function getLatestGames() {
  // Ya no funciona la api comentada
  // const LATEST_GAMES = "https://api.rawg.io/api/games?page=1&page_size=20";
  return mockData;
  
  // const rawData = await fetch(LATEST_GAMES);
  // console.log("yyy",rawData);
  // const json = await rawData.json();
  // console.log("yyyd",json);
  // const { data: { items } } = json;

  // return items.map((item) => {
  //   const { description, slug, releaseDate, image, criticScoreSummary, title } =
  //     item;
  //   const { score } = criticScoreSummary;

  //   // crea la imagen
  //   const { bucketType, bucketPath } = image;
  //   const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;

  //   return {
  //     description,
  //     releaseDate,
  //     score,
  //     slug,
  //     title,
  //     image: img,
  //   };
  // });
}

export async function getGameDetails(slug) {
  const gameDetail = mockData.find((game) => game.slug === slug);
  return gameDetail;
  // const GAME_DETAILS = `https://internal-prod.apigee.fandom.net/v1/xapi/composer/metacritic/pages/games/${slug}/web?&apiKey=1MOZgmNFxvmljaQR1X9KAij9Mo4xAY3u`;

  // const rawData = await fetch(GAME_DETAILS);
  // const json = await rawData.json();

  // const { components } = json;
  // const { title, description, criticScoreSummary, images } = components[0];
  // const { score } = criticScoreSummary;

  // // get the card image
  // const cardImage = images.find((image) => image.typeName === "cardImage");
  // const { bucketType, bucketPath } = cardImage;
  // const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;

  // const rawReviews = components[3].data.items;

  // // get the reviews
  // const reviews = rawReviews.map((review) => {
  //   const { quote, score, date, publicationName, author } = review;
  //   return { quote, score, date, publicationName, author };
  // });

  // return {
  //   img,
  //   title,
  //   slug,
  //   description,
  //   score,
  //   reviews,
  // };
}
