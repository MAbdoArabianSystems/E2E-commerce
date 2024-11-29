import React from "react";

const StyledComponent = (ChiledComponent) => {
  return (props) => {
    const styles="HOC_Pattern inline-flex w-full items-center justify-center rounded-lg bg-[#000] px-5 py-2.5 text-sm font-medium  text-white hover:bg-[#000000a4] focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"

    return <ChiledComponent style={styles} {...props} />;
  };
};

export default StyledComponent;
