import Image from "next/image";
import React from "react";

import loading from "../../assets/loadingGif.gif";

const Loading = () => {
  return (
    <div className="flex justify-center itens-center">
      <div>
        <Image src={loading} alt="loading" width={60} height={60}/>
      </div>
    </div>
  );
};

export default Loading;
