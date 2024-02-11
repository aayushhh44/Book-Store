import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";


const BooksTable = ({ books }) => {
  return (
    <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr className="bg-slate-700 text-white">
              <th className="py-2 px-4">No</th>
              <th className="py-2 px-4">Title</th>
              <th className="py-2 px-4">Author</th>
              <th className="py-2 px-4">Publish Year</th>
              <th className="py-2 px-4">Operations</th>
            </tr>
          </thead>

          <tbody>
            {books.map((book, index) => (
              <tr key={book._id} className="h-8">
                <td className="border border-slate-700 rounded-md text-center">{index + 1}</td>
                <td className="border border-slate-700 rounded-md text-center">{book.title}</td>
                <td className="border border-slate-700 rounded-md text-center">{book.author}</td>
                <td className="border border-slate-700 rounded-md text-center">{book.publishYear}</td>
                <td className="border border-slate-700 rounded-md text-center">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/books/details/${book._id}`}>
                      <BsInfoCircle className="text-2xl text-green-800" />
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <AiOutlineEdit className="text-2xl text-yellow-800" />
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <MdOutlineDelete className="text-2xl text-red-600" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  )
}

export default BooksTable