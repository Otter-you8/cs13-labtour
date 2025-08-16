import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";


const page = () => {
    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white">
            <div className="flex justify-center py-10">
                <h1 className="text-center font-black text-5xl">よくある質問</h1>
            </div>
            <Accordion
                type="single"
                collapsible
                className="w-full"
            >
                <AccordionItem value="item-1">
                    <AccordionTrigger className=" text-white">
                        <div className='flex mx-auto'><h1 className='flex text-lg md:text-3xl'><FaRegQuestionCircle size={30} className='my-auto' />&nbsp;どのような研究をしていますか？</h1></div>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <section id='DHM' className='md:flex justify-center items-center rounded-lg bg-white mx-10 mb-5 text-black py-5'>
                            <div className='flex'>
                                <p className='flex text-center text-lg md:text-xl py-2'>
                                    本研究室では、光学・イメージング技術を中心に、生命科学や材料科学など幅広い分野に応用できる研究を行っています。
                                    光操作機能を備えた光学顕微鏡開発、音場の可視化技術、量子もつれ光を用いた次世代センシング・イメージング技術の開発など
                                    学生の関心に応じてテーマを設定できます。
                                </p>
                            </div>
                        </section>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className=" text-white">
                        <div className='flex mx-auto'><h1 className='flex  text-lg md:text-3xl'><FaRegQuestionCircle size={30} className='my-auto' />&nbsp;コアタイムはありますか？</h1></div>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <section id='DHM' className='md:flex justify-center items-center rounded-lg bg-white mx-10 mb-5 text-black py-5'>
                            <div className='flex'>
                                <p className='flex text-center text-lg md:text-xl py-2'>
                                    コアタイムは特にありません。所属メンバー各自がアルバイトや部活動など両立しながら柔軟にスケジュールを調整し、それぞれのペースで研究を進めています。
                                    週に1回の進捗報告のミーティングは、原則参加となります。
                                </p>
                            </div>
                        </section>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className=" text-white">
                        <div className='flex mx-auto'><h1 className='flex text-lg md:text-3xl'><FaRegQuestionCircle size={30} className='my-auto' />&nbsp;定期的なミーティングはありますか？</h1></div>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <section id='DHM' className='md:flex justify-center items-center rounded-lg bg-white mx-10 mb-5 text-black py-5'>
                            <div className='flex'>
                                <p className='flex text-center text-lg md:text-xl py-2'>
                                    週1回の進捗報告のミーティング、前期と後期で1回ずつのゼミは原則参加となります。研究を進めるうえで、他メンバーや教員との意見交換に
                                    よって、さらに研究の質を向上させています。
                                </p>
                            </div>
                        </section>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger className=" text-white">
                        <div className='flex mx-auto'><h1 className='flex text-lg md:text-3xl'><FaRegQuestionCircle size={30} className='my-auto' />&nbsp;研究室配属後はどのようなスケジュールですか？</h1></div>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <section id='DHM' className='md:flex justify-center items-center rounded-lg bg-white mx-10 mb-5 text-black py-5'>
                            <div className='flex'>
                                <p className='flex text-center text-lg md:text-xl py-2'>
                                    研究室配属後は4～6月の間で、教科書の輪講を行ってもらい光学に関する基礎知識を学びます。その後、研究テーマをそれぞれ話し合って決め、研究テーマに関する
                                    先行研究の論文を読み、ゼミで発表を行います。ゼミが終了してから8月まで、大学院進学を考えている方は院試勉強の期間になります。院試が終了してからは、
                                    卒業研究の期間に入ります。
                                </p>
                            </div>
                            <div className='mx-auto'>
                                <img src="schedule.png" alt="" className='w-300' />
                            </div>
                        </section>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger className=" text-white">
                        <div className='flex mx-auto'><h1 className='flex text-lg md:text-3xl'><FaRegQuestionCircle size={30} className='my-auto' />&nbsp;研究では具体的にどのようなことをしますか？</h1></div>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <section id='DHM' className='md:flex justify-center items-center rounded-lg bg-white mx-10 mb-5 text-black py-5'>
                            <div className='flex'>
                                <p className='flex text-center text-lg md:text-xl py-2'>
                                    研究テーマにもよりますが、レーザー装置や顕微鏡、カメラなどを用いた光学系による実験や、MATLABやPythonを使ったシュミレーション・データ解析を行っています。
                                    学生が主体的に研究テーマの課題や目的に対して、プログラミングだけでなく、実際の装置も扱いながら様々な手法で研究を行っています。
                                </p>
                            </div>
                        </section>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger className=" text-white">
                        <div className='flex mx-auto'><h1 className='flex text-lg md:text-3xl'><FaRegQuestionCircle size={30} className='my-auto' />&nbsp;研究室の卒業生の進路は？</h1></div>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <section id='DHM' className='md:flex justify-center items-center rounded-lg bg-white mx-10 mb-5 text-black py-5'>
                            <div className='flex'>
                                <p className='flex text-center text-lg md:text-xl py-2'>
                                    大学院に進学する学生が多いですが、学部で卒業して企業に就職する学生もいます。
                                    2025年現在、学生として博士後期課程3人、博士前期課程8人、学部生7人が所属しています。
                                    就職先として、メーカーからIT、コンサルなど幅広い業界の企業に進んでいます。大学院入試の過去問や就職活動についても、気軽に相談できます。
                                </p>
                            </div>
                        </section>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                    <AccordionTrigger className=" text-white">
                        <div className='flex mx-auto'><h1 className='flex text-lg md:text-3xl'><FaRegQuestionCircle size={30} className='my-auto' />&nbsp;研究室の雰囲気はどんな感じですか？</h1></div>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <section id='DHM' className='md:flex justify-center items-center rounded-lg bg-white mx-10 mb-5 text-black py-5'>
                            <div className='flex'>
                                <p className='flex text-center text-lg md:text-xl py-2'>
                                    先輩後輩教員問わず、研究に関する相談はもちろん、ちょっとした雑談もできる環境です。集中するときは静かに、ディスカッションをするときは活発にと、
                                    メリハリがあるのも特徴です。研究室新入生の歓迎会やBBQなどもあり、研究の真面目な面だけでなく、リラックスできる時間も大切にしています。
                                </p>
                            </div>
                        </section>
                    </AccordionContent>
                </AccordionItem>


            </Accordion>
        </main>
    )
}

export default page