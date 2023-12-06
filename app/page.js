import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-white md:max-w-2xl mx-auto md:shadow-lg md:rounded-lg md:mt-8 overflow-hidden">
      <div className="bg-gradient-to-r from-cyan-200 to-blue-300 p-8">
        <h1 className="font-bold text-xl">Coding with Parth</h1>
        <p className="text-opacity-90 text-slate-700">Help me decide what should I build next or how can i improve</p>
      </div>
      <div className="bg-gray-100 px-8 py-2 flex border-b">
        <div className="grow"></div>
        <div>
          <button className="bg-blue-400 py-1 px-4 rounded-md text-white text-opacity-90">Make a Suggestion</button>
        </div>
      </div>
      <div className="px-8 py-4">
        <div className="flex gap-8 items-center">
        <div>
          <h2>Please build more projects</h2>
          <p className="text-gray-600 text-sm">Lorem survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        
        <div>
          <button className="shadow-sm shadow-gray-200 border rounded-md py-1 px-4">
          
            80
            </button>
        </div>
        </div>
      </div>
    </main>
  )
}
