export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          NEXA
        </h1>
        <p className="text-2xl mb-2 text-gray-600 dark:text-gray-400">
          Next + Intelligence + Action
        </p>
        <p className="text-xl mb-8 text-gray-500 dark:text-gray-500">
          AI Coding Ecosystem Platform
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">🛠️ Tools</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Powerful development tools for every need
            </p>
          </div>

          <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">🤖 Agents</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Intelligent agents to automate workflows
            </p>
          </div>

          <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">🔌 MCP</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Model Context Protocol integration
            </p>
          </div>

          <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">⚡ Skills</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Extensible skills for your AI assistant
            </p>
          </div>
        </div>

        <div className="mt-12">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            Get Started
          </button>
        </div>
      </main>
    </div>
  );
}
