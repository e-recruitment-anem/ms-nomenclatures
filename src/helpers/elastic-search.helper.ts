import { Client } from "@elastic/elasticsearch";

const elasticUrl = process.env.ELASTIC_URL || "http://localhost:9200";
const esclient = new Client({ node: elasticUrl });
const index = "quotes";
const type = "quotes";

function checkConnection() {
  return new Promise(async (resolve) => {
    console.log("Checking connection to ElasticSearch...");
    let isConnected = false;
    while (!isConnected) {
      try {
        await esclient.cluster.health({});
        console.log("Successfully connected to ElasticSearch");
        isConnected = true;
        // eslint-disable-next-line no-empty
      } catch (_) {}
    }
    resolve(true);
  });
}

async function setItem(index: string, document: any) {
  try {
    await esclient.index({ index, document: { ...document } });
    console.log(`Created index ${index}`);
  } catch (err) {
    console.error(`An error occurred while creating the index ${index}:`);
    console.error(err);
  }
}

async function getItems(index: string, query: string) {
  try {
    return await esclient.search({
      index,
      search_type: "query_then_fetch",

      query: {
        query_string: { default_field: "label", query: `*${query}*` },
        // match: { label: { query: query, fuzziness: "all" } },
      },
    });
  } catch (err) {
    console.error(`An error occurred while creating the index ${index}:`);
    console.error(err);
  }
}

async function getItemById(index: string, id: number) {
  try {
    return await esclient.search({
      index,
      search_type: "query_then_fetch",

      query: {
        match: { id },
      },
    });
  } catch (err) {
    console.error(`An error occurred while creating the index ${index}:`);
    console.error(err);
  }
}

export default { checkConnection, setItem, getItems, getItemById };
