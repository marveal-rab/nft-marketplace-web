import React from "react";

const FeaturedItems: React.FC<Props> = (props) => {
  return (
    <div className="ml-16">
      <h2 className="text-3xl font-bold my-12">Featured items</h2>
      <span>
        You don’t have any collected items to feature on your profile yet.
      </span>
    </div>
  );
};

export default FeaturedItems;
