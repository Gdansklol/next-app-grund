/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// Content
import Image from "next/image";

export default function Home() {
  return (
    <>
    <h1>Welcome</h1>
    <h2>Hello, WEB!</h2>
    <br></br>
    <Image 
        src="/hello.png" 
        alt="Hello Image" 
        width={200} 
        height={200} 
      />
    </>
  );
}
