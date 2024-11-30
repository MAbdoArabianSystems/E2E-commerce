import {
  fetchingProducts,
} from "@/store/slices/productsSlice";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SearchMechanism = (searchWords) => {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const price = searchParams.get("price");
  const [products, setProducts] = useState([]);
  
  const { data, error, loading } = useSelector(
    (state) => state?.Products?.products
  );

  useEffect(() => {
    dispatch(fetchingProducts(searchParams));
  }, [searchParams]);

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  const handleSearhing = () => {
    if (!data) return;

    const filteredProducts = data.filter((product) => {
      const matchesTitle = searchWords
        ? product?.title
            ?.toLocaleUpperCase()
            ?.includes(searchWords?.toLocaleUpperCase())
        : true;

      const matchesPrice = price
        ? product?.price >= JSON.parse(price)
        : true;

      return matchesTitle && matchesPrice;
    });

    setProducts(filteredProducts);
  };

  useEffect(() => {
    handleSearhing();
  }, [searchWords, price, data]);

  return { products, loading, error };
};

export default SearchMechanism;
