import useAllClass from "../../../hooks/useAllClass";


const ReqAllClasses = () => {
    const [allClass, ] = useAllClass()
    console.log(allClass)
    return (
        <div>
            Req All classes.
        </div>
    );
};

export default ReqAllClasses;