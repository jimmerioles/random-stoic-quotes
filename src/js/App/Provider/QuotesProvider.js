/*
* Provides quotes from Random Stoic Quotes API endpoint.
. *
* @author Jim Merioles <jimwisleymerioles@gmail.com>
*/
class QuotesProvider {
    /*
    * Fetches quotes from an API endpoint.
    *
    * @return {strin|json} Quotes JSON string.
    */
    async fetchQuotes() {
        console.log(`${performance.now() - APP_START}: QuotesProvider@fetchQuotes()`);//

        let response = `{"error":"Something something went wrong."}`;

        try {
            response = await fetch(this.endpoint()).then((resp) => resp.json()).then((json) => json);
        } catch (e) {
            console.log(e);
        }

        return response;
    }

    /*
    * Get Random Stoic Quotes API endpoint.
    *
    * @return {string} Quotes API endpoint.
    */
    endpoint() {
        console.log(`${performance.now() - APP_START}: QuotesProvider@endpoint()`);//

        return `https://randomstoicquotesapi.herokuapp.com/api/v1/quotes`;
    }
}

export default QuotesProvider;
