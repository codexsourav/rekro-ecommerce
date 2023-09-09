import { redirect } from "next/navigation";
import Customizeform from "./Customizeform"
import axios from "axios";

async function Customize() {
    var options = {
        method: 'GET',
        url: process.env.HOST_URL + '/api'
    };

    try {
        const data = await axios.request(options);
        if (data.data.error) {
            console.log(data.data.error);
            redirect("/admin");
        }
        return <Customizeform data={data.data.home} />
    } catch (error) {
        console.log(error);
        redirect("/admin");
    }

}
export default Customize