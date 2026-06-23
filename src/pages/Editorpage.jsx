import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { default as ReactSelect } from "react-select";
import { SyncLoader } from "react-spinners";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const Editorpage = () => {
  const options = [
    { value: "javascript", label: "JavaScript" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "cpp", label: "C++" },
  ];

  const [opt, setOpt] = useState(options[0]);
  const [code, setCode] = useState("// Welcome to CodePilot");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const analyze = async () => {
    if (!code.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const model = genAI.getGenerativeModel({ model:"gemini-2.5-flash" });

      const prompt = `Act as a senior software engineer and code reviewer.

Analyze this ${opt.label} code:

${code}

Return:
1. Explanation
2. Issues
3. Improvements
4. Corrected code`;

      const result = await model.generateContent(prompt);
      const text = result.response.text();
      setResponse(text);
    } catch (error) {
      setResponse(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6">
      <div className="max-w-7xl mx-auto h-[calc(100vh-120px)] flex gap-6">

        {/* LEFT PANEL - Code Editor */}
        <div className="w-1/2 rounded-3xl overflow-hidden border border-white/10 bg-[#111111]">
          <div className="h-14 px-5 border-b border-white/10 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Code Editor</h2>
            <button
              className="bg-white py-3 px-5 rounded text-black font-bold disabled:cursor-not-allowed"
              onClick={analyze}
              disabled={loading}
            >
              {loading ? "Reviewing..." : "Review Code"}
            </button>
          </div>

          <ReactSelect
            value={opt}
            onChange={setOpt}
            options={options}
            styles={{
              control: (base) => ({
                ...base,
                backgroundColor: "#111111",
                border: "none",
                boxShadow: "none",
                color: "white",
              }),
              singleValue: (base) => ({
                ...base,
                color: "white",
              }),
              menu: (base) => ({
                ...base,
                backgroundColor: "#111111",
                color: "white",
              }),
              option: (base, state) => ({
                ...base,
                backgroundColor: state.isFocused ? "#1e1e1e" : "#111111",
                color: "white",
                cursor: "pointer",
              }),
            }}
          />

          <div className="h-[calc(100%-92px)]">
            <Editor
              height="100%"
              language={opt.value}
              theme="vs-dark"
              value={code}
              onChange={(value) => setCode(value || "")}
            />
          </div>
        </div>

        {/* RIGHT PANEL - AI Review */}
        <div className="w-1/2 rounded-3xl border border-white/10 bg-white/5 p-6 overflow-y-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center">
              🤖
            </div>
            <h2 className="text-xl font-semibold">AI Code Review</h2>
          </div>

          {loading ? (
            <div className="flex justify-center mt-10">
              <SyncLoader color="#8b5cf6" />
            </div>
          ) : response ? (
            <div className="whitespace-pre-wrap text-white/90 leading-relaxed text-sm">
              {response}
            </div>
          ) : (
            <p className="text-white/30 text-sm mt-10 text-center">
              Paste your code on the left and click{" "}
              <span className="text-violet-400">Review Code</span> to get started.
            </p>
          )}
        </div>

      </div>
    </div>
  );
};

export default Editorpage;
