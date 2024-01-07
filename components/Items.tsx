import React from "react";
import ItemList from "./ItemList";
interface Item {
  Id: string;
  Name: string;
  Price: number;
  ImageUrl: string;
  IsPopular: boolean;
  IsRecommended: boolean;
}
const Items = async () => {
  let datas: Item[] = [];
  const apiUrl =
    "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10";
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      console.log( new Error("Network response was not ok"));
    }

    const data = await response.json();
    datas = data.Items;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return (
    <div>
      <ItemList data={datas} filterType="IsPopular"/>
      <ItemList data={datas} filterType="IsRecommended"/>
    </div>
  );
};

export default Items;
