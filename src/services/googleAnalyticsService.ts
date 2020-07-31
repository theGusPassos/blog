import axios from "axios";

export const getViewsByPage = async (page: string | null | undefined) => {
  return axios
    .get(
      `https://ga-dev-tools.appspot.com/query-explorer/?ids=ga:219126272&start-date=2020-01-01&end-date=today&metrics=ga:pageviews&filters=ga:pagePath==${page}`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
    .then((response) => console.log(response));
};
