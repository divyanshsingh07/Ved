const demoProjects = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    title: "Project One",
    description: "A short description of project one."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    title: "Project Two",
    description: "A short description of project two."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    title: "Project Three",
    description: "A short description of project three."
  }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">My Portfolio</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {demoProjects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-zinc-800 rounded-xl shadow border overflow-hidden flex flex-col">
              <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h2>
                <p className="text-gray-700 dark:text-zinc-300 flex-1">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 