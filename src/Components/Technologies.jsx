import { RiReactjsLine } from 'react-icons/ri';
import { SiSpringboot, SiPandas, SiMysql } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { FaAws } from "react-icons/fa";



const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-4xl">Technologies</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiSpringboot className="text-7xl text-green-500" />
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaAws className="text-7xl text-orange-500" />
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <VscAzure className="text-7xl text-blue-500" />
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPandas className="text-7xl text-blue-400" />
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMysql className="text-7xl text-blue-600" />
                </div>
            </div>
        </div>
    );
};

export default Technologies;
