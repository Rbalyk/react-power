import { BANK_BASE_URL } from "../app.const";

export function fetchCurrencyDataSuccess(currency) {
    return {
        type: "CURRENCY_FETCH_DATA_SUCCESS",
        currency
    }
}

const baseURL = `${BANK_BASE_URL}?json&exchange&coursid=5`;

export function fetchCurrencyData() {
    return async (dispatch) => {
         const data = await fetch(baseURL);
         const response = await data.json();
         dispatch(fetchCurrencyDataSuccess(response));
    }
}
