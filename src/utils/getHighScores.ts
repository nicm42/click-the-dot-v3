//import * as data from '../dummyScores.json';

const getHighScores = async (shape: string): Promise<any> => {
  const link = 'http://localhost:';
  const port = 8000;
  const route = '/api/getscores';
  const response = await fetch(link + port + route);
  const data = await response.json();
  console.log(data);
  // Get the data from this shape only
  const shapeData = data.filter((key: any) => key.shape === shape);
  //const shapeData = data.default.filter((key: any) => key.shape === shape);
  console.log(shapeData);
  // Sort it by score order, so 1 is first
  // But we only want to show the first 10
  let sortedData = shapeData
    .sort((a: any, b: any) => a.score - b.score)
    .slice(0, 10);
  console.log(sortedData);

  if (response.ok) {
    return sortedData;
  } else {
    throw new Error();
  }
};

export default getHighScores;
