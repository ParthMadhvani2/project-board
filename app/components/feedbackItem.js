export default function FeedbackItem(){
    return(
        <div className="my-8 flex gap-8 items-center">
        <div>
          <h2 className="font-bold">Please build more projects</h2>
          <p className="text-gray-600 text-sm">Lorem survived not let sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div>
          <button className="shadow-sm shadow-gray-200 border rounded-md py-1 px-4 flex items-center gap-1 text-gray-600">
          <span className="triangle-vote-up"></span>
            80
          </button>
        </div>
        </div>
    )
}