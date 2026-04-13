import React from 'react';
import { Sparkles, Search } from 'lucide-react';

export default function CompanyProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8 flex justify-center w-full">
      <div className="max-w-[800px] w-full space-y-6">
        
        {/* Basic Company Details Card */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 md:p-8 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-1.5">Basic company details</h2>
              <p className="text-[15px] leading-relaxed text-gray-500 max-w-lg">
                Start with the essentials recruiters typically need before posting campus opportunities.
              </p>
            </div>
            <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1.5 rounded-[999px] shrink-0">
              Draft saved 2 min ago
            </span>
          </div>
          
          <div className="p-6 md:p-8 space-y-7">
            {/* Grid for Name and Website */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Company name</label>
                <input 
                  type="text" 
                  defaultValue="NovaEdge Technologies"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Website</label>
                <input 
                  type="text" 
                  defaultValue="www.novaedge.io"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                />
              </div>
            </div>

            {/* Grid for Industry and Size */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Industry</label>
                <div className="relative">
                  <select className="appearance-none w-full border border-gray-200 rounded-lg px-4 py-2.5 pr-10 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-white">
                    <option>Software & Cloud Services</option>
                    <option>Hardware & Electronics</option>
                    <option>Consulting</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Company size</label>
                <div className="relative">
                  <select className="appearance-none w-full border border-gray-200 rounded-lg px-4 py-2.5 pr-10 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-white">
                    <option>201–500 employees</option>
                    <option>51–200 employees</option>
                    <option>11–50 employees</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Short company headline */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Short company headline</label>
              <textarea 
                rows={2}
                defaultValue="Building AI-powered infrastructure products for modern enterprises and campus-ready engineering teams."
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none leading-relaxed"
              ></textarea>
            </div>

            {/* About company */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">About company</label>
              <textarea 
                rows={4}
                placeholder="Write a concise company summary for students and campus placement teams. Highlight your mission, work culture, and the type of roles you usually hire for."
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none leading-relaxed"
              ></textarea>
            </div>

            {/* Company logo upload */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Company logo</label>
              <div className="border border-dashed border-gray-300 rounded-xl bg-slate-50/50 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Upload square logo</h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed max-w-lg">
                    SVG, PNG, or JPG - Recommended 512×512 - Used across job listings and candidate search.
                  </p>
                </div>
                <button className="whitespace-nowrap px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors shadow-sm shrink-0">
                  Choose file
                </button>
              </div>
            </div>

          </div>
          
          {/* Action buttons */}
          <div className="p-6 md:px-8 md:py-6 bg-white border-t border-gray-100 flex flex-wrap items-center gap-3">
            <button className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
              Save as draft
            </button>
            <button className="px-4 py-2.5 bg-slate-100 rounded-lg text-sm font-semibold text-gray-700 hover:bg-slate-200 transition-colors">
              Preview public view
            </button>
            <div className="flex-1"></div>
            <button className="px-5 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
              Back
            </button>
            <button className="px-5 py-2.5 bg-[#0066FF] hover:bg-blue-700 rounded-lg text-sm font-semibold text-white transition-colors shadow-sm">
              Continue to brand assets
            </button>
          </div>
        </div>

        {/* Smart suggestions Card */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 md:p-8 flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-1">Smart suggestions</h2>
              <p className="text-[15px] text-gray-500 leading-relaxed">
                Helpful prompts to improve discoverability for colleges and students.
              </p>
            </div>
            <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1.5 rounded-[999px] shrink-0">
              AI-assisted
            </span>
          </div>
          
          <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 space-y-4">
            {/* Suggestion 1 */}
            <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-50/70 border border-gray-100">
              <div className="mt-0.5 p-2 bg-white rounded-lg border border-gray-200 text-gray-600 shrink-0 shadow-sm">
                <Sparkles size={18} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Add a sharper hiring message</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed">
                  Profiles with a one-line headline and logo usually receive better engagement in student search and recruiter discovery modules.
                </p>
              </div>
            </div>

            {/* Suggestion 2 */}
            <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-50/70 border border-gray-100">
              <div className="mt-0.5 p-2 bg-white rounded-lg border border-gray-200 text-gray-600 shrink-0 shadow-sm">
                <Search size={18} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Improve smart search match</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed">
                  Using a clear industry and company size helps your job posts show up in filtered campus searches faster.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}