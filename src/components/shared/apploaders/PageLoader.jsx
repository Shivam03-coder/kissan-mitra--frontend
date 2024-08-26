import { Circles } from "react-loader-spinner";

function PageLoader() {
  return (
    <div className="w-full h-screen flex-center ">
      <Circles
        visible={true}
        height="130"
        width="130"
        ariaLabel="comment-loading"
        wrapperStyle={{}}
        wrapperClass="comment-wrapper"
        color="#4DA42E"
        backgroundColor="#4DA42E"
      />
    </div>
  );
}

export default PageLoader;