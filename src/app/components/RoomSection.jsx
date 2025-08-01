import React from "react";
import RoomDescription from "./RoomDescription";

const RoomSection = () => {
  const rooms = [
    {
      number: "s104",
      title: "Meeting Room：S104",
      description:
        "ミーティングルームとして使用しています。大型のディスプレイがあり、電子黒板やプレゼンテーション表示などに使えます。壁一面の本棚には、専門書や過去の論文が入っています。畳もあり、休憩に寝転がったり自由に使うことができます。",
      image: "/s104.jpg",
      reverse: false,
    },
    {
      number: "s105",
      title: "Student Room：S105",
      description:
        "ミーティングルームとして使用しています。大型のディスプレイがあり、電子黒板やプレゼンテーション表示などに使えます。壁一面の本棚には、専門書や過去の論文が入っています。畳もあり、休憩に寝転がったり自由に使うことができます。",
      image: "/s105.jpg",
      reverse: true,
    },
    {
      number: "s106",
      title: "Laboratory：S106",
      description:
        "ミーティングルームとして使用しています。大型のディスプレイがあり、電子黒板やプレゼンテーション表示などに使えます。壁一面の本棚には、専門書や過去の論文が入っています。畳もあり、休憩に寝転がったり自由に使うことができます。",
      image: "/s106.jpg",
      reverse: false,
    },
    {
      number: "s107",
      title: "Laboratory：S107",
      description:
        "ミーティングルームとして使用しています。大型のディスプレイがあり、電子黒板やプレゼンテーション表示などに使えます。壁一面の本棚には、専門書や過去の論文が入っています。畳もあり、休憩に寝転がったり自由に使うことができます。",
      image: "/s107.jpg",
      reverse: true,
    },
  ];
  return (
    <section
      id="Room"
      className="bg-gradient-to-br from-gray-800 to-gray-900 py-8"
    >
      <div className="flex justify-center pt-20">
        <h1 className="text-center text-5xl">システム情報学研究棟：1F</h1>
      </div>

      {rooms.map((room, index) => {
        return <RoomDescription key={index} {...room} />;
      })}
    </section>
  );
};

export default RoomSection;
