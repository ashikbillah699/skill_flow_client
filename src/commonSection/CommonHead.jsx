/* eslint-disable react/prop-types */
const CommonHead = ({ heading }) => {

    return (
        <div className="py-10 text-center">
            <span className="text-2xl font-bold  border-b border-b-slate-700 py-3 px-10 animate__animated animate__fadeInDown">{heading}</span>
        </div>
    );
};

export default CommonHead;