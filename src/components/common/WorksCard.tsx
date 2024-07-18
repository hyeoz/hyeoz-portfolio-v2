export function WorksCard({
  image,
  title,
  desc,
  stack,
  onClick,
}: {
  image: string;
  title: string;
  desc: string;
  stack: string[];
  onClick: () => void;
}) {
  return (
    <div
      className="backdrop-blur-md flex flex-col h-[450px] border rounded-xl p-4 mobile:p-2 justify-between cursor-pointer hover:translate-y-[-20px] transition-all"
      style={{
        backgroundColor: 'rgba(255,255,255,0.4)',
      }}
      onClick={() => onClick()}
    >
      <img
        src={image}
        alt={`image-${title}`}
        className="w-full h-[300px] mobile:h-[200px] object-cover object-top"
      />
      <div className="flex flex-col justify-between">
        <div>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
        <p className="text-[#4f5bd5]">{stack.map((st) => `#${st} `)}</p>
      </div>
    </div>
  );
}
