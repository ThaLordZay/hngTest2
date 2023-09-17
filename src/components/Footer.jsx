import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="my-28 h-auto w-full flex items-center justify-center flex-col">
      <div className="flex w-1/2 items-center justify-center gap-x-6 mb-4">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        <YouTubeIcon />
      </div>
      <div className="flex w-1/2 my-6 text-textMain font-bold text-base items-center justify-center mb-4">
        <p>Condition of Use &nbsp; &nbsp; &nbsp;</p>
        <p>Privacy & Policy &nbsp; &nbsp; &nbsp;</p>
        <p>Press Room</p>
      </div>
      <p className="text-textMinor font-bold text-base mb-10">
        <span>© {currentYear} MovieBox by 3-AZ</span>
      </p>
    </footer>
  );
}

export default Footer;
