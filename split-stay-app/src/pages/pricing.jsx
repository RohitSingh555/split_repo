import React, { useState } from "react";
import SectionText from "../components/SectionText";
import { HomeButtons_Hollow } from "../components/HomeButtons";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="container mx-auto pt-52">
      <div className="flex flex-col items-center ">
        <SectionText
          title="Fair and transparent pricing with no
        hidden commitments and fees"
          className=" m-auto text-center text-2xl font-medium"
          description="see like  minded individuals that share  "
        />
        <div className="relative font-inter antialiased">
          <main className="relative  flex flex-col justify-center bg-slate-50 overflow-hidden pt-12">
            <div className="w-full max-w-6xl mx-auto px-4 md:px-6 ">
              <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">
                {/* Pricing tab 1 */}
                <div className="h-full shadow shadow-blue-500/40 md:shadow-indigo-500/40">
    <div className="relative flex flex-col h-full p-6 rounded-2xl shadow shadow-blue-500/40 md:shadow-indigo-500/40">
        {/* Pricing tab 1 content */}
        <div className="mb-5">
            <div className="text-slate-900 font-semibold mb-1">
                Basic Plan
            </div>
            <div className="inline-flex items-baseline mb-2">
                <span className="text-slate-900 font-bold text-3xl">₦</span>
                <span className="text-slate-900 font-bold text-4xl" x-text="isAnnual ? '79' : '85'">50K</span>
                <span className="text-slate-500 font-medium">/ Month</span>
            </div>
            <div className="text-sm text-slate-500 mb-5 pt-12">
                Company payroll from ₦1m.
            </div>
        </div>

        <ul className="text-slate-600 text-sm space-y-3 grow">
            <li className="flex items-center">
                <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>This feature is available for you.</span>
            </li>
            <li className="flex items-center">
                <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Full time view on your analytics.</span>
            </li>
            <li className="flex items-center">
                <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Real time with our support team.</span>
            </li>
            <li className="flex items-center">
                <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Some amount of users for this plan.</span>
            </li>
            <li className="flex items-center">
                <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>This feature is available for you.</span>
            </li>
        </ul>
        <HomeButtons_Hollow className="py-3 px-10 mt-10 fw-lighter" onClick={() => console.log("Signup clicked")}>
            Subscribe
        </HomeButtons_Hollow>
    </div>
</div>


                {/* Pricing tab 2 */}
                <div className=" h-full shadow shadow-blue-500/40 md:shadow-indigo-500/40">
                  <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white   shadow shadow-slate-950/5">
                    <div className="absolute top-0 right-0 mr-6 -mt-4">
                      <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm shadow-slate-950/5">
                        Pro Plan
                      </div>
                    </div>
                    <div className="mb-5">
                      <div className="text-slate-900  font-semibold mb-1">
                        Perform
                      </div>
                      <div className="inline-flex items-baseline mb-2">
                        <span className="text-slate-900  font-bold text-3xl">
                          ₦
                        </span>
                        <span
                          className="text-slate-900  font-bold text-4xl"
                          x-text="isAnnual ? '79' : '85'"
                        >
                          50K{" "}
                        </span>
                        <span className="text-slate-500 font-medium">
                          / Month
                        </span>
                      </div>
                      <div className="text-sm text-slate-500 mb-5 pt-12">
                        Company payroll from ₦1m
                      </div>
                    </div>

                    <ul className="text-slate-600  text-sm space-y-3 grow">
                      <li class="flex items-center">
                        <svg
                          class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>This feature is available for you.</span>
                      </li>
                      <li class="flex items-center">
                        <svg
                          class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Full time view on your analytics.</span>
                      </li>
                      <li class="flex items-center">
                        <svg
                          class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Real time with our support team.</span>
                      </li>
                      <li class="flex items-center">
                        <svg
                          class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Some amount of users for this plan.</span>
                      </li>
                      <li class="flex items-center">
                        <svg
                          class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>This feature is available for you.</span>
                      </li>
                    </ul>
                    <HomeButtons_Hollow
                      className="py-3 px-10 mt-10 fw-lighter "
                      onClick={() => console.log("Signup clicked")}
                    >
                      Subscribe
                    </HomeButtons_Hollow>
                  </div>
                </div>

                {/* Pricing tab 3 */}
                <div className="h-full shadow shadow-blue-500/40 md:shadow-indigo-500/40">
                  <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white   shadow shadow-slate-950/5">
                    <div className="mb-5">
                      <div className="text-slate-900  font-semibold mb-1">
                        Business Plan
                      </div>
                      <div className="inline-flex items-baseline mb-2">
                        <span className="text-slate-900  font-bold text-3xl">
                          ₦
                        </span>
                        <span
                          className="text-slate-900  font-bold text-4xl"
                          x-text="isAnnual ? '79' : '85'"
                        >
                          50K{" "}
                        </span>
                        <span className="text-slate-500 font-medium">
                          / Month
                        </span>
                      </div>
                      <div className="text-sm text-slate-500 mb-5 pt-12">
                        Company payroll from ₦1m
                      </div>
                    </div>

                    <ul className="text-slate-600  text-sm space-y-3 grow">
                      <li class="flex items-center">
                        <svg
                          class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>This feature is available for you.</span>
                      </li>
                      <li class="flex items-center">
                        <svg
                          class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Full time view on your analytics.</span>
                      </li>
                      <li class="flex items-center">
                        <svg
                          class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Real time with our support team.</span>
                      </li>
                      <li class="flex items-center">
                        <svg
                          class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Some amount of users for this plan.</span>
                      </li>
                      <li class="flex items-center">
                        <svg
                          class="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>This feature is available for you.</span>
                      </li>
                    </ul>
                    <HomeButtons_Hollow
                      className="py-3 px-10 mt-10 fw-lighter "
                      onClick={() => console.log("Signup clicked")}
                    >
                      Subscribe
                    </HomeButtons_Hollow>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
