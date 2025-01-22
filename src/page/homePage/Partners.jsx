import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Partners = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const partners = [
        { id: 1, src: "https://logodix.com/logo/1993388.png", alt: "Grameenphone" ,text:"Grameenphone:Provides mobile data services, making SkillFlow&apos;s content easily accessible."},
        { id: 2, src: "https://www.thedailystar.net/sites/default/files/styles/big_202/public/images/2023/10/25/pathao_new_logo.png", alt: "Pathao", text:"Pathao:Helps deliver education hubs to cities and remote areas."},
        { id: 3, src: "https://cdn.worldvectorlogo.com/logos/google-developers-experts-1.svg", alt: "Google Developers Bangladesh", text:"Google Developers Bangladesh: Provides workshops and support for technology education."},
        { id: 4, src: "https://brandeps.com/logo-download/B/BRAC-logo-01.png", alt: "BRAC", text:"BRAC:Brings education programs to underserved communities."},
        { id: 5, src: "https://www.globalbrand.com.bd/image/cache/catalog/GBPL%20Brands/Microsoft-1200x630h.png", alt: "Microsoft Bangladesh:", text:"Microsoft Bangladesh:Offers software and career development support."},
        { id: 5, src: "https://soldieron.org.au/wp-content/uploads/2024/03/Cisco-2-logo.jpg", alt: "Cisco Networking Academy", text:"Cisco Networking Academy:Collaborates on cybersecurity and networking courses."},
    ];

    return (
        <div className="p-6 inset-0 bg-black/70 max-w-screen-lg mx-auto rounded-md ">
            <h2 className="text-center text-white text-xl md:text-4xl font-bold mb-6">
                Our <span className="text-[#F36B27]">30+</span>  Trusted Partners and Collaborators
            </h2>
            <Slider {...settings}>
                {partners.map((partner) => (
                    <div key={partner.id} className="p-3">
                        <div className="w-full h-36 flex flex-col justify-center items-center bg-white rounded-lg shadow-sm">
                            <img
                                className="h-14 object-contain"
                                src={partner.src}
                                alt={partner.alt}
                            /> 
                            <small className="text-black py-1 px-2 text-center">{partner.text}</small>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Partners;