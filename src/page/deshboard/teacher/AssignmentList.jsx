/* eslint-disable react/prop-types */

const AssignmentList = ({classDetails}) => {
    return (
        <div className=" px-8 py-6">
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full border-collapse text-sm">
          <thead>
            <tr className="text-left bg-blue-500 text-white">
              <th className="px-4 py-2">Assignment Title</th>
              <th className="px-4 py-2">Assignment Deadline</th>
              <th className="px-4 py-2">Assignment Description</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {classDetails.map((assignment, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-4 py-2">{assignment.title}</td>
                <td className="px-4 py-2">{assignment.deadline}</td>
                <td className="px-4 py-2">{assignment.description}</td>
                <td className="px-4 py-2 space-y-2">
                  <button className="btn btn-sm w-full btn-primary">Edit</button>
                  <button className="btn btn-sm w-full btn-error">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default AssignmentList;