import CardSkils from "./CardSkils"

function Skils() {
  return (
    <div className="p-4 mt-10 bg-[#0d223f] rounded-lg">
        <h1 className="text-white font-semibold text-2xl mb-3">Experience & Learning</h1>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4">
           <CardSkils value="Html"/>
           <CardSkils value="Css"/>
           <CardSkils value="Javascript"/>
           <CardSkils value="Laravel"/>
           <CardSkils value="Express"/>
           <CardSkils value="Flutter"/>
           <CardSkils value="React"/>
           <CardSkils value="VB Net"/>
           <CardSkils value="Mysql"/>
           <CardSkils value="Tailwind"/>
           <CardSkils value="Canva"/>
           <CardSkils value="Figma"/>
        </div>
    </div>
  )
}

export default Skils