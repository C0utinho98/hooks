
import React from "react";

export default function Navbar({ theme, toogleDarkmode }) {
  return (
    <nav id="header">
      <div
        style={{ backgroundColor: theme, display: 'flex', justifyContent: 'space-between', padding: '20px' }}
      >
          <div>
            <h1>
              Github
            </h1>
          </div>

          <div style={{display:"flex", alignItems: "center", justifyContent: "center"}}>
            <label
              htmlFor="toogleA"
            >
              <div style={{display:"flex", alignItems: "center", justifyContent: "center"}}>
                <input
                  id="toogleA"
                  type="checkbox"
                  onChange={toogleDarkmode}
                  className="hidden"
                />
              </div>
              <div>Dark Mode</div>
            </label>
          </div>
        </div>
    </nav>
  );
}