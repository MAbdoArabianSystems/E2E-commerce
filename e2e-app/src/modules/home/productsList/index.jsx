"use client";

import CardList from "./cardList";
import CardListSkeleton from "./cardList/CardListSkeleton";
import SearchMechanism from "@/patterns/ContainerPresentational/SearchMechanism";

const Index = ({ searchWords }) => {

const {products , loading , error} = SearchMechanism(searchWords);

return (
    <div className="py-10">
      {loading ? (
        <CardListSkeleton />
      ) : products?.length !== 0 ? (
        <CardList products={products} />
      ) : (
        <div className="m-auto h-[50vh] md:w-2/4 border border-t-[#22222238] rounded-md shadow-xl flex flex-col justify-center items-center align-middle">
          <p className="text-[#db2c2c] text-[24px]"> No Search Results .!</p>
        </div>
      )}
    </div>
  );
};

export default Index;
