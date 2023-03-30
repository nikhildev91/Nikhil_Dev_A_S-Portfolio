import React from 'react';

function AddSkills() {
  return (
    <div>
      <div className="border-gray-300 border-b-4 text-4xl font-bold">
        Add Skill
      </div>

      <div className="flex items-center justify-between p-10">
        <div className="w-[50%] m-5">
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Name"
            className="bg-gray-100"
            style={{ width: '100%', padding: '10px' }}
          />
        </div>
        <div className="w-[50%]">
          <label htmlFor="">Image</label>
          <input
            type="file"
            placeholder="Image"
            className="bg-gray-100"
            style={{ width: '100%', padding: '10px' }}
          />
        </div>
      </div>
      <div className="flex items-center justify-center p-10">
        <button className="bg-blue-400 p-5 rounded-xl w-full text-lg text-white font-bold">
          Submit
        </button>
      </div>

      <div className="border-gray-300 border-b-4 text-4xl font-bold mt-10">
        Skills
      </div>
      <div className="mt-5">
        <table className="w-full">
          <tr className="">
            <th className="bg-gray-200 w-[25%] p-5">Image</th>
            <th className="bg-gray-200 w-[25%] p-5">Name</th>
            <th className="bg-gray-200 w-[25%] p-5">Delete Action</th>
          </tr>
          <tr>
            <td className="bg-gray-200 w-[25%] text-center p-5">
              Alfreds Futterkiste
            </td>
            <td className="bg-gray-200 w-[25%] text-center p-5">
              Alfreds Futterkiste
            </td>
            <td className="bg-gray-200 w-[25%] text-center p-5">
              <button className="bg-red-400 p-1 w-full rounded-lg">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td className="bg-gray-200 w-[25%] text-center p-5">
              Alfreds Futterkiste
            </td>
            <td className="bg-gray-200 w-[25%] text-center p-5">
              Alfreds Futterkiste
            </td>
            <td className="bg-gray-200 w-[25%] text-center p-5">
              Alfreds Futterkiste
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default AddSkills;
