const postHighScores = async (shape: string, name: string, attempts: number): Promise<boolean> => {
  type scoreType = {
    shape: string;
    name: string,
    attempts: number;
  }

  const data: scoreType = {
    shape: shape,
    name: name,
    attempts: attempts
  }

  const link = 'http://localhost:';
  const port = 8000;
  const route = '/postscores';
  /* const response = await fetch(link + port + route, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    }
  }); */
  /* if (response.ok) {
    console.log('Score added');
    return true;
  } else {
    return false;
  } */

  return true;
};

export default postHighScores;