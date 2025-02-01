/* eslint-disable react/prop-types */


const DeshboardBanner = ({img, title, description,min}) => {
    return (
        <section className={`bg-fixed mx-auto flex justify-center items-center min-h-[200px] bg-cover bg-center`} style={{ backgroundImage: `url(${img})` }}>
        <div className={`px-16 ${min} bg-black bg-opacity-60 h-[100px] w-full rounded-lg shadow-lg max-w-screen-md flex flex-col items-center justify-center`}>
            <h2 className="text-3xl font-bold text-white">{title}</h2>
            <p className=" px-8 text-center text-sm text-white">
                {description}
            </p>
        </div>
    </section>
    );
};

export default DeshboardBanner;