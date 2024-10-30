import { SkillContent } from "../database/SkillContent";


const Skill = () => {
  return ( 
   <div className="flex bg-blue-700 py-14 justify-evenly">
    {
      SkillContent.map((pics,id) => (
      <div key={id}>
      <img src={pics.img} alt='photo' />
      <h3 className="text-lg font-bold">{pics.title}</h3>
      <h4 className="w-64">{pics.desp}</h4>
      </div>
      ))
    }
   </div>
   );
}
 
export default Skill;