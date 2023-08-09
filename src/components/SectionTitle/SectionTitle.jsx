
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8 ">
            <p className="text-yellow-600 mb-2">---{subHeading}---</p>            
            <p className="uppercase text-3xl border-y-4 py-4">{heading}</p>            
        </div>
    );
};

export default SectionTitle;