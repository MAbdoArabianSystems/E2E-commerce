import ProductsDetails from "@/modules/productsDetails";
export default async function Index( {params} ) {
  let productId;
  try {
    productId = { productId } = await params;
  } catch (error) {
    throw new Error(`${error.message} this error from productsDetails page`);
  }

  return (
      <ProductsDetails productId={productId?.productId} />
  );
}
