import React, { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

interface NewEmployee {
  photo?: File;
  name: string;
  fatherName: string;
  dob: string;
  gender: string;
  phone: string;
  localAddress: string;
  permanentAddress: string;
  employeeId: string;
  department: string;
  designation: string;
  doj: string;
  joiningSalary: string;
  accountHolder: string;
  accountNumber: string;
  bankName: string;
  ifsc: string;
  pan: string;
  resume?: File;
  offerLetter?: File;
  joiningLetter?: File;
  contract?: File;
  idProof?: File;
}

const EditEmployeeForm: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<NewEmployee>({
    name: "",
    fatherName: "",
    dob: "",
    gender: "",
    phone: "",
    localAddress: "",
    permanentAddress: "",
    employeeId: "",
    department: "",
    designation: "",
    doj: "",
    joiningSalary: "",
    accountHolder: "",
    accountNumber: "",
    bankName: "",
    ifsc: "",
    pan: "",
  });

  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (files) {
      const file = files[0];
      setForm((prev) => ({ ...prev, [name]: file }));
      if (name === "photo") {
        setPhotoPreview(URL.createObjectURL(file));
      }
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("New Employee Data:", form);
    alert("Employee data Updated  successfully!");
    navigate("/employees");
  };

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
      {/* Sticky Header for Mobile */}
      <div className="bg-purple-700 text-white px-4 py-3 rounded-md mb-6 sticky top-0 z-10 shadow-md">
        <h2 className="text-lg md:text-xl font-semibold text-center md:text-left">
          Add New Employee
        </h2>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 md:p-6 max-w-6xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Details */}
          <section className="border rounded-md shadow-sm">
            <div className="bg-red-600 text-white px-4 py-2 rounded-t-md text-sm md:text-base font-medium">
              Personal Details
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Photo Upload */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 md:w-40 md:h-40 border rounded bg-gray-100 flex items-center justify-center overflow-hidden">
                  {photoPreview ? (
                    <img
                      src={photoPreview}
                      alt="Preview"
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <span className="text-gray-400 text-xs md:text-sm">
                      No Photo
                    </span>
                  )}
                </div>
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  onChange={handleChange}
                  className="mt-2 text-xs md:text-sm"
                />
                <p className="text-xs text-red-600 mt-1 text-center">
                  NOTE: Image size must be 872px × 724px
                </p>
              </div>

              {/* Inputs */}
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Employee Name"
                  className="border p-2 rounded"
                  required
                />
                <input
                  name="fatherName"
                  value={form.fatherName}
                  onChange={handleChange}
                  placeholder="Father's Name"
                  className="border p-2 rounded"
                />
                <input
                  name="dob"
                  type="date"
                  value={form.dob}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />
                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  className="border p-2 rounded"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Contact Number"
                  className="border p-2 rounded"
                />
                <textarea
                  name="localAddress"
                  value={form.localAddress}
                  onChange={handleChange}
                  placeholder="Local Address"
                  rows={2}
                  className="border p-2 rounded"
                />
                <textarea
                  name="permanentAddress"
                  value={form.permanentAddress}
                  onChange={handleChange}
                  placeholder="Permanent Address"
                  rows={2}
                  className="border p-2 rounded sm:col-span-2"
                />
              </div>
            </div>
          </section>

          {/* Company Details */}
          <section className="border rounded-md shadow-sm">
            <div className="bg-red-600 text-white px-4 py-2 rounded-t-md text-sm md:text-base font-medium">
              Company Details
            </div>
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="employeeId"
                value={form.employeeId}
                onChange={handleChange}
                placeholder="Employee ID"
                className="border p-2 rounded"
                required
              />
              <input
                name="department"
                value={form.department}
                onChange={handleChange}
                placeholder="Department"
                className="border p-2 rounded"
              />
              <input
                name="designation"
                value={form.designation}
                onChange={handleChange}
                placeholder="Designation"
                className="border p-2 rounded"
              />
              <input
                name="doj"
                type="date"
                value={form.doj}
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <input
                name="joiningSalary"
                value={form.joiningSalary}
                onChange={handleChange}
                placeholder="Joining Salary"
                className="border p-2 rounded"
              />
            </div>
          </section>

          {/* Bank Account Details */}
          <section className="border rounded-md shadow-sm">
            <div className="bg-red-600 text-white px-4 py-2 rounded-t-md text-sm md:text-base font-medium">
              Bank Account Details
            </div>
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="accountHolder"
                value={form.accountHolder}
                onChange={handleChange}
                placeholder="Account Holder Name"
                className="border p-2 rounded"
              />
              <input
                name="accountNumber"
                value={form.accountNumber}
                onChange={handleChange}
                placeholder="Account Number"
                className="border p-2 rounded"
              />
              <input
                name="bankName"
                value={form.bankName}
                onChange={handleChange}
                placeholder="Bank Name"
                className="border p-2 rounded"
              />
              <input
                name="ifsc"
                value={form.ifsc}
                onChange={handleChange}
                placeholder="IFSC Code"
                className="border p-2 rounded"
              />
              <input
                name="pan"
                value={form.pan}
                onChange={handleChange}
                placeholder="PAN Number"
                className="border p-2 rounded"
              />
            </div>
          </section>

          {/* Documents */}
          <section className="border rounded-md shadow-sm">
            <div className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-t-md text-sm md:text-base font-medium">
              Documents
            </div>
            <div className="p-4 space-y-4">
              {[
                { label: "Resume", name: "resume" },
                { label: "Offer Letter", name: "offerLetter" },
                { label: "Joining Letter", name: "joiningLetter" },
                { label: "Contract and Agreement", name: "contract" },
                { label: "ID Proof", name: "idProof" },
              ].map((doc) => (
                <div key={doc.name} className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <label className="sm:w-40 text-gray-700 text-sm font-medium">
                    {doc.label}
                  </label>
                  <div className="flex-1 flex w-full sm:w-auto">
                    <input
                      type="file"
                      name={doc.name}
                      onChange={handleChange}
                      className="hidden"
                      id={doc.name}
                    />
                    <label
                      htmlFor={doc.name}
                      className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 bg-white cursor-pointer text-gray-500 text-sm truncate"
                    >
                      {form[doc.name as keyof NewEmployee]
                        ? (form[doc.name as keyof NewEmployee] as File).name
                        : ""}
                    </label>
                    <label
                      htmlFor={doc.name}
                      className="bg-gray-200 text-gray-700 px-4 py-2 rounded-r-md cursor-pointer text-sm"
                    >
                      Select file
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Submit Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-3">
            <button
              type="button"
              onClick={() => navigate("/employees")}
              className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded w-full sm:w-auto"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded w-full sm:w-auto"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEmployeeForm;
