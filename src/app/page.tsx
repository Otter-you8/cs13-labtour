import React from "react";
import MatterPortViewer from "./feature/Home/matterportviewer";
import ResearchSection from "./components/ResearchSection";
import Hero from "./feature/Home/Hero";
import Link from "next/link";
import { FaRegLightbulb } from "react-icons/fa";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { IoIosMail } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";
import { TbHandFinger } from "react-icons/tb";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <Hero />

      <MatterPortViewer
        modelID="pXuSmseL7cG"
        sdkKey="tnwen6f345d1u4r7dp6p87fsd"
      />

      <section id="how" className="px-6 py-12 text-start md:text-center">
        <h2 className="flex justify-center text-2xl font-bold"><TbHandFinger size={30} />&nbsp;操作方法</h2>
        <p className="text-gray-300 text-xs md:text-sm text-start max-w-6xl mx-auto py-4">
          ビューアでは、パソコン・スマートフォン・タブレットから、実際の研究室空間を360°自由に探索することができます。以下の操作方法をご参考ください。
        </p>
        <h3 className="text-xl">基本操作</h3>
        <p className="text-gray-300 text-xs md:text-sm max-w-6xl mx-auto pt-4">
          <span className="font-extrabold">移動：</span>画面内の地面にある白い円や矢印をクリック（タップ）すると、その場所への移動します。
        </p>
        <p className="text-gray-300 text-xs md:text-sm  max-w-6xl mx-auto">
          <span className="font-extrabold">視点の変更：</span>マウスをドラッグ（スマホは指でスワイプ）して視点を回転できます。
        </p>
        <p className="text-gray-300 text-xs md:text-sm  max-w-6xl mx-auto mb-2">
          <span className="font-extrabold">ズームイン／アウト：</span>ズームイン／アウト：マウスホイールのスクロール、またはピンチイン・ピンチアウトで調整します。
        </p>

        <h3 className="text-xl">モード切替</h3>
        <p className="text-gray-300 text-xs md:text-sm  max-w-6xl mx-auto pt-4">
          <span className="font-extrabold">ドールハウス表示：</span>全体を立体的に俯瞰できます。画面左下の「Dollhouse」アイコンをクリック。
        </p>
        <p className="text-gray-300 text-xs md:text-sm  max-w-6xl mx-auto">
          <span className="font-extrabold">フロアプラン表示：</span>平面図で表示します。「Floor Plan」アイコンをクリック。
        </p>
        <p className="text-gray-300 text-xs md:text-sm  max-w-6xl mx-auto">
          <span className="font-extrabold">ウォークスルー表示：</span>実際に歩いているような視点で探索できます。
        </p>
        <p className="text-gray-300 text-xs md:text-sm  max-w-6xl mx-auto">
          <span className="font-extrabold">ハイライト表示：</span>ハイライトから各部屋へ飛ぶことができます。
        </p>
        <p className="text-gray-300 text-xs md:text-sm  max-w-6xl mx-auto">
          <span className="font-extrabold">自動再生：</span>各部屋を順番に再生していきます。
        </p>
      </section>

      <section id="about" className="px-6 py-12 text-center">
        <h2 className="text-3xl font-bold pb-4 border-b-4 border-indigo-700">システム計測研究分野　的場・米田研究室</h2>
        <p className="text-white text-lg font-bold text-start max-w-6xl mx-auto pt-4">
          本研究室では、光技術を基に、生体など大規模かつ複雑なシステムを対象とした計測技術の開発、マウス脳機能解明に向けた光操作機能を備えた光学顕微鏡開発、音場の可視化技術、量子もつれ光を用いた次世代センシング・イメージング技術の開発など最先端の応用光学分野の研究を行っています。
        </p>
        <p className="text-gray-300 text-lg text-start max-w-6xl mx-auto pt-4">
          2018年10月より神戸大学先端融合研究環極みプロジェクト「ホログラフィック技術による生命現象の４次元計測・操作の実現とその臨床利用」を開始しました。
        </p>
        <p className="text-gray-300 text-lg text-start max-w-6xl mx-auto pt-4">
          また，2020年12月より，学術変革領域研究「散乱・揺らぎ場の包括的理解 と透視の科学（散乱透視学）」を開始しました。
        </p>
      </section>



      <ResearchSection />

      <section id="aboutLabTour" className="px-6 py-12 text-center">
        <h2 className="flex justify-center text-2xl font-bold pb-4"><FaRegLightbulb size={30} />&nbsp;バーチャルラボツアーとは？</h2>
        <p className="text-gray-300 text-sm md:text-lg text-start max-w-6xl mx-auto pt-4">
          当サイトは、MatterPortによる3Dスキャン技術を用いて、実際のラボ空間をオンライン上に忠実に再現したバーチャルラボツアーを提供しています。高精細な360°ビューと立体データにより、研究設備や実験環境を、現地を訪れていなくてもまるでその場にいるような臨場感を持って体験することが可能です。
        </p>
        <p className="text-gray-300 text-sm md:text-lg text-start max-w-6xl mx-auto pt-4">
          ユーザーはPCやスマートフォン、VRデバイスから自由に空間を移動し、機器や装置の詳細説明、関連資料、動画などのコンテンツにアクセスできます。これにより、遠隔地からでも研究環境を深く理解でき、施設見学や研究紹介、教育用途など、幅広いシーンでの活用が可能です。
        </p>
      </section>

      <section id="contact" className="bg-gray-700 px-6 py-12 text-center justify-items-center">
        <h2 className="flex text-4xl font-bold mb-4"><RiContactsFill size={36} />&nbsp;Contact</h2>
        <p className="text-gray-300 text-start">
          医学，生物学との融合研究として時空間４次元イメージング・光機能操作の研究や音場の可視化，量子イメージングなどの研究を行っています。 興味がある方は是非、研究室を見に来てください。
        </p>
        <p className="text-gray-300 text-start">
          オープンラボはいつでも対応しますので，メールで連絡してください。また、研究室見学はいつでも可能ですので，気軽にメールでお問い合わせください。
        </p>
        <p className="flex text-gray-300 mt-6 ">
          <IoIosMail size={30} />&nbsp;&nbsp; 的場：matoba@kobe-u.ac.jp
        </p>
        <p className="flex text-gray-300 mb-6 ">
          <IoIosMail size={30} />&nbsp;&nbsp;米田：yoneda.naru@port.kobe-u.ac.jp
        </p>
        <button className="justify-items-center bg-white text-gray-900 text-lg px-6 py-3 rounded-xl shadow-md hover:scale-105 transition">
          <Link
            href="https://www.lab.kobe-u.ac.jp/csi-applied-optics/index.html"
            target="_blank"
            rel="noopener noeferrer"
            className="flex"
          >
            研究室ホームページへ&nbsp;<HiArrowTopRightOnSquare size={25} />
          </Link>
        </button>
      </section>
    </div>
  );
};

export default HomePage;
