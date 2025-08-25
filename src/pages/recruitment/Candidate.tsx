import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Upload } from "lucide-react"; // icon
interface Candidate {
  id: number;
  name: string;
  date: string;
  applicationNo?: string;
  department?: string;
  email?: string;
  mobile?: string;
}

const Candidate: React.FC = () => {
  // ====== States ======
  const [formData, setFormData] = useState<any>({
    courseName: "",
    from: "",
    to: "",
    organisationName: "",
    qualification: "",
    jobTitle: "",
    companyName: "",
    empFrom: "",
    empTo: "",
    responsibilities: "",
    certificationName: "",
    issuedBy: "",
    certFrom: "",
    certTo: "",
    certDescription: "",
  });

  const [candidates] = useState<Candidate[]>([
    {
      id: 1,
      name: "ASIK",
      date: "28/08/2017",
      applicationNo: "APP001",
      department: "IT",
      email: "asik@gmail.com",
      mobile: "+65 12345678",
    },
    {
      id: 2,
      name: "Kannan",
      date: "28/08/2014",
      applicationNo: "APP002",
      department: "HR",
      email: "kannan@gmail.com",
      mobile: "+65 87654321",
    },
    {
      id: 3,
      name: "Sidhik",
      date: "28/08/2018",
      applicationNo: "APP003",
      department: "Finance",
      email: "sidhik@gmail.com",
      mobile: "+65 11223344",
    },
  ]);

  const tabs = [
    "Particulars",
    "Education/Employment",
    "Pass Details",
    "Family Details",
    "Health Declaration",
    "Self Declaration",
    "Notices",
  ];

  const [activeTab, setActiveTab] = useState("Particulars");
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(
    null
  );
  // Handle input changes
return (
  <>
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

    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-green-500 text-white p-4 rounded-lg shadow text-center">
          <h2 className="text-lg md:text-xl font-bold">3</h2>
          <p className="text-sm md:text-base">Total Employee</p>
        </div>
        <div className="bg-green-400 text-white p-4 rounded-lg shadow text-center">
          <h2 className="text-lg md:text-xl font-bold">2</h2>
          <p className="text-sm md:text-base">Today Working</p>
        </div>
        <div className="bg-orange-400 text-white p-4 rounded-lg shadow text-center">
          <h2 className="text-lg md:text-xl font-bold">1</h2>
          <p className="text-sm md:text-base">Today MC</p>
        </div>
        <div className="bg-red-500 text-white p-4 rounded-lg shadow text-center">
          <h2 className="text-lg md:text-xl font-bold">2</h2>
          <p className="text-sm md:text-base">Contractor</p>
        </div>
      </div>

      {/* Search Section */}
      <div className="bg-teal-400 p-4 rounded-lg mb-6">
        <form className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center">
          <label className="text-white text-sm md:text-base">
            Candidate Name:
          </label>
          <input
            type="text"
            placeholder="Enter name"
            className="p-2 rounded border w-full sm:w-auto"
          />
          <input
            type="date"
            className="p-2 rounded border w-full sm:w-auto"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded w-full sm:w-auto">
            Submit
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Candidate List */}
        <div className="bg-white p-4 rounded-lg shadow overflow-x-auto">
          <h3 className="font-bold text-lg mb-4">Candidate Details</h3>
          <button className="bg-green-500 text-white px-4 py-2 rounded mb-4 w-full sm:w-auto">
            + Add New
          </button>
          <table className="w-full border text-sm md:text-base min-w-[500px]">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">SLNO</th>
                <th className="p-2 border">Candidate Name</th>
                <th className="p-2 border">Date</th>
                <th className="p-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((c) => (
                <tr key={c.id}>
                  <td className="border p-2">{c.id}</td>
                  <td className="border p-2">{c.name}</td>
                  <td className="border p-2">{c.date}</td>
                  <td className="border p-2 text-center">
                    <button
                      onClick={() => setSelectedCandidate(c)}
                      className="bg-blue-500 text-white px-2 py-1 rounded text-xs md:text-sm"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

          {/* Candidate Form with Tabs */}
          <div className="bg-white p-4 rounded-lg shadow">
  <h3 className="font-bold text-lg mb-4">Candidate Details</h3>

  {!selectedCandidate ? (
    <p className="text-gray-500 text-sm sm:text-base">
      👈 Please select a candidate
    </p>
  ) : (
    <>
      {/* Tabs */}
      <div className="flex border-b mb-4 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 sm:px-4 py-2 -mb-px border-b-2 font-medium text-sm sm:text-base transition-colors ${
              activeTab === tab
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-blue-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
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
                  <label className="font-medium text-sm sm:text-base">
                    Application No.
                  </label>
                  <input
                    type="text"
                    value={selectedCandidate.applicationNo}
                    readOnly
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="font-medium text-sm sm:text-base">
                    Date/Time
                  </label>
                  <input
                    type="text"
                    placeholder="MM/DD/YYYY"
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div>
                  <label className="font-medium text-sm sm:text-base">
                    Position Applied
                  </label>
                  <input
                    type="text"
                    placeholder="Enter position"
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="font-medium text-sm sm:text-base">
                    Department
                  </label>
                  <input
                    type="text"
                    value={selectedCandidate.department}
                    readOnly
                    className="w-full p-2 border rounded"
                  />
                </div>

                {/* Full Name / Nationality / NRIC */}
                <div>
                  <label className="font-medium text-sm sm:text-base">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={selectedCandidate.name}
                    readOnly
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="font-medium text-sm sm:text-base">
                    Nationality
                  </label>
                  <select className="w-full p-2 border rounded">
                    <option>Singapore</option>
                    <option>India</option>
                    <option>Malaysia</option>
                  </select>
                </div>
                <div>
                  <label className="font-medium text-sm sm:text-base">
                    NRIC / FIN
                  </label>
                  <input
                    type="text"
                    placeholder="G*******Q"
                    className="w-full p-2 border rounded"
                  />
                </div>

                {/* DOB, Age, Gender */}
                <div>
                  <label className="font-medium text-sm sm:text-base">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="font-medium text-sm sm:text-base">Age</label>
                  <input
                    type="number"
                    placeholder="Age"
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="font-medium text-sm sm:text-base">
                    Gender
                  </label>
                  <select className="w-full p-2 border rounded">
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div>
                  <label className="font-medium text-sm sm:text-base">
                    Race
                  </label>
                  <input
                    type="text"
                    placeholder="Race"
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="font-medium text-sm sm:text-base">
                    Religion
                  </label>
                  <select className="w-full p-2 border rounded">
                    <option>Muslim</option>
                    <option>Hindu</option>
                    <option>Christian</option>
                  </select>
                </div>

                {/* Address & Contact */}
                <div className="col-span-1 md:col-span-2">
                  <label className="font-medium text-sm sm:text-base">
                    Residence Address
                  </label>
                  <input
                    type="text"
                    placeholder="Address"
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="font-medium text-sm sm:text-base">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    placeholder="Postal Code"
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div>
                  <label className="font-medium text-sm sm:text-base">
                    Email ID
                  </label>
                  <input
                    type="email"
                    value={selectedCandidate.email}
                    readOnly
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="font-medium text-sm sm:text-base">
                    Home Telephone
                  </label>
                  <input
                    type="text"
                    placeholder="+65 98765432"
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="font-medium text-sm sm:text-base">
                    Mobile
                  </label>
                  <input
                    type="text"
                    value={selectedCandidate.mobile}
                    readOnly
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>
            )}
            
                      {activeTab === "Education/Employment" && (
  <div className="p-4 space-y-6">
    {/* ---------------- Education Section ---------------- */}
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
        <div>
          <label className="block mb-1">Course Name</label>
          <input type="text" className="border p-2 w-full rounded" />
        </div>
        <div>
          <label className="block mb-1">From</label>
          <input type="text" className="border p-2 w-full rounded" />
        </div>
        <div>
          <label className="block mb-1">Organisation Name</label>
          <input type="text" className="border p-2 w-full rounded" />
        </div>
        <div>
          <label className="block mb-1">To</label>
          <input type="text" className="border p-2 w-full rounded" />
        </div>
        <div className="col-span-1 sm:col-span-2">
          <label className="block mb-1">Qualification Obtained</label>
          <input type="text" className="border p-2 w-full rounded" />
        </div>
      </div>
      <div className="flex gap-2 mt-2 flex-wrap">
        <button className="bg-green-500 text-white px-3 py-2 rounded">+</button>
        <button className="bg-yellow-500 text-white px-3 py-2 rounded">⟳</button>
      </div>
    </div>

    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 min-w-[600px]">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="border border-gray-300 p-2">Course Name</th>
            <th className="border border-gray-300 p-2">Organisation Name</th>
            <th className="border border-gray-300 p-2">From</th>
            <th className="border border-gray-300 p-2">To</th>
            <th className="border border-gray-300 p-2">Qualification Obtained</th>
            <th className="border border-gray-300 p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Secondary / SPM</td>
            <td className="border p-2">Jurong Secondary School, Singapore</td>
            <td className="border p-2">1995</td>
            <td className="border p-2">2000</td>
            <td className="border p-2">Secondary level</td>
            <td className="border p-2 flex gap-2 justify-center flex-wrap">
              <button className="bg-blue-500 text-white px-2 py-1 rounded">✎</button>
              <button className="bg-red-500 text-white px-2 py-1 rounded">🗑</button>
            </td>
          </tr>
          {/* Repeat other rows */}
        </tbody>
      </table>
    </div>

    {/* ---------------- Employment Section ---------------- */}
    <div className="mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
        <div>
          <label className="block mb-1">Do you intent to study further?</label>
          <div className="flex gap-4 flex-wrap">
            <label><input type="radio" name="studyFurther" /> Yes</label>
            <label><input type="radio" name="studyFurther" /> No</label>
          </div>
        </div>
        <div>
          <label className="block mb-1">Specify</label>
          <input type="text" className="border p-2 w-full rounded" />
        </div>
        <div>
          <label className="block mb-1">Computer Literacy</label>
          <div className="flex gap-4 flex-wrap">
            <label><input type="radio" name="computerLiteracy" /> Yes</label>
            <label><input type="radio" name="computerLiteracy" /> No</label>
          </div>
        </div>
      </div>

      <h3 className="font-semibold underline mb-2">Employment History</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
        <div>
          <label className="block mb-1">Employer Name</label>
          <input type="text" className="border p-2 w-full rounded" />
        </div>
        <div>
          <label className="block mb-1">Start Date</label>
          <input type="text" className="border p-2 w-full rounded" />
        </div>
        <div>
          <label className="block mb-1">Job Position</label>
          <input type="text" className="border p-2 w-full rounded" />
        </div>
        <div>
          <label className="block mb-1">End Date</label>
          <input type="text" className="border p-2 w-full rounded" />
        </div>
        <div>
          <label className="block mb-1">Last Salary</label>
          <input type="text" className="border p-2 w-full rounded" />
        </div>
        <div>
          <label className="block mb-1">Reason for Leaving</label>
          <input type="text" className="border p-2 w-full rounded" />
        </div>
      </div>

      <div className="flex gap-2 mt-2 flex-wrap">
        <button className="bg-green-500 text-white px-3 py-2 rounded">+</button>
        <button className="bg-yellow-500 text-white px-3 py-2 rounded">⟳</button>
      </div>
    </div>

    <div className="overflow-x-auto mt-4">
      <table className="w-full border-collapse border border-gray-300 min-w-[600px]">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="border p-2">Employer Name</th>
            <th className="border p-2">Start Date</th>
            <th className="border p-2">End Date</th>
            <th className="border p-2">Job Position</th>
            <th className="border p-2">Last Salary</th>
            <th className="border p-2">Reason For Leaving</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">ACBC Logistics Pte Ltd Singapore</td>
            <td className="border p-2">01/05/2017</td>
            <td className="border p-2">31/12/2020</td>
            <td className="border p-2">Logistics Supervisor</td>
            <td className="border p-2">$4200</td>
            <td className="border p-2">Career growth</td>
            <td className="border p-2 flex gap-2 justify-center flex-wrap">
              <button className="bg-blue-500 text-white px-2 py-1 rounded">✎</button>
              <button className="bg-red-500 text-white px-2 py-1 rounded">🗑</button>
            </td>
          </tr>
          {/* Repeat other rows */}
        </tbody>
      </table>
    </div>

    <div className="mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1">Current / Last Gross Salary($)</label>
          <input type="text" className="border p-2 w-full rounded" />
        </div>
        <div>
          <label className="block mb-1">Salary Expected($)</label>
          <input type="text" className="border p-2 w-full rounded" />
        </div>
        <div>
          <label className="block mb-1">Spoken Language's</label>
          <input type="text" className="border p-2 w-full rounded" />
        </div>
        <div>
          <label className="block mb-1">Written Language's</label>
          <input type="text" className="border p-2 w-full rounded" />
        </div>
        <div className="col-span-1 sm:col-span-2">
          <label className="block mb-1">If selected, When can you start</label>
          <input type="text" className="border p-2 w-full rounded" />
        </div>
      </div>
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

    <div className="flex gap-2 mt-2 flex-wrap">
      <button className="bg-green-500 text-white px-3 py-2 rounded">＋</button>
      <button className="bg-yellow-500 text-white px-3 py-2 rounded">⟳</button>
    </div>

    {/* ---------------- Pass Table ---------------- */}
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 min-w-[600px] mt-4">
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
              <span className="bg-green-500 text-white px-2 py-1 rounded">Pass</span>
            </td>
            <td className="border p-2 flex gap-2 justify-center flex-wrap">
              <button className="bg-blue-500 text-white px-2 py-1 rounded">＋</button>
              <button className="bg-red-500 text-white px-2 py-1 rounded">🗑</button>
              <button className="bg-green-500 text-white px-2 py-1 rounded">✎</button>
            </td>
          </tr>
          <tr>
            <td className="border p-2">India Driving License</td>
            <td className="border p-2">12/05/2019</td>
            <td className="border p-2">18/05/2019</td>
            <td className="border p-2">18/06/2019</td>
            <td className="border p-2">
              <span className="bg-green-500 text-white px-2 py-1 rounded">Pass</span>
            </td>
            <td className="border p-2 flex gap-2 justify-center flex-wrap">
              <button className="bg-blue-500 text-white px-2 py-1 rounded">＋</button>
              <button className="bg-red-500 text-white px-2 py-1 rounded">🗑</button>
              <button className="bg-green-500 text-white px-2 py-1 rounded">✎</button>
            </td>
          </tr>
          <tr>
            <td className="border p-2">Singapore Driving License</td>
            <td className="border p-2">12/05/2019</td>
            <td className="border p-2">18/05/2019</td>
            <td className="border p-2">18/06/2019</td>
            <td className="border p-2">
              <span className="bg-green-500 text-white px-2 py-1 rounded">Pass</span>
            </td>
            <td className="border p-2 flex gap-2 justify-center flex-wrap">
              <button className="bg-blue-500 text-white px-2 py-1 rounded">＋</button>
              <button className="bg-red-500 text-white px-2 py-1 rounded">🗑</button>
              <button className="bg-green-500 text-white px-2 py-1 rounded">✎</button>
            </td>
          </tr>
          <tr>
            <td className="border p-2">Bigfoot HQ</td>
            <td className="border p-2">12/05/2019</td>
            <td className="border p-2">18/05/2019</td>
            <td className="border p-2">18/06/2019</td>
            <td className="border p-2">
              <span className="bg-green-500 text-white px-2 py-1 rounded">Pass</span>
            </td>
            <td className="border p-2 flex gap-2 justify-center flex-wrap">
              <button className="bg-blue-500 text-white px-2 py-1 rounded">＋</button>
              <button className="bg-red-500 text-white px-2 py-1 rounded">🗑</button>
              <button className="bg-green-500 text-white px-2 py-1 rounded">✎</button>
            </td>
          </tr>
          <tr>
            <td className="border p-2">GLS</td>
            <td className="border p-2">12/05/2019</td>
            <td className="border p-2">18/05/2019</td>
            <td className="border p-2">18/06/2019</td>
            <td className="border p-2">
              <span className="bg-green-500 text-white px-2 py-1 rounded">Pass</span>
            </td>
            <td className="border p-2 flex gap-2 justify-center flex-wrap">
              <button className="bg-blue-500 text-white px-2 py-1 rounded">＋</button>
              <button className="bg-red-500 text-white px-2 py-1 rounded">🗑</button>
              <button className="bg-green-500 text-white px-2 py-1 rounded">✎</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)}


                      {activeTab === "Family Details" && (
  <div className="p-4">
    <h2 className="text-lg font-semibold mb-4">
      Family details for {selectedCandidate.name}
    </h2>

    {/* Form Section */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
      <input
        type="text"
        placeholder="Emergency Contact Person"
        className="border rounded p-2 w-full"
      />
      <input
        type="text"
        placeholder="Relationship"
        className="border rounded p-2 w-full"
      />
      <input
        type="text"
        placeholder="Contact Number"
        className="border rounded p-2 w-full"
      />
      <div className="flex items-center space-x-2 col-span-1 sm:col-span-3 flex-wrap mt-2">
        <button className="bg-green-500 text-white px-3 py-1 rounded">+</button>
        <button className="bg-orange-500 text-white px-3 py-1 rounded">⟳</button>
      </div>
    </div>

    {/* Table Section */}
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border min-w-[500px]">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="p-2 border">Emergency Contact Person</th>
            <th className="p-2 border">Relationship</th>
            <th className="p-2 border">Contact Number</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border">A</td>
            <td className="p-2 border">Father</td>
            <td className="p-2 border">87654321</td>
            <td className="p-2 border flex space-x-2 flex-wrap">
              <button className="bg-blue-500 text-white px-2 py-1 rounded">✎</button>
              <button className="bg-red-500 text-white px-2 py-1 rounded">🗑</button>
            </td>
          </tr>
          <tr>
            <td className="p-2 border">B</td>
            <td className="p-2 border">Brother</td>
            <td className="p-2 border">87654321</td>
            <td className="p-2 border flex space-x-2 flex-wrap">
              <button className="bg-blue-500 text-white px-2 py-1 rounded">✎</button>
              <button className="bg-red-500 text-white px-2 py-1 rounded">🗑</button>
            </td>
          </tr>
          <tr>
            <td className="p-2 border">C</td>
            <td className="p-2 border">Brother</td>
            <td className="p-2 border">87654321</td>
            <td className="p-2 border flex space-x-2 flex-wrap">
              <button className="bg-blue-500 text-white px-2 py-1 rounded">✎</button>
              <button className="bg-red-500 text-white px-2 py-1 rounded">🗑</button>
            </td>
          </tr>
          <tr>
            <td className="p-2 border">D</td>
            <td className="p-2 border">Friend</td>
            <td className="p-2 border">87654321</td>
            <td className="p-2 border flex space-x-2 flex-wrap">
              <button className="bg-blue-500 text-white px-2 py-1 rounded">✎</button>
              <button className="bg-red-500 text-white px-2 py-1 rounded">🗑</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)}

                      {activeTab === "Health Declaration" && (
  <div className="p-4">
    <h2 className="text-lg font-semibold mb-4">
      Health declaration for {selectedCandidate.name}...
    </h2>

    <p className="mb-2 text-sm">
      You may be required to submit medical reports
      (expenses to be borne by you) for any health
      declarations below
    </p>

    {/* Table for Question 1 */}
    <div className="overflow-x-auto mb-6">
      <table className="table-auto w-full border border-gray-300 min-w-[500px]">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="p-2 text-left w-3/4">Question</th>
            <th className="p-2 text-center w-1/4">Action</th>
          </tr>
        </thead>
        <tbody>
          {[
            { id: "main", text: "Do you have any medical problem or physical disability?" },
            { id: "a", text: "Skin, ears, nose, throat, eye - e.g. hearing problems, otitis media, sinusitis, cataract, night blindness, blurred vision?" },
            { id: "b1", text: "Stomach, intestines, liver, gall bladder, pancreas - e.g. diabetes, piles, hernia, cirrhosis?" },
            { id: "c", text: "Lungs, bones, joints - e.g. asthma, bronchitis, slipped disc, fractures, muscular dystrophy?" },
            { id: "d", text: "Heart, brain, mental or nervous disorder - e.g. low/high BP, stroke, fits, migraine, depression?" },
            { id: "e", text: "Lymphatic system - e.g. gout, thyroid?" },
            { id: "f", text: "Cancer, tumor, growth of any kind?" },
          ].map((item) => (
            <tr key={item.id} className="border-t border-gray-300">
              <td className="p-2 align-top">{item.text}</td>
              <td className="p-2 text-center">
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                  <label className="flex items-center gap-2">
                    <input type="radio" name={item.id} value="Yes" /> Yes
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name={item.id} value="No" /> No
                  </label>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Separate Table for Question 2 */}
    <div className="overflow-x-auto">
      <table className="table-auto w-full border border-gray-300 min-w-[500px]">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="p-2 text-left w-3/4">Question</th>
            <th className="p-2 text-center w-1/4">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-300">
            <td className="p-2 align-top">
              2) Do you have any implants - for example: pacemaker, stent or implant?
            </td>
            <td className="p-2 text-center">
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                <label className="flex items-center gap-2">
                  <input type="radio" name="implants" value="Yes" /> Yes
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="implants" value="No" /> No
                </label>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)}


  {activeTab === "Self Declaration" && (
  <div className="p-4">
    <h2 className="text-lg font-bold mb-3">Self Declaration for {selectedCandidate.name}</h2>

    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 min-w-[500px]">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="border border-gray-300 px-4 py-2 text-left">Source Of Recruitment</th>
            <th className="border border-gray-300 px-4 py-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody className="text-sm">
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
              <td className="border border-gray-300 px-4 py-2">{question}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
                  <label className="flex items-center gap-2">
                    <input type="radio" name={`q${index}`} value="Yes" /> Yes
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name={`q${index}`} value="No" /> No
                  </label>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <p className="mt-4 text-sm">
      I, (Name), hereby certify that the above information furnished by me is true,
      complete and accurate to the best of my knowledge. I further understand that
      any wilful act on my part in withholding information or making any false
      statement in this Employment Application is sufficient ground for dismissal
      from the Company.
    </p>

    <h3 className="mt-4 font-bold underline">DATA PROTECTION ACT 2012 (PDPA)</h3>
    <h3 className="mt-2 font-bold">BIG FOOT WOULD LIKE TO HAVE YOUR CONSENT AS FOLLOWS</h3>

    <p className="mt-2 text-sm">
      I hereby authorise, agree and consent to allow Big Foot Logistics Pte Ltd and its
      employees, agents, customers and third party service providers to collect, use
      disclose and/or process personal data about me that I now provide Big Foot
      Logistics Pte Ltd in this form, in connection with my job application to work in
      Big Foot Logistics Pte Ltd for the purpose of employment and all administrations
      related to my work deployment, training, passes and security matters under the
      terms required by the Company.
    </p>
  </div>
)}




{activeTab === "Notices" && (
  <div className="p-6">
    <h2 className="text-xl font-bold mb-4">Notices for {selectedCandidate.name}</h2>

    {/* Form Section */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
      {/* Document Type */}
      <div>
        <label className="block text-sm font-medium mb-1">Document Type</label>
        <div className="flex flex-wrap gap-2">
          <select className="border border-gray-300 rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-400">
            <option>Change of Personal</option>
            <option>Employment Cessation</option>
            <option>Faulty Pass Replacement</option>
          </select>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            +
          </button>
        </div>
      </div>

      {/* Date */}
      <div>
        <label className="block text-sm font-medium mb-1">Date</label>
        <input
          type="date"
          className="border border-gray-300 rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-400"
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
            <Upload className="h-8 w-8 text-blue-500 mb-2" />
            <span className="text-sm text-gray-600">Click to upload or drag & drop</span>
            <span className="text-xs text-gray-400">PDF, PNG, JPG (max 5MB)</span>
          </label>
        </div>
      </div>
    </div>

    {/* Table Section */}
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-300 rounded-lg shadow-sm min-w-[500px]">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="border border-gray-300 px-4 py-3 text-left text-sm">
              Document Name
            </th>
            <th className="border border-gray-300 px-4 py-3 text-center text-sm">
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
              <td className="border border-gray-300 px-4 py-3 text-sm">{doc}</td>
              <td className="border border-gray-300 px-4 py-3 text-center flex flex-wrap justify-center gap-3">
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                  📄
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
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



                    </motion.div>
                  </AnimatePresence>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Candidate;
