// import { FaceContainer } from "../Assets/FaceContainer";

export default function  downloadSVG ()  {
    const svg = document.getElementById('svg').innerHTML;
    const blob = new Blob([svg.toString()]);
    const element = document.createElement("a");
    element.download = "`mysvg`.svg";
    element.href = window.URL.createObjectURL(blob);
    
    element.remove();
    return(
        <button type="submit" onClick={element.download}>Downloa SVG</button>
    )
  }