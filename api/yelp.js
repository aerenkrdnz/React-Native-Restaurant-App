import axios from "axios";

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer WkwsHl3t1sNRNVBGYF1prKZgMmjEjq3E24KypU0Q49pH9-aNBxgf6a6iAFVinRvqdnQ5VZjq2lQozsZ_0UoqXPYTOiazvOqTWzhAwCdwIPRtA_MtrLlyvrPRzZjJZnYx'
    }
})