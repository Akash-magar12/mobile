import video from "../assets/bgvideo.mp4";
import photo from "../assets/pic.jpg";

const Calltoaction = () => {
  return (
    <>
      <h2 className="text-sm px-1 lg:text-2xl">Exploring a Website on Phone</h2>

      <div className="w-full overlays rounded overflow-hidden relative h-[50vh] cursor-pointer lg:h-[80vh] my-6">
        <div className="relative w-full h-full">
          <img
            className="w-full h-full object-cover transition-opacity duration-300 ease-in-out hover:opacity-0"
            src={photo}
            alt="Image preview"
          />

          <video
            className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"
            autoPlay
            loop
            muted
            src={video}
          ></video>
        </div>
      </div>
    </>
  );
};

export default Calltoaction;
