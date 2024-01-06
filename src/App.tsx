import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import Scene from "./Scene";

function App() {
  return (
    <Canvas>
      <ambientLight />
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}

export default App;
