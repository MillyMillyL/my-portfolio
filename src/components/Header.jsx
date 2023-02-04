import React from "react";
import { supabase } from "../supabaseClient";
import { Link } from "react-router-dom";

export const Header = () => {
  async function signInWithGitHub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  }

  async function signout() {
    const { error } = await supabase.auth.signOut();
  }

  return (
    <div className="header">
      <div className="header-title">Milly Liu</div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
      </nav>
      <button className="resume-btn">Resume</button>

      <div>
        <button onClick={signInWithGitHub}>Login with Github</button>
        <button onClick={signout}>Log Out</button>
      </div>
    </div>
  );
};
