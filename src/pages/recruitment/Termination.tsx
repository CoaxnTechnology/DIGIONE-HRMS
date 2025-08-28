import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";
import { Upload } from "lucide-react";
interface Candidate {
  id: number;
  name: string;
  role: string;
  department: string;
  date: string;
  applicationNo: string;
   email?: string;
  mobile?: string;
}

const Termination: React.FC = () => {
  const [candidates] = useState<Candidate[]>([
    {
      id: 1,
      name: "ASIK",
      role: "Web Developer",
      department: "IT",
      date: "28/08/2017",
      applicationNo: "APP001",
    },
    {
      id: 2,
      name: "Kannan",
      role: "Software Developer",
      department: "HR",
      date: "28/08/2014",
      applicationNo: "APP002",
    },
    {
      id: 3,
      name: "Sidhik",
      role: "Accounts",
      department: "Finance",
      date: "28/08/2018",
      applicationNo: "APP003",
    },
  ]);
  const tabs = [
    "Particulars",
    "Pass Details",
    "Self Declaration",
    "Notices",
    "Reason For Termination",
  ];

  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(
    null
  );
  const [activeTab, setActiveTab] = useState("Particulars");

  return (
    
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
      {/* ✅ Top Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-green-500 text-white p-4 rounded-lg shadow text-center">
          <h2 className="text-2xl font-bold">3</h2>
          <p>Total Employee</p>
        </div>
        <div className="bg-green-400 text-white p-4 rounded-lg shadow text-center">
          <h2 className="text-2xl font-bold">2</h2>
          <p>Today Working</p>
        </div>
        <div className="bg-orange-400 text-white p-4 rounded-lg shadow text-center">
          <h2 className="text-2xl font-bold">1</h2>
          <p>Today MC</p>
        </div>
        <div className="bg-red-500 text-white p-4 rounded-lg shadow text-center">
          <h2 className="text-2xl font-bold">2</h2>
          <p>Contractor</p>
        </div>
      </div>

      {/* ✅ Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ✅ Left Side: Employee List */}
        <div className="bg-white p-4 rounded shadow">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
            <h2 className="font-bold text-lg">Termination Employee Lists</h2>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2 w-full sm:w-auto justify-center">
              <FaUserPlus /> Add New
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-sm sm:text-base">
              <thead>
                <tr className="bg-blue-500 text-white text-left">
                  <th className="px-3 py-2 border">SLNO</th>
                  <th className="px-3 py-2 border">Candidate Name</th>
                  <th className="px-3 py-2 border">Date</th>
                  <th className="px-3 py-2 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {candidates.map((c, i) => (
                  <tr key={c.id} className="border text-center">
                    <td className="px-3 py-2 border">{i + 1}</td>
                    <td className="px-3 py-2 border">{c.name}</td>
                    <td className="px-3 py-2 border">{c.date}</td>
                    <td className="px-3 py-2 border">
                      <button
                        onClick={() => setSelectedCandidate(c)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm sm:text-base"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ✅ Right Side: Candidate Details */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-4">Candidate Details</h3>

          {!selectedCandidate ? (
            <p className="text-gray-500">👈 Please select a Employee</p>
          ) : (
            <>
              {/* Tabs */}
              <div className="flex border-b mb-4 overflow-x-auto scrollbar-hide">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 -mb-px border-b-2 font-medium transition-colors ${
                      activeTab === tab
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-blue-600"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Candidate Info */}
              <div className="relative h-[400px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -50, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-[400px] overflow-y-auto scrollbar-hide pt-4"
                  >
                   {activeTab === "Particulars" && (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Application Info */}
    <div>
      <label className="font-medium">Application No.</label>
      <input
        type="text"
        value={selectedCandidate.applicationNo}
        readOnly
        className="w-full p-2 border rounded"
      />
    </div>
    <div>
      <label className="font-medium">Date/Time</label>
      <input
        type="text"
        placeholder="MM/DD/YYYY"
        className="w-full p-2 border rounded"
      />
    </div>

    <div>
      <label className="font-medium">Position Applied</label>
      <input
        type="text"
        placeholder="Enter position"
        className="w-full p-2 border rounded"
      />
    </div>
    <div>
      <label className="font-medium">Department</label>
      <input
        type="text"
        value={selectedCandidate.department}
        readOnly
        className="w-full p-2 border rounded"
      />
    </div>

    {/* Full Name / Nationality / NRIC */}
    <div>
      <label className="font-medium">Full Name</label>
      <input
        type="text"
        value={selectedCandidate.name}
        readOnly
        className="w-full p-2 border rounded"
      />
    </div>
    <div>
      <label className="font-medium">Nationality</label>
      <select className="w-full p-2 border rounded">
        <option>Singapore</option>
        <option>India</option>
        <option>Malaysia</option>
      </select>
    </div>
    <div>
      <label className="font-medium">NRIC / FIN</label>
      <input
        type="text"
        placeholder="G*******Q"
        className="w-full p-2 border rounded"
      />
    </div>

    {/* DOB, Age, Gender */}
    <div>
      <label className="font-medium">Date of Birth</label>
      <input type="date" className="w-full p-2 border rounded" />
    </div>
    <div>
      <label className="font-medium">Age</label>
      <input
        type="number"
        placeholder="Age"
        className="w-full p-2 border rounded"
      />
    </div>
    <div>
      <label className="font-medium">Gender</label>
      <select className="w-full p-2 border rounded">
        <option>Male</option>
        <option>Female</option>
      </select>
    </div>
    <div>
      <label className="font-medium">Race</label>
      <input
        type="text"
        placeholder="Race"
        className="w-full p-2 border rounded"
      />
    </div>
    <div>
      <label className="font-medium">Religion</label>
      <select className="w-full p-2 border rounded">
        <option>Muslim</option>
        <option>Hindu</option>
        <option>Christian</option>
      </select>
    </div>

    {/* Address & Contact */}
    <div className="col-span-1 md:col-span-2">
      <label className="font-medium">Residence Address</label>
      <input
        type="text"
        placeholder="Address"
        className="w-full p-2 border rounded"
      />
    </div>
    <div>
      <label className="font-medium">Postal Code</label>
      <input
        type="text"
        placeholder="Postal Code"
        className="w-full p-2 border rounded"
      />
    </div>

    <div>
      <label className="font-medium">Email ID</label>
      <input
        type="email"
        value={selectedCandidate.email}
        readOnly
        className="w-full p-2 border rounded"
      />
    </div>
    <div>
      <label className="font-medium">Home Telephone</label>
      <input
        type="text"
        placeholder="+65 98765432"
        className="w-full p-2 border rounded"
      />
    </div>
    <div>
      <label className="font-medium">Mobile</label>
      <input
        type="text"
        value={selectedCandidate.mobile}
        readOnly
        className="w-full p-2 border rounded"
      />
    </div>
  </div>
)}

{activeTab === "Pass Details" && (
  <div className="p-4 space-y-6">
    {/* ---------------- Pass Entry Form ---------------- */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-end">
      <div>
        <label className="block mb-1">Type of Pass</label>
        <select className="border p-2 w-full rounded">
          <option>Passport</option>
          <option>India Driving License</option>
          <option>Singapore Driving License</option>
          <option>Bigfoot HQ</option>
          <option>GLS</option>
        </select>
      </div>
      <div>
        <label className="block mb-1">Issued Date</label>
        <input type="date" className="border p-2 w-full rounded" />
      </div>
      <div>
        <label className="block mb-1">Expiry Date</label>
        <input type="date" className="border p-2 w-full rounded" />
      </div>
      <div>
        <label className="block mb-1">Issued By</label>
        <input type="text" className="border p-2 w-full rounded" />
      </div>
    </div>

    <div className="flex gap-2 mt-2">
      <button className="bg-green-500 text-white px-3 py-2 rounded">
        ＋
      </button>
      <button className="bg-yellow-500 text-white px-3 py-2 rounded">
        ⟳
      </button>
    </div>

    {/* ---------------- Pass Table ---------------- */}
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 mt-4 min-w-[600px]">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="border p-2">Pass Name</th>
            <th className="border p-2">Apply Date</th>
            <th className="border p-2">Issued Date</th>
            <th className="border p-2">Expiry Date</th>
            <th className="border p-2">Issued By</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Passport</td>
            <td className="border p-2">12/05/2019</td>
            <td className="border p-2">18/05/2019</td>
            <td className="border p-2">18/06/2019</td>
            <td className="border p-2">
              <span className="bg-green-500 text-white px-2 py-1 rounded">
                Pass
              </span>
            </td>
            <td className="border p-2 flex gap-2 justify-center">
              <button className="bg-blue-500 text-white px-2 py-1 rounded">
                ＋
              </button>
              <button className="bg-red-500 text-white px-2 py-1 rounded">
                🗑
              </button>
              <button className="bg-green-500 text-white px-2 py-1 rounded">
                ✎
              </button>
            </td>
          </tr>
          <tr>
            <td className="border p-2">India Driving License</td>
            <td className="border p-2">12/05/2019</td>
            <td className="border p-2">18/05/2019</td>
            <td className="border p-2">18/06/2019</td>
            <td className="border p-2">
              <span className="bg-green-500 text-white px-2 py-1 rounded">
                Pass
              </span>
            </td>
            <td className="border p-2 flex gap-2 justify-center">
              <button className="bg-blue-500 text-white px-2 py-1 rounded">
                ＋
              </button>
              <button className="bg-red-500 text-white px-2 py-1 rounded">
                🗑
              </button>
              <button className="bg-green-500 text-white px-2 py-1 rounded">
                ✎
              </button>
            </td>
          </tr>
          <tr>
            <td className="border p-2">Singapore Driving License</td>
            <td className="border p-2">12/05/2019</td>
            <td className="border p-2">18/05/2019</td>
            <td className="border p-2">18/06/2019</td>
            <td className="border p-2">
              <span className="bg-green-500 text-white px-2 py-1 rounded">
                Pass
              </span>
            </td>
            <td className="border p-2 flex gap-2 justify-center">
              <button className="bg-blue-500 text-white px-2 py-1 rounded">
                ＋
              </button>
              <button className="bg-red-500 text-white px-2 py-1 rounded">
                🗑
              </button>
              <button className="bg-green-500 text-white px-2 py-1 rounded">
                ✎
              </button>
            </td>
          </tr>
          <tr>
            <td className="border p-2">Bigfoot HQ</td>
            <td className="border p-2">12/05/2019</td>
            <td className="border p-2">18/05/2019</td>
            <td className="border p-2">18/06/2019</td>
            <td className="border p-2">
              <span className="bg-green-500 text-white px-2 py-1 rounded">
                Pass
              </span>
            </td>
            <td className="border p-2 flex gap-2 justify-center">
              <button className="bg-blue-500 text-white px-2 py-1 rounded">
                ＋
              </button>
              <button className="bg-red-500 text-white px-2 py-1 rounded">
                🗑
              </button>
              <button className="bg-green-500 text-white px-2 py-1 rounded">
                ✎
              </button>
            </td>
          </tr>
          <tr>
            <td className="border p-2">GLS</td>
            <td className="border p-2">12/05/2019</td>
            <td className="border p-2">18/05/2019</td>
            <td className="border p-2">18/06/2019</td>
            <td className="border p-2">
              <span className="bg-green-500 text-white px-2 py-1 rounded">
                Pass
              </span>
            </td>
            <td className="border p-2 flex gap-2 justify-center">
              <button className="bg-blue-500 text-white px-2 py-1 rounded">
                ＋
              </button>
              <button className="bg-red-500 text-white px-2 py-1 rounded">
                🗑
              </button>
              <button className="bg-green-500 text-white px-2 py-1 rounded">
                ✎
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)}

{activeTab === "Self Declaration" && (
  <div className="p-4">
    <h2 className="text-base md:text-lg font-bold mb-3">
      Self Declaration for {selectedCandidate.name}
    </h2>

    {/* Responsive Table Wrapper */}
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-xs sm:text-sm">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left">
              Source Of Recruitment
            </th>
            <th className="border border-gray-300 px-2 sm:px-4 py-2 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            "Are you willing to work 12-hour rotating shift?",
            "Have you been involved in any major road traffic accident?",
            "Do you have any past criminal records?",
            "Have you been charged for any drug-related offence?",
            "Are you a discharged/undischarged bankrupt?",
            "Do you have any tattoos piercings?",
            "Are you a smoker?",
          ].map((question, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-2 sm:px-4 py-2">{question}</td>
              <td className="border border-gray-300 px-2 sm:px-4 py-2 text-center">
                <div className="flex justify-center items-center gap-4 sm:gap-6">
                  <label className="flex items-center gap-1 sm:gap-2">
                    <input type="radio" name={`q${index}`} value="Yes" /> Yes
                  </label>
                  <label className="flex items-center gap-1 sm:gap-2">
                    <input type="radio" name={`q${index}`} value="No" /> No
                  </label>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <p className="mt-4 text-xs sm:text-sm leading-relaxed">
      I, (Name), hereby certify that the above information furnished by me is true,
      complete and accurate to the best of my knowledge. I further understand that
      any wilful act on my part in withholding information or making any false
      statement in this Employment Application is sufficient ground for dismissal
      from the Company.
    </p>

    <h3 className="mt-4 font-semibold underline text-sm sm:text-base">
      DATA PROTECTION ACT 2012 (PDPA)
    </h3>
    <h3 className="mt-2 font-semibold text-sm sm:text-base">
      BIG FOOT WOULD LIKE TO HAVE YOUR CONSENT AS FOLLOWS
    </h3>

    <p className="mt-2 text-xs sm:text-sm leading-relaxed">
      I hereby authorise, agree and consent to allow Big Foot Logistics Pte Ltd and its
      employees, agents, customers and third party service providers to collect, use,
      disclose and/or process personal data about me that I now provide Big Foot
      Logistics Pte Ltd in this form, in connection with my job application to work in
      Big Foot Logistics Pte Ltd for the purpose of employment and all administrations
      related to my work deployment, training, passes and security matters under the
      terms required by the Company.
    </p>
  </div>
)}

{activeTab === "Notices" && (
  <div className="p-4 sm:p-6">
    <h2 className="text-lg sm:text-xl font-bold mb-4">
      Notices for {selectedCandidate.name}
    </h2>

    {/* Form Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
      {/* Document Type */}
      <div>
        <label className="block text-sm font-medium mb-1">Document Type</label>
        <div className="flex gap-2">
          <select className="border border-gray-300 rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-400 text-sm sm:text-base">
            <option>Change of Personal</option>
            <option>Employment Cessation</option>
            <option>Faulty Pass Replacement</option>
          </select>
          <button className="bg-green-500 text-white px-3 sm:px-4 py-2 rounded hover:bg-green-600">
            +
          </button>
        </div>
      </div>

      {/* Date */}
      <div>
        <label className="block text-sm font-medium mb-1">Date</label>
        <input
          type="date"
          className="border border-gray-300 rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
        />
      </div>

      {/* File Upload */}
      <div>
        <label className="block text-sm font-medium mb-1">Upload Document</label>
        <div className="border-2 border-dashed border-gray-400 rounded-lg p-4 text-center bg-gray-50 hover:bg-gray-100 cursor-pointer transition">
          <input type="file" id="fileUpload" className="hidden" />
          <label
            htmlFor="fileUpload"
            className="flex flex-col items-center justify-center cursor-pointer"
          >
            <Upload className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500 mb-2" />
            <span className="text-xs sm:text-sm text-gray-600">
              Click to upload or drag & drop
            </span>
            <span className="text-[10px] sm:text-xs text-gray-400">
              PDF, PNG, JPG (max 5MB)
            </span>
          </label>
        </div>
      </div>
    </div>

    {/* Table Section */}
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-300 rounded-lg shadow-sm text-sm sm:text-base">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm">
              Document Name
            </th>
            <th className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            "Change of Personal Data Form",
            "Employment Cessation Clearance",
            "Faulty Pass Replacement",
          ].map((doc, idx) => (
            <tr
              key={idx}
              className="hover:bg-gray-50 transition-colors duration-150"
            >
              <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">
                {doc}
              </td>
              <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-center flex justify-center gap-2 sm:gap-3">
                <button className="bg-blue-500 text-white px-2 sm:px-3 py-1 rounded hover:bg-blue-600 text-xs sm:text-sm">
                  📄
                </button>
                <button className="bg-red-500 text-white px-2 sm:px-3 py-1 rounded hover:bg-red-600 text-xs sm:text-sm">
                  🗑
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)}
{activeTab === "Reason For Termination" && (
  <div className="p-4">
    <h2 className="text-lg font-bold mb-4">Reason For Termination</h2>

    {/* Form Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Type of Reason */}
      <div>
        <label className="block font-semibold mb-1">Type of Reason</label>
        <div className="flex gap-2">
          <select className="w-full border rounded px-2 py-2">
            <option>Termination Letter</option>
            <option>Resignation</option>
            <option>Retirement</option>
          </select>
          <button className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600">
            +
          </button>
        </div>
      </div>

      {/* Reason */}
      <div>
        <label className="block font-semibold mb-1">Reason</label>
        <div className="flex gap-2">
          <textarea
            className="w-full border rounded px-2 py-2 h-[60px]"
            placeholder="Enter reason..."
          />
          <div className="flex flex-col gap-2">
            <button className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600">
              +
            </button>
            <button className="bg-yellow-500 text-white px-3 py-2 rounded hover:bg-yellow-600">
              ⟳
            </button>
          </div>
        </div>
      </div>

      {/* Date */}
      <div>
        <label className="block font-semibold mb-1">Date</label>
        <input
          type="date"
          className="w-full border rounded px-2 py-2"
          placeholder="MM/DD/YYYY"
        />
      </div>
    </div>

    {/* Table Section */}
    <div className="mt-6 overflow-x-auto">
      <table className="w-full border border-gray-300 text-sm">
        <thead>
          <tr className="bg-sky-500 text-white">
            <th className="border px-4 py-2 text-left">Document Name</th>
            <th className="border px-4 py-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Termination Letter</td>
            <td className="border px-4 py-2 text-center">
              <div className="flex justify-center gap-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                  ✎
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                  🗑
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)}

                  </motion.div>
                </AnimatePresence>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Termination;
