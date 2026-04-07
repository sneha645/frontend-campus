// "use client";

// import Image from "next/image";

// export default function SignInPage() {
//   return (
//     <div className="flex min-h-screen">
//       {/* LEFT SIDE */}
//       <div className="hidden lg:flex w-1/2 bg-gray-100 relative p-10 flex-col justify-between">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <div className="bg-blue-600 text-white p-2 rounded-md">🎓</div>
//           <h1 className="font-semibold text-lg">CampusConnect</h1>
//         </div>

//         {/* Background Pattern */}
//         <div className="absolute inset-0 opacity-20 bg-[url('/images/sign-in-bg.jpg')] bg-cover" />

//         {/* Quote Section */}
//         <div className="relative z-10">
//           <p className="text-lg text-gray-700 leading-relaxed">
//             This platform completely transformed our campus placement drive.
//             Connecting students with recruiters and tracking projects is now
//             completely seamless and centralized.
//           </p>

//           <div className="flex items-center gap-3 mt-6">
//             <Image
//               src="/images/avatar.png"
//               alt="user"
//               width={40}
//               height={40}
//               className="rounded-full"
//             />
//             <div>
//               <p className="font-medium text-sm">Dr. D.P Joshi</p>
//               <p className="text-xs text-gray-500">Principal of SITMS</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* RIGHT SIDE */}
//       <div className="flex w-full lg:w-1/2 items-center justify-center p-8">
//         <div className="w-full max-w-md space-y-6">
//           {/* Heading */}
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               flexDirection: "column",
//               gap: "6px",
//             }}
//           >
//             <h2 style={{ fontSize: "30px", fontWeight: 600 }}>Welcome back</h2>
//             <p style={{ fontSize: "14px", color: "#6b7280", fontWeight: 500 }}>
//               Enter your credentials to access your dashboard
//             </p>
//           </div>

//           {/* Role Tabs */}
//           {/* <div className="flex bg-gray-100 rounded-lg p-1.5">
//                         {["Student", "Faculty", "Recruiter", "Admin"].map((item) => (
//                             <button
//                                 key={item}
//                                 onClick={() => setRole(item)}
//                                 className={`flex-1 text-sm py-2 rounded-md cursor-pointer ${role === item
//                                     ? "bg-white shadow font-medium"
//                                     : "text-gray-500"
//                                     }`}
//                             >
//                                 {item}
//                             </button>
//                         ))}
//                     </div> */}

//           {/* Form */}
//           <form className="space-y-4">
//             <div>
//               <label className="text-sm font-medium">
//                 Work or University Email
//               </label>
//               <input
//                 type="email"
//                 placeholder="name@university.edu"
//                 className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div>
//               <label className="text-sm font-medium">Password</label>
//               <input
//                 type="password"
//                 placeholder="••••••••••"
//                 className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             {/* Remember + Forgot */}
//             <div className="flex items-center justify-between text-sm">
//               {/* <label className="flex items-center gap-2">
//                                 <input type="checkbox" />
//                                 Remember for 30 days
//                             </label> */}
//               <button type="button" className="text-blue-600">
//                 Forgot password?
//               </button>
//             </div>

//             {/* Submit */}
//             <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition cursor-pointer">
//               Sign In
//             </button>
//           </form>

//           {/* Divider */}
//           {/* <div className="flex items-center gap-3">
//                         <div className="flex-1 h-px bg-gray-200" />
//                         <span className="text-xs text-gray-400">
//                             OR CONTINUE WITH
//                         </span>
//                         <div className="flex-1 h-px bg-gray-200" />
//                     </div> */}

//           {/* Social Buttons */}
//           {/* <div className="flex gap-3">
//                         <button className="flex-1 border py-2 rounded-md hover:bg-gray-50">
//                             GitHub
//                         </button>
//                         <button className="flex-1 border py-2 rounded-md hover:bg-gray-50">
//                             University SSO
//                         </button>
//                     </div> */}

//           {/* Footer */}
//           {/* <p className="text-center text-sm text-gray-500">
//                         Don’t have an account?{" "}
//                         <span className="text-blue-600 cursor-pointer">
//                             Request Access
//                         </span>
//                     </p> */}
//         </div>
//       </div>
//     </div>
//   );
// }

export default function SignInPage() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src="/images/sign-in-bg.jpg"
          alt="preview"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              height: "40px",
              width: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #008000, #0000ff)",
              borderRadius: "50%",
            }}
          >
            🎓
          </div>
          <h1 style={{ fontSize: "20px", fontWeight: "600", color: "#0000ff" }}>
            Campus<span style={{ color: "#008000" }}>Connect</span>
          </h1>
        </div>
      </div>
      <div
        style={{
          height: "100%",
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "30px",
            width: "500px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <h1 style={{ fontSize: "30px", fontWeight: 600 }}>Welcome Back</h1>
            <p style={{ fontSize: "14px", color: "#6b7280", fontWeight: 400 }}>
              Enter your credentials to access your dashboard
            </p>
          </div>
          <form
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
              }}
            >
              <label style={{ fontSize: "16px", color: "#000" }}>
                Work or University Email
              </label>
              <input
                type="email"
                placeholder="name@university.edu"
                style={{
                  outline: "none",
                  border: "1px solid #000",
                  borderRadius: "4px",
                  padding: "10px",
                  fontSize: "14px",
                }}
              />
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
              }}
            >
              <label style={{ fontSize: "16px", color: "#000" }}>
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••••"
                style={{
                  outline: "none",
                  border: "1px solid #000",
                  borderRadius: "4px",
                  padding: "10px",
                  fontSize: "14px",
                }}
              />
            </div>

            <button type="button" style={{ color: "#000", textAlign: "left" }}>
              Forgot password?
            </button>

            <button
              style={{
                backgroundColor: "blue",
                color: "#fff",
                padding: "10px",
                width: "100%",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
