import React, { useEffect } from "react";

const SplineViewer = () => {
  useEffect(() => {
    // 动态加载 Spline 的脚本
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.0.28/build/spline-viewer.js";
    script.type = "module";
    document.body.appendChild(script);

    return () => {
      // 清理脚本
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="container" className="-mt-[240px]  h-[860px] ">
      <div className="flex justify-center">
        <spline-viewer url="https://prod.spline.design/brGZQlVCVDg1QyWb/scene.splinecode"></spline-viewer>
      </div>
    </div>
  );
};

export default SplineViewer;
