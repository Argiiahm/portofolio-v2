import { Github } from "lucide-react";

function CardProject() {
  return (
    <div className="bg-[#0d223f] rounded-md w-full max-w-md my-5">
      <div className="w-full h-52 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg"
          alt="Project"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6">
        <h2 className="text-white text-xl font-semibold mt-4">
          E-Commerce Platform
        </h2>

        <p className="text-gray-300 mt-2 leading-relaxed">
          A full-featured e-commerce site with product management, user
          authentication, and a Stripe-integrated checkout process.
        </p>

        <div className="flex flex-wrap gap-4 text-sm text-gray-300 mt-4">
          <span className="font-medium">Next.js</span>
          <span className="font-medium">TypeScript</span>
          <span className="font-medium">Tailwind CSS</span>
          <span className="font-medium">PostgreSQL</span>
          <span className="font-medium">Stripe</span>
        </div>

        <div className="flex items-center gap-3 mt-6">
          <button className="flex cursor-pointer items-center gap-2 px-4 py-2 bg-[#0f2a43] text-white rounded-lg hover:bg-[#12324e] transition">
            <span>
              <Github />
            </span>
            Source
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardProject;
