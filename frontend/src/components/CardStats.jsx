function CardStats({ icon: Icon, value, title, subtitle }) {
  return (
    <div className="bg-[#0a1b2d] p-4 rounded-lg flex flex-col justify-between min-h-[120px]">
      <Icon className="text-emerald-300 mb-2" size={26} />

      <div className="text-gray-400 leading-tight min-h-[50px]">
        <span className="text-2xl text-white font-bold leading-none block">{value}</span>

        <span className="text-sm block">
          {title}
          <span className="block">{subtitle}</span>
        </span>
      </div>
    </div>
  );
}

export default CardStats;
