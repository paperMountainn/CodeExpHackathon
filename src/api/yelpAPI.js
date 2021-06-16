import axios from 'axios';

// create axios instance
export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers :{
        Authorization: 'Bearer YScmscZ-OBijSlkjDz9qf6qOWyeYVGYDk-oSZQl1uBJsBy6KgYOB3ulvUc1ElH2PHvoQ2IWXh1Rg5suV5GZXjhDhD8jHmIZwbu_cIuj0_4hbVvi6EbseyEuFBKnFYHYx'
    }
})