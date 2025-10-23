import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { MdBiotech } from "react-icons/md";
import { RiBubbleChartLine } from "react-icons/ri";
import { BiLogoReact } from "react-icons/bi";

const Research = () => {
    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white">
            <div className="flex justify-center py-10">
                <h1 className="text-center font-black text-5xl">Research</h1>
            </div>
            <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
            >
                <AccordionItem value="item-1" className="">
                    <AccordionTrigger className=" text-white">
                        <div className='mx-auto'><h1 className='flex text-3xl'><MdBiotech size={40} color='green' />バイオイメージング</h1>
                            <h3 className='text-lg'>ーイメージング技術で生体を解明するー</h3></div>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <section id='DHM' className='md:flex justify-center items-center rounded-lg bg-white mx-10 mb-5 text-black'>
                            <div><h1 className='text-2xl font-bold text-center py-3'>デジタルホログラフィック顕微鏡</h1>
                                <p className='text-center py-2'>
                                    デジタルホログラフィック顕微鏡（DHM）は、光の「ゆがみ」（位相のずれ）をカメラで記録し、
                                    コンピューターで画像として再現する顕微鏡です。透明で模様が少ない試料でも、
                                    厚みや形の違いを<strong className="font-semibold">数値</strong>としてとらえられるのが特長です。
                                    また、撮影後でもパソコン上で<strong className="font-semibold">焦点位置を前後に移動</strong>できるため、
                                    ピント合わせに強く、観察対象にやさしい測定ができます。
                                </p>
                            </div>
                            <div className='m-4'>
                                <img src="/dhm.png" alt="" className='max-h-min md:w-200' />
                                <p>※画像はイメージです</p>
                            </div>
                        </section>
                        <section id='TPAM' className='md:flex justify-center items-center rounded-lg bg-white mx-10 mb-5 text-black'>
                            <div><h1 className='text-2xl font-bold text-center py-3'>2光子顕微鏡</h1>
                                <p className="text-center py-2">
                                    2光子顕微鏡は、<strong className="font-semibold">赤外の短いパルス光</strong>を使って、
                                    試料の<strong className="font-semibold">焦点のごく小さな点だけ</strong>を光らせる顕微鏡です。
                                    2つの光（光子）が同時に分子に吸収されると蛍光が出るしくみで、
                                    焦点以外ではほとんど光らないため、<strong className="font-semibold">厚い試料の深部</strong>まで見やすく、
                                    <strong className="font-semibold">周辺のダメージや背景のノイズが少ない</strong>ことが特長です。
                                </p>
                            </div>
                            <div className='m-4'>
                                <img src="/cells.jpg" alt="" className='max-w-full md:w-200' />
                                <p>※画像はイメージです</p>
                            </div>
                        </section>
                        <h1 className='text-2xl text-center'>and more...</h1>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="">
                    <AccordionTrigger className=" text-white">
                        <div className='mx-auto'><h1 className='flex text-3xl'><RiBubbleChartLine size={40} color='blue' />散乱イメージング</h1>
                            <h3 className='text-lg'>ー散乱特性を利用したイメージングー</h3></div>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <section id='SIMG' className='md:flex justify-center items-center rounded-lg bg-white mx-10 mb-5 text-black'>
                            <div><h1 className='text-2xl font-bold text-center py-3'>散乱生体イメージング</h1>
                                <p className='text-center py-2'>
                                    <strong className="font-semibold">生体は可視光から近赤外の光に対して強い散乱体として働きます</strong>そのため，外部から光を入れたとしても散乱により内部からの情報が埋もれてしまいます。可視光から近赤外光は，吸収量を通して生体内部の機能情報を見ることが期待されています。また，複雑な３次元構造の観察も必要とされています。
                                    われわれは，散乱体内部の高解像度イメージング技術の開発に向けて，<strong className="font-semibold">光コヒーレンストモグラフィー(OCT)技術</strong>と<strong className="font-semibold">光拡散トモグラフィー(ODT)技術</strong>の２つの技術開発を行っています。
                                </p>
                            </div>
                            <div className='m-4'>
                                <img src="/dhm.png" alt="" className='max-h-min md:w-200' />
                                <p>※画像はイメージです</p>
                            </div>
                        </section>
                        <section id='SAIMG' className='md:flex justify-center items-center rounded-lg bg-white mx-10 mb-5 text-black'>
                            <div><h1 className='text-2xl font-bold text-center py-3'>散乱吸収イメージング</h1>
                                <p className='text-center py-2'>
                                    近年，散乱現象を光学的に応用する研究・開発が注目されています。例として，人工散乱体に埋め込んだ微小な吸収体を情報として扱う薄型情報記録メディアや，
                                    生体内部の血液の状態など非接触に測定する光拡散トモグラフィなどが挙げられます。このような人工散乱体技術の工学応用を確立するためには，実験的に散乱体の散乱特性を評価する手法が必要不可欠です。
                                </p>
                            </div>
                            <div className='m-4'>
                                <img src="/dhm.png" alt="" className='max-h-min md:w-200' />
                                <p>※画像はイメージです</p>
                            </div>
                        </section>
                        <h1 className='text-2xl text-center'>and more...</h1>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="">
                    <AccordionTrigger className=" text-white">
                        <div className='mx-auto'><h1 className='flex text-3xl'><BiLogoReact size={40} color='purple' />量子イメージング</h1>
                            <h3 className='text-lg'>ー量子もつれを利用した新たな技術ー</h3></div>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <section id='QH' className='md:flex justify-center items-center rounded-lg bg-white mx-10 mb-5 text-black'>
                            <div><h1 className='text-2xl font-bold text-center py-3'>量子ホログラフィー</h1>
                                <p className="text-center py-2">
                                    量子ホログラフィーは、光どうしの<strong className="font-semibold">「量子の相関（量子もつれ）」</strong>という量子力学に基づく性質を利用して、
                                    物体の形や厚みの手がかりを取り出すイメージング手法です。2つの弱い光の相関を記録し、
                                    コンピューターで画像を再構成します。<strong className="font-semibold">少ない光でも</strong>コントラストが得られ、
                                    直接観察しにくい対象でも<strong className="font-semibold">相関の情報</strong>から様子を推定できる点が特長です。

                                </p>
                            </div>
                            <div className='m-4'>
                                <img src="/QuantumHolo.png" alt="" className='max-h-min md:w-200' />
                                <p>※画像はイメージです</p>
                            </div>
                        </section>
                        <section id='ETPA' className='md:flex justify-center items-center rounded-lg bg-white mx-10 mb-5 text-black'>
                            <div><h1 className='text-2xl font-bold text-center py-3'>量子もつれ2光子顕微鏡</h1>
                                <p className='text-center py-2'>
                                    量子ホログラフィーは、光どうしの<strong className="font-semibold">「量子の相関（量子もつれ）」</strong>という量子力学に基づく性質を利用して、
                                    弱い光による2つの光子が同時に吸収される蛍光現象を観測する新たな顕微鏡の手法です。弱い光を光源に使用するため、試料を損傷させるリスクが少なく、<strong className="font-semibold">長時間の
                                        観察やノイズへの耐性</strong>が期待されます。本研究室では、ホログラフィック顕微鏡や神経科学への応用も見据えた研究を進めています。
                                </p>
                            </div>
                            <div className='m-4'>
                                <img src="/QuantumMicro.png" alt="" className='max-h-min md:w-200' />
                                <p>※画像はイメージです</p>
                            </div>
                        </section>
                        <h1 className='text-2xl text-center'>and more...</h1>
                    </AccordionContent>
                </AccordionItem>

            </Accordion>
        </main>
    )
}

export default Research