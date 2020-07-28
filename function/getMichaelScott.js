import axios from "axios";

export const handler = async (event, context) => {
  const michaelSaid = await axios.get(
    "https://michael-scott-quotes.herokuapp.com/quote"
  );

  if (michaelSaid.status === 200) {
    return {
      statusCode: michaelSaid.status,
      body: JSON.stringify({ michaelSaid: michaelSaid.data.quote }),
    };
  } else throw new Error("Michael left Dunder Mifflin!!");
};
