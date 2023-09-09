import axios from "axios";
import { redirect } from 'next/navigation'
import ShowProducts from "./ShowProducts";

async function LoadProduct({ params }) {

    var options = {
        method: 'GET',
        url: process.env.HOST_URL + '/api/collection/' + params.collection,
    };

    try {
        const data = await axios.request(options);
        if (data.data.error) {
            console.log(data.data.error);
            redirect("/admin");
        }
        return <ShowProducts data={data.data} />
    } catch (error) {
        console.log(error);
        redirect("/admin");
    }
}
export default LoadProduct