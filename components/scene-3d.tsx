"use client";

export function Scene3D() {
  return (
    <div className="scene-3d" aria-hidden="true">
      <div className="scene-3d__plane">
        <div className="orb orb--1" />
        <div className="orb orb--2" />
        <div className="orb orb--3" />
        <div className="wireframe">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}
