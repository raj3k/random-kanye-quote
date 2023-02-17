const kanyeQuoteResponse = {
  quote: "Truth is my goal. Controversy is my gym. I'll do a hundred reps of controversy for a 6 pack of truth"
};

export async function mockInitialFetch(url) {
  switch(url) {
    case "https://api.kanye.rest/": {
      return {
        ok: true,
        status: 200,
        json: async () => kanyeQuoteResponse,
      }
    }
    default: {
      throw new Error(`Unhandled request: ${url}`);
    }
  }
}

const newKanyeQuoteResponse = {
  quote: "There are people sleeping in parking lots"
}

export async function mockNewQuoteFetch(url) {
  switch(url) {
    case "https://api.kanye.rest/": {
      return {
        ok: true,
        status: 200,
        json: async () => newKanyeQuoteResponse,
      }
    }
    default: {
      throw new Error(`Unhandled request: ${url}`);
    }
  }
}