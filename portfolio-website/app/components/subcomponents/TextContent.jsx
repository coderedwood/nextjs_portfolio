"use client";

const TextContent = ({
  id,
  bullletText,
  title,
  role,
  description,
  contentType,
}) => {
  return (
    <section className={`flex flex-col top-0 left-0 fixed text-black h-[100vh] w-[50%]`}>
      <div className="p-[5%] block text-2xl font-semibold box-border">
        <span>{bullletText}</span>
      </div>
      <div className="h-[100%] pt-[5%] items-center">
        <div className="flex flex-col w-[100%] pt-[5%] pr-[5%] pb-[5%] pl-[10%]">
          <div className="text-6xl md:text-3xl font-bold">
            <span>{title}</span>
          </div>
          <div className="text-2xl font-semibold pt-5">
            <span>{role}</span>
          </div>
          <div className="text-xl pt-2">
            <span>{description}</span>
          </div>
        </div>
      </div>
      <div className="text-xl font-semibold p-[5%]">
        <span>{contentType}</span>
      </div>
    </section>
  );
};

export default TextContent;
