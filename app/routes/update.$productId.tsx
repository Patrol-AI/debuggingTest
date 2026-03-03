import axios from "axios";
import { redirect } from "@remix-run/node";

export let loader = async ({ params, request }) => {
  const formData = await request.formData();

  const newTitle = formData.get("newTitle");
  const productId = params.productid;

  await axios.put(
    `https://eng-test-store-2.myshopify.com/admin/products/${productId}.json`,
    {
      product: {
        title: newTitle,
      },
    },
  );
};
