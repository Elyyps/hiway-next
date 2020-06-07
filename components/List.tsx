import React from "react";

type Props = {
  items: any[];
};

const List = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>kk </li>
    ))}
  </ul>
);

export default List;
