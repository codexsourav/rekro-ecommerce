import axios from "axios";
import ProductUpdate from "./UpdateForm";
import { redirect } from 'next/navigation'

async function UpdateProduct({ params }) {

  var options = {
    method: 'GET',
    url: process.env.HOST_URL + '/api/product/' + params.id,
  };

  try {
    const data = await axios.request(options);
    if (data.data.error) {
      console.log(data.data.error);
      redirect("/admin");
    }
    return <ProductUpdate data={data.data?.product} />
  } catch (error) {
    console.log(error);
    redirect("/admin");
  }
}
export default UpdateProduct