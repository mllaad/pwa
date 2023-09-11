import URLS from "./urlConfig";
import futch from "./futch";

export async function CoreServiceApi(token, server, entity, action, jdata) {
  let url = URLS.baseURL[server] + URLS.apiService;
  let raw = JSON.stringify({
    objectId: entity,
    actionType: action,
    jsonValues: jdata,
  });

  var requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: raw,
    redirect: "follow",
  };
  const Response = await futch(url, requestOptions);

  return Response;
}
