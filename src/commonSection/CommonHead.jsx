/* eslint-disable react/prop-types */
const CommonHead = ({ heading }) => {

    return (
        <div className="py-10 text-center">
            <span className="text-xl sm:text-3xl font-bold text-black border-b border-b-slate-700 pt-3 pb-1 px-10 animate__animated animate__fadeInDown">{heading}</span>
        </div>
    );
};

export default CommonHead;