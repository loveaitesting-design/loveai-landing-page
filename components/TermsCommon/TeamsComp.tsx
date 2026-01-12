import { ChevronLeft } from "lucide-react";
import Link from "next/link";

interface Terms {
  headText: string;
  MainText: {
    title: string;
    description: Array<{
      parts: Array<{
        type?: string;
        value: string;
      }>;
    }>;
  };
  array: Array<{
    title?: string;
    subTitle?: string;
    description: Array<{
      parts: Array<{
        type?: string;
        value: string;
        mail?: boolean;
      }>;
    }>;
  }>;
}

interface TeamsCompProps {
  terms: Terms;
}

const TeamsComp: React.FC<TeamsCompProps> = ({ terms }) => {
  return (
    <>
      {/* Header Banner */}
    
  <div className="text-center mb-12 mt-6">
              <h1 className="text-sky-400 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[50px] mb-4">
            {terms.headText}
              </h1>
             
            </div>
          <div className="border-[20px] border-sky-400 rounded-2xl p-6 max-w-6xl mx-auto bg-white/60 backdrop-blur-sm mt-[10px] mb-[46px]">

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-[46px] pb-[46px] space-y-[30px]">
          {/* Main Section */}
          <div className="space-y-3">
            <h2 className="text-black text-justify font-medium leading-[120%] text-xl sm:text-2xl md:text-[25px]">
              {terms.MainText.title}
            </h2>
            {terms.MainText?.description?.map((entry, idx) => (
              <p
                key={`main-${idx}`}
                className="text-black font-normal text-base sm:text-lg md:text-[22px] leading-[120%]"
              >
                {entry.parts.map((part, i) => {
                  if (part.type === "bold")
                    return (
                      <span className="font-medium" key={i}>
                        {part.value}
                      </span>
                    );
                  return <span key={i}>{part.value}</span>;
                })}
              </p>
            ))}
          </div>

          {/* Sections */}
          {terms.array.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-5"
            >
              {section.title && (
                <h2 className="text-black font-bold leading-[120%] text-xl sm:text-2xl md:text-[25px]">
                  {section.title}
                </h2>
              )}
              {section.subTitle && (
                <h3 className="text-black leading-[120%] text-[19px] sm:text-[22px] md:text-[21px]">
                  {section.subTitle}
                </h3>
              )}

              <ul className="space-y-3">
                {section.description.map((entry, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {/* Filled sky-400 bullet */}

                    <span className="text-black font-normal text-base sm:text-lg md:text-[18px] leading-[120%]">
                      {entry.parts.map((part, j) => {
                        if ("mail" in part && part.mail) {
                          return (
                            <a
                              key={j}
                              href={`mailto:${part.value}`}
                              className="text-sky-400 underline"
                            >
                              {part.value}
                            </a>
                          );
                        } else if (part.type === "bold") {
                          return (
                            <span className="font-medium" key={j}>
                              {part.value}
                            </span>
                          );
                        } else {
                          return (
                            <span
                              dangerouslySetInnerHTML={{ __html: part.value }}
                              key={j}
                            />
                          );
                        }
                      })}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default TeamsComp;
