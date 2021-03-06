import type { NextPage } from 'next';
import FileUpload from '../components/file-upload';
import GifSelect from '../components/gif-select';
const Home: NextPage = () => {
  return (
    <div className="min-h-screen h-full w-full relative bg-gradient-to-r from-studio via-purpures to-amethyst overflow-hidden">
      <div className="flex flex-col w-full items-center justify-center pt-32">
        <h1 className=" text-8xl animate-pulse px-4 ">VEXCHOWAVE</h1>
        <FileUpload></FileUpload>
      </div>
      {/* Background images */}
      <div className="">
        <img
          src="/alexander-the-great-bust-3d-wireframe.svg"
          alt=""
          className="w-96 absolute -bottom-40 -left-40"
        />
      </div>
      <div className="">
        <img
          src="/man-in-moustache.svg"
          alt=""
          className="w-96 absolute -bottom-40 -right-40"
        />
      </div>
      <div className="">
        <img
          src="/man-in-moustache-pink.svg"
          alt=""
          className="w-96 absolute -bottom-40 -right-32"
        />
      </div>
    </div>
  );
};

export default Home;
