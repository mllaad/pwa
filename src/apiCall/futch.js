const futch = async (url, opts = {}, navigation) => {
  try {
    const Response = await fetch(url, opts);
    const ResponseText = await Response.text();
    const IsJson = await IsJsonString(ResponseText);
    if (Response.status === 200) {
      if (IsJson) {
        const ResponseJson = await JSON.parse(ResponseText);
        return {
          id: ResponseJson.id,
          message: ResponseJson.message,
          traceMessage: ResponseJson.traceMessage,
        };
      } else {
        return {
          id: 999,
          message: ResponseText,
          traceMessage: ResponseText,
        };
      }
    }

    // check besheeeeeeeeeee
    if (Response.status === 401) {
      return {
        id: -Response.status,
        message: "خطای دسترسی",
        traceMessage: null,
      };
    }

    if (IsJson) {
      const ResponseJson = await JSON.parse(ResponseText);
      return {
        id: -Response.status,
        message: ResponseJson.message,
        traceMessage: null,
      };
    } else {
      return {
        id: -Response.status,
        message: "خطای " + Response.status,
        traceMessage: null,
      };
    }
  } catch (error) {
    return {
      id: -2,
      message: "عدم ارتباط با سرور",
      traceMessage: error,
    };
  }
};
async function IsJsonString(str) {
  try {
    await JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

export default futch;
