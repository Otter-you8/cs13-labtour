"use client"
import React from "react";
import { motion } from "framer-motion";
import { GrGroup } from "react-icons/gr";
import { PiDesktopTower } from "react-icons/pi";
import { FaMicroscope } from "react-icons/fa";
import { MdOutlineScatterPlot } from "react-icons/md";

const RoomSection = () => {
  const rooms = [
    {
      number: "s104",
      title: "Meeting Room：S104",
      description:
        `研究議論の中心へようこそ！この部屋では、教授と学生がアイデアを共有し、視点を刺激し合い、イノベーションを生み出しています。

        大型ディスプレイと電子ホワイトボードを活用し、複雑な概念や理論を共有しています。壁一面の本棚には専門書や過去の論文が並び、新たな革新の種となっています。

        思考をひと休みさせたいときには、畳スペースで心身をリフレッシュ。その他に電子レンジや電気ポッドがあり、食事や休憩場所としても使用でき、新たなひらめきとともに、再び研究に臨むことができます。`,
      image: "/s104.jpg",
      reverse: false,
    },
    {
      number: "s105",
      title: "Student Room：S105",
      description:
        `学生居室へようこそ！私たちの研究室の心臓部です。ここでは、修士課程や博士課程の学生が、実験で得られた生のデータを革新的な知見へと昇華させます。

        1人1台のPCとディスプレイが学生に貸出され、充実した環境と各々のワークスペースで作業に集中することができます。
        
        最先端の論文を読み込み、手法を洗練し、アルゴリズムを検証し、新たなソリューションを生み出すーそのプロセスはこの部屋から始まります。ここは、科学と想像力が交わる場所。そして、次の大きな発見が、まさに一つのキー入力から生まれるかもしれない場所です。`,
      image: "/s105.jpg",
      reverse: true,
    },
    {
      number: "s106",
      title: "Laboratory：S106",
      description:
        `発見の中心 ― 先端実験イメージング室へようこそ！最先端の顕微鏡や高性能イメージングシステムを備え、3つの主要分野における先駆的な研究を支えています。

        音場イメージング：音波をリアルタイムで捉え、可視化することで、音がさまざまな物質とどのように相互作用するかを解析します。

        蛍光イメージング：蛍光マーカーを用いて特定の分子や細胞を発光させ、生物学的プロセスを精密に追跡・解析します。

        マルチモーダルイメージング：複数のイメージング手法を一つのシステムに統合し、相補的な視点を提供します。これにより、単一手法に比べより豊かで正確な知見を生み出します。`,
      image: "/s106.jpg",
      reverse: false,
    },
    {
      number: "s107",
      title: "Laboratory：S107",
      description:
        `この散乱イメージング実験室では、先進的な散乱イメージング技術を用いて、光が複雑で不透明な物質とどのように相互作用するかを探究しています。
        
        特に、Transport-of-Intensity Equation（TIE） に基づく散乱イメージングでは、強度変化から詳細な位相情報を再構築することで、従来の顕微鏡では見えない構造を可視化できます。光波が散乱・屈折する様子を解析することで、微細構造やナノ構造の観察、染色を必要としない生体組織の研究、そして材料特性の高精度な解析が可能になります。
        
        この部屋に備えられた専用の光学セットアップ、精密にアライメントされた光学部品、高感度検出器が組み合わさり、隠れた構造や機能的特徴を明らかにするための拠点となっています。`,
      image: "/s107.jpg",
      reverse: true,
    },
  ];
  return (
    <section
      id="Room"
      className="mt-10"
    >

      <motion.div
        className="w-full pb-20 px-6 "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
      >

        <div className="flex flex-col md:flex-row-reverse md:gap-x-15 md:items-center ">
          <div className="md:w-1/2">
            <img
              src={rooms[0].image}
              alt={rooms[0].title}
              className="rounded-3xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 text-center space-y-5 my-5">
            <h2 className="flex text-white font-bold text-4xl">{rooms[0].title}&nbsp;<GrGroup size={40} /></h2>
            <p className="text-white text-xl text-start whitespace-pre-line">
              {rooms[0].description}
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="w-full pb-20 px-6 "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
      >

        <div className="flex flex-col md:flex-row md:gap-x-15 md:items-center ">
          <div className="md:w-1/2">
            <img
              src={rooms[1].image}
              alt={rooms[1].title}
              className="rounded-3xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 text-center space-y-5 my-5">
            <h2 className="flex text-white font-bold text-4xl">{rooms[1].title}&nbsp;<PiDesktopTower size={40} /></h2>
            <p className="text-white text-xl text-start whitespace-pre-line">
              {rooms[1].description}
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="w-full pb-20 px-6 "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
      >

        <div className="flex flex-col md:flex-row-reverse md:gap-x-15 md:items-center ">
          <div className="md:w-1/2">
            <img
              src={rooms[2].image}
              alt={rooms[2].title}
              className="rounded-3xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 text-center space-y-5 my-5">
            <h2 className="flex text-white font-bold text-4xl">{rooms[2].title}&nbsp;<FaMicroscope size={40} /></h2>
            <p className="text-white text-xl text-start whitespace-pre-line">
              {rooms[2].description}
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="w-full pb-20 px-6 "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
      >

        <div className="flex flex-col md:flex-row md:gap-x-15 md:items-center ">
          <div className="md:w-1/2">
            <img
              src={rooms[3].image}
              alt={rooms[3].title}
              className="rounded-3xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 text-center space-y-5 my-5">
            <h2 className="flex text-white font-bold text-4xl">{rooms[3].title}&nbsp;<MdOutlineScatterPlot size={40} /></h2>
            <p className="text-white text-xl text-start whitespace-pre-line">
              {rooms[3].description}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default RoomSection;
