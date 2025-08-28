import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PayrollTypeSetup from "./pages/PayRoll/PayrollTypeSetup";
import NotFound from "./pages/NotFound";
import Job from "./pages/recruitment/Job";
import Candidate from "./pages/recruitment/Candidate";
import Termination from "./pages/recruitment/Termination";
import Layout from "./components/layout/Layout";
import Course from "./pages/Course";
import Template_Master from "./pages/Template_Master";
import EmpPaySetup from "./pages/PayRoll/Emppaysetup"
import PayrollSetup from "./pages/PayRoll/Payrollsetup";
import Cpf_Levy from "./pages/PayRoll/Cpf_Levy";
import Booking from "./pages/Booking/Booking";
import MailBox from "./pages/MailBox";
import Employees from "./pages/Employees/Employees";
import AddEmployeeForm from "./pages/Employees/AddEmployeeForm";
import EditEmployeeForm from "./pages/Employees/EditEmployeeForm";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            {/* Wrap all dashboard pages inside Layout */}
            <Route
              path="/"
              element={
                <Layout>
                  <Index />
                </Layout>
              }
            />
            
            <Route
              path="/recruitment/job"
              element={
                <Layout>
                  <Job />
                </Layout>
              }
            />
            <Route
              path="/recruitment/candidate"
              element={
                <Layout>
                  <Candidate />
                </Layout>
              }
            />
            <Route
              path="/recruitment/termination"
              element={
                <Layout>
                  <Termination />
                </Layout>
              }
            />
             <Route
              path="/courses"
              element={
                <Layout>
                  <Course />
                </Layout>
              }
            />
            <Route
              path="/employees"
              element={
                <Layout>
                  <Employees />
                </Layout>
              }
            />
            <Route
              path="employees/add"
              element={
                <Layout>
                  <AddEmployeeForm  />
                </Layout>
              }
            />
            <Route
              path="employees/update/:id"
              element={
                <Layout>
                  <EditEmployeeForm  />
                </Layout>
              }
            />
            <Route
              path="/templates"
              element={
                <Layout>
                  <Template_Master />
                </Layout>
              }
            />
            <Route
              path="/payroll/payrolltypesetup"
              element={
                <Layout>
                  <PayrollTypeSetup />
                </Layout>
              }
            />
            <Route
              path="/payroll/payrollsetup"
              element={
                <Layout>
                  <PayrollSetup />
                </Layout>
              }
            />
            <Route
              path="/payroll/emppaysetup"
              element={
                <Layout>
                  < EmpPaySetup/>
                </Layout>
              }
            />
            <Route
              path="/payroll/cpf/levy"
              element={
                <Layout>
                  < Cpf_Levy/>
                </Layout>
              }
            />
            <Route
              path="/booking"
              element={
                <Layout>
                  < Booking/>
                </Layout>
              }
            />
            <Route
              path="/mailbox"
              element={
                <Layout>
                  < MailBox/>
                </Layout>
              }
            />

            {/* Fallback route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
