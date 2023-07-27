import React, { useState } from "react";
import ChatBot from "./ChatBot";
import { Document, Page, pdfjs } from "react-pdf";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

export const Home = () => {
  const [path, setPath] = useState("");

  const HandeChange = (e) => {
    setPath(e.target.value);
  };

  console.log(path);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 mt-4">
            <div className="row mt-4 mb-2">
              <div className="col-md-6">
                <h2 className="text-primary">PDF Viewer</h2>
              </div>
              <div className="col-md-6">
                <select
                  class="form-select"
                  aria-label="Default select example"
                  onChange={(e) => HandeChange(e)}
                >
                   {/* changes started by rahul */}
                  <option selected>Select Your Pdf</option>
                  <option value="CS002">CSOO2</option>
                  <option value="sample">sample</option>
                  <option value= "Bca2nd">Bca2nd</option>
                  <option value = "cancelticket">cancelticket</option>
                  <option value = "Complete_with_DocuSign_Shivani_Gupta_ReDesi">Complete_with_DocuSign_Shivani_Gupta_ReDesi</option>
                  <option value = "sample2">sample2</option>
                  {/* end */}
                </select>
              </div>
            </div>

            <div>
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <div
                  style={{
                    border: "1px solid rgba(0, 0, 0, 0.3)",
                    height: "750px",
                  }}
                >
                  {path ? (
                    <Viewer fileUrl={`${path}.pdf`} />
                  ) : (
                    <div
                      class="alert alert-info d-flex align-items-center"
                      role="alert"
                      style={{marginTop:"40%",width:"250px",marginLeft:"35%"}}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
                        viewBox="0 0 16 16"
                        role="img"
                        aria-label="Warning:"
                      >
                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                      </svg>
                      <div>Please Select a PDF</div>
                    </div>
                  )}
                </div>
              </Worker>
            </div>
          </div>
          <div className="col-md-6">
            <ChatBot />
          </div>
        </div>
      </div>
    </>
  );
};
