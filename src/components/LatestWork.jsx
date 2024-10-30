import { work } from "../database/SkillContent";

const LatestWork = () => {
  return (
    <>
      <h2 className="flex justify-center text-3xl font-semibold text-black">
        Latest work
      </h2>

      <div className="grid grid-cols-3 grid-rows-2 gap-2">
        {work.map((pics, id) => (
          <div key={id}>
            <img src={pics.img} alt="photo" />
            <h2 className="font-bold">{pics.title}</h2>
            <h3>{pics.desp}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default LatestWork;
