import React from "react";

interface Props {
  params: { id: number; photoId: number };
}

const Photo = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      <h1>PhotoPage</h1>
      <div>{id}</div>
      <div>{photoId}</div>
    </div>
  );
};

export default Photo;
