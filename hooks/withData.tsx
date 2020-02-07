import { withData } from 'next-apollo'
import { HttpLink } from 'apollo-boost'
import dotenv from 'dotenv';

dotenv.config();

const config = {
    link: new HttpLink({
        uri: process.env.REST_API_ENDPOINT,
    })
}

export default withData(config)
