import { getAllExtensions } from "showdown";

export const getViewsByPage = async (page: string | null | undefined) => {
  return fetch(
    `https://ga-dev-tools.appspot.com/query-explorer/?ids=ga:219126272&start-date=2020-01-01&end-date=today&metrics=ga:pageviews&filters=ga:pagePath==${page}`
  )
    .then((response) => response.json())
    .then((json: any) => Number(json["totalsForAllResults"]["ga:pageviews"]));
};
