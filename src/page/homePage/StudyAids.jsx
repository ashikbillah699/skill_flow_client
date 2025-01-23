
// import { IconName1, IconName2, IconName3, IconName4, IconName5, IconName6, IconName7, IconName8 } from 'react-icons'; 

import { FaTachographDigital } from "react-icons/fa6";
import { GiBrain } from "react-icons/gi";
import { LiaConnectdevelop } from "react-icons/lia";
import { RiCustomerService2Fill } from "react-icons/ri";
import { SiStudyverse } from "react-icons/si";
import CommonHead from "../../commonSection/CommonHead";



const StudyAids = () => {
    const studyAids = [
        { id: 1, icon: <SiStudyverse />, label: 'Study Buddy', bgColor: 'bg-green-500 text-white' },
        { id: 2, icon: <RiCustomerService2Fill />, label: 'Tutoring Services', bgColor: 'bg-blue-500 text-white' },
        { id: 3, icon: <FaTachographDigital />, label: 'Digital Advertising', bgColor: 'bg-yellow-500 text-white' },
        { id: 4, icon: <GiBrain/>, label: 'Brain Boost', bgColor: 'bg-purple-500 text-white' },
        { id: 5, icon: <LiaConnectdevelop />, label: 'Edu Connect', bgColor: 'bg-orange-500 text-white' },
        { id: 1, icon: <SiStudyverse />, label: 'Study Buddy', bgColor: 'bg-red-500 text-white' },
        { id: 2, icon: <RiCustomerService2Fill />, label: 'Tutoring Services', bgColor: 'bg-gray-600 text-white' },
        { id: 3, icon: <FaTachographDigital />, label: 'Digital Advertising', bgColor: 'bg-orange-400 text-white' },
    ];
    return (
        <div>
            <div className="max-w-screen-xl mx-auto p-4">
               <CommonHead heading={'Study Aids to Boost Your Learning'}></CommonHead>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mt-10">
                    {studyAids.map((aid) => (
                        <div
                            key={aid.id}
                            className={`border-2 relative p-8 rounded-md flex items-center justify-center shadow-md`}
                        >
                                <div className={`${aid.bgColor} absolute left-4 -top-7 text-4xl mb-2 p-2 rounded-full`}>{aid.icon}</div>
                            <div className="text-center">
                                <div className="text-lg font-semibold">{aid.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StudyAids;