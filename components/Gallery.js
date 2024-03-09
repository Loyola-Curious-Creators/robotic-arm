import Image from 'next/image';

const Gallery = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Our Project Process</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven&apos;t heard of them man bun deep jianbing selfies heirloom.</p>
        </div>

        <div className="flex flex-wrap -m-4">
         
          {/* Second Image and Description */}
          <div className="lg:w-1/2 md:w-1/2 p-4">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
  <Image 
    className="object-cover object-center rounded"
    alt="hero"
    src="https://dummyimage.com/500x400"
    width={720}
    height={600}
  />
</div>
          </div>
          <div className="lg:w-1/2 md:w-3/5 p-4">
            <div className="h-full border-2 border-gray-800 border-opacity-60 rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">The Catalyzer</h1>
                <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.dosing tousled waistcoat. dosing tousled waistcoat. dosing tousled waistcoat. dosing tousled waistcoat. dosing tousled waistcoat.  </p>
                <div className="flex items-center flex-wrap ">
                  
                  
                  
                </div>
              </div>
            </div>
          </div>


          {/* Second Image and Description */}
          <div className="lg:w-1/2 md:w-1/2 p-4">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
  <Image 
    className="object-cover object-center rounded"
    alt="hero"
    src="https://dummyimage.com/500x400"
    width={720}
    height={600}
  />
</div>
          </div>
          <div className="lg:w-1/2 md:w-3/5 p-4">
            <div className="h-full border-2 border-gray-800 border-opacity-60 rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">The Catalyzer</h1>
                <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.dosing tousled waistcoat. dosing tousled waistcoat. dosing tousled waistcoat. dosing tousled waistcoat. dosing tousled waistcoat.  </p>
                <div className="flex items-center flex-wrap ">
                  
                  
                  
                </div>
              </div>
            </div>
          </div>
</div>
</div>
    </section>
  );
}

export default Gallery;
