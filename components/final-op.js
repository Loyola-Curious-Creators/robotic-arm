const FinalOutputPage = () => {
    return (
      <section className="text-gray-400 bg-gray-900 body-font flex items-center justify-center h-screen">
        <div className="container px-5 py-24 mx-auto flex flex-col items-center">
          <div className="lg:w-1/2 md:w-1/2 w-full md:pr-10 md:py-6">
          <h2 className="text-white text-3xl lg:text-4xl title-font font-medium mb-4 text-center">
  Final Output Video
</h2>
  <div className="leading-relaxed mb-4 w-full">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/your-video-id"
                title="YouTube video player"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            <p className="leading-relaxed mb-4 text-center">Description about your video goes here. You can provide information about what viewers can expect from the video, its purpose, key features, and any other relevant details.</p>
           
          </div>
        </div>
      </section>
    );
  }
  
  export default FinalOutputPage;
  