import React from "react";
import { FaUserPlus } from "react-icons/fa";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { useNavigate } from "react-router-dom";

export default function Employees() {
  const navigate = useNavigate();

  const employees = [
    {
      id: "698389800",
      name: "Aliza Zulauf",
      department: "PHP",
      designation: "Fresher PHP Developer",
      atWork: "8 month 8 day",
      status: "active",
      image: "https://i.pravatar.cc/100?img=1",
    },
    {
      id: "274838983",
      name: "Kolby Waters",
      department: "PHP",
      designation: "Fresher PHP Developer",
      atWork: "4 month 30 day",
      status: "active",
      image: "https://i.pravatar.cc/100?img=2",
    },
    {
      id: "927080138",
      name: "Jordan Kovacek",
      department: "Android Developer",
      designation: "Fresher Android Developer",
      atWork: "21 day",
      status: "active",
      image: "https://i.pravatar.cc/100?img=3",
    },
    {
      id: "440290440",
      name: "Delores Schneider",
      department: "Android Developer",
      designation: "Senior Android Developer",
      atWork: "4 month 28 day",
      status: "active",
      image: "https://i.pravatar.cc/100?img=4",
    },
  ];

  // Function to export Excel
  const exportToExcel = () => {
    const dataForExport = employees.map(({ image, ...rest }) => rest);
    const worksheet = XLSX.utils.json_to_sheet(dataForExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Employees");
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(data, "Employees_List.xlsx");
  };

  return (
    <div className="p-3 md:p-6 bg-gray-50 min-h-screen">
      {/* Add New Employee */}
      <button
        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg mb-3 text-sm md:text-base"
        onClick={() => navigate("/employees/add")}
      >
        <FaUserPlus /> Add New Employee
      </button>

      {/* Employees List Card */}
      <div className="border rounded-lg shadow bg-white">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center bg-blue-500 text-white p-3 md:p-4 rounded-t-lg gap-3">
          <h2 className="font-semibold flex items-center gap-2 text-base md:text-lg">
            <span className="text-lg md:text-xl">👥</span> Employees List
          </h2>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-3 items-start sm:items-center text-xs md:text-sm w-full lg:w-auto">
            {/* Records dropdown */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <select className="border rounded px-2 py-1 text-black text-xs md:text-sm w-full sm:w-auto">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
              <span className="text-white">records</span>
            </div>

            {/* Search */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <span>Search:</span>
              <input
                type="text"
                placeholder="Search employees"
                className="border rounded px-2 py-1 text-black text-xs md:text-sm w-full sm:w-auto"
              />
            </div>

            {/* Export */}
            <button
              onClick={exportToExcel}
              className="bg-orange-500 hover:bg-orange-600 text-white text-xs md:text-sm px-3 py-1 md:px-4 md:py-2 rounded w-full sm:w-auto"
            >
              Export
            </button>
          </div>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-xs md:text-sm lg:text-base min-w-[700px]">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 md:p-3 lg:p-4 border">EmployeeID</th>
                <th className="p-2 md:p-3 lg:p-4 border">Image</th>
                <th className="p-2 md:p-3 lg:p-4 border">Name</th>
                <th className="p-2 md:p-3 lg:p-4 border">Dept / Designation</th>
                <th className="p-2 md:p-3 lg:p-4 border">At Work</th>
                <th className="p-2 md:p-3 lg:p-4 border">Status</th>
                <th className="p-2 md:p-3 lg:p-4 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp, i) => (
                <tr
                  key={emp.id}
                  className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"} text-xs md:text-sm lg:text-base`}
                >
                  <td className="p-2 md:p-3 lg:p-4 border whitespace-nowrap">{emp.id}</td>
                  <td className="p-2 md:p-3 lg:p-4 border">
                    <img
                      src={emp.image}
                      alt={emp.name}
                      className="w-8 h-8 md:w-12 md:h-12 rounded-full object-cover"
                    />
                  </td>
                  <td className="p-2 md:p-3 lg:p-4 border whitespace-nowrap">{emp.name}</td>
                  <td className="p-2 md:p-3 lg:p-4 border">
                    <p className="font-semibold">{emp.department}</p>
                    <p className="text-gray-600">{emp.designation}</p>
                  </td>
                  <td className="p-2 md:p-3 lg:p-4 border whitespace-nowrap">{emp.atWork}</td>
                  <td className="p-2 md:p-3 lg:p-4 border">
                    <span className="px-2 py-1 text-[10px] md:text-xs lg:text-sm font-semibold rounded bg-green-100 text-green-700">
                      {emp.status}
                    </span>
                  </td>
                  <td className="p-2 md:p-3 lg:p-4 border">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <button
                        onClick={() => navigate("/employees/update/:id")}
                        className="bg-purple-600 hover:bg-purple-700 text-white text-[10px] md:text-xs lg:text-sm px-2 py-1 md:px-3 md:py-2 rounded"
                      >
                        View / Edit
                      </button>
                      <button className="bg-red-500 hover:bg-red-600 text-white text-[10px] md:text-xs lg:text-sm px-2 py-1 md:px-3 md:py-2 rounded">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center md:justify-end mt-4">
        <nav className="inline-flex rounded-md shadow-sm -space-x-px">
          <button className="px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-100">
            Previous
          </button>
          <button className="px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-100">
            1
          </button>
          <button className="px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-100">
            2
          </button>
          <button className="px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-100">
            3
          </button>
          <button className="px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-100">
            Next
          </button>
        </nav>
      </div>
    </div>
  );
}
