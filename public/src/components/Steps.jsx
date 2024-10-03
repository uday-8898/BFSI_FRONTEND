import React, { forwardRef } from 'react';
import '../styles/Steps.css';
import img1 from '../assets/stp1.png'
import img2 from '../assets/stp2.png'
import img3 from '../assets/stp3.png'


const Steps = forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <div className="flex flex-col items-center mt-20">
                <h3 className="text-indigo-500 text-4xl font-semibold mb-2">Journey with Our Product</h3>
                <p className="text-gray-500 text-lg text-center max-w-xl">
                    your step-by-step guide
                </p>
            </div>
            <section class="max-w-5xl mx-auto py-10">
                <div>
                    <div class="flex flex-row">
                        <div class="hidden md:flex flex-col items-center">
                            <div class="w-32 py-5 border border-indigo-500 rounded mr-4 uppercase flex flex-col items-center justify-center">
                                <div class="text-3xl font-black text-gray-500">Step 1</div>
                                <div class="text-gray-500 text-sm mt-2 px-4">Document Upload</div>
                            </div>
                            <div class="h-full border-l-4 border-transparent">
                                <div class="border-l-4 mr-4 h-full border-indigo-500 border-dashed"></div>
                            </div>
                        </div>
                        <div class="flex-auto border rounded  border-indigo-500">
                            <div class="flex md:flex-row flex-col items-center">
                                <div class="flex-auto">
                                    <div class="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500"><span class="font-black">Step 1</span> - Document Upload</div>
                                    <div class="p-3 text-3xl text-gray-800 font">Find your best idea</div>
                                    <div class="px-3 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.</div>
                                </div>
                                <div className="md:w-100 w-full p-1">
                                    <img src={img1} alt="step 1" className="w-full h-full object-cover" />
                                </div>                            
                            </div>
                        </div>
                    </div>
                    <div class="flex items-start flex-row">
                        <div class="border-t-4 border-r-4 border-transparent">
                            <div class="w-16 ml-16 h-16 border-l-4 border-indigo-500 border-dashed border-b-4 rounded-bl-full"></div>
                        </div>
                        <div class="border-t-4 border-transparent flex-auto">
                            <div class="h-16 border-b-4 border-indigo-500 border-dashed"></div>
                        </div>
                        <div class="w-16 mt-16 mr-16 h-16 border-r-4 border-indigo-500 border-dashed border-t-4 rounded-tr-full"></div>
                    </div>
                    <div class="flex flex-row-reverse">
                        <div class="hidden md:flex flex-col items-center">
                            <div class="w-32 py-5 border border-indigo-500 rounded ml-4 uppercase flex flex-col items-center justify-center">
                                <div class="text-3xl font-black text-gray-500">Step 2</div>
                                <div class="text-gray-500 text-sm px-4">Document Processing</div>
                            </div>
                            <div class="h-full border-r-4 border-transparent">
                                <div class="border-l-4 ml-4 h-full border-indigo-500 border-dashed"></div>
                            </div>
                        </div>
                        <div class="flex-auto border rounded  border-indigo-500">
                            <div class="flex md:flex-row flex-col items-center">
                                <div class="flex-auto">
                                    <div class="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500"><span class="font-black">Step 2</span> - Document Processing</div>
                                    <div class="p-3 text-3xl text-gray-800 font">Find your team and collaborate</div>
                                    <div class="px-3 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.</div>
                                </div>
                                <div className="md:w-120 w-full p-1">
                                    <img src={img2} alt="step 1" className="w-full h-full object-cover" />
                                </div>   
                            </div>
                        </div>
                    </div>
                    <div class="flex items-start flex-row-reverse">
                        <div class="border-t-4 border-l-4 border-transparent">
                            <div class="w-16 mr-16 h-16 border-r-4 border-indigo-500 border-dashed border-b-4 rounded-br-full"></div>
                        </div>
                        <div class="border-t-4 border-transparent flex-auto">
                            <div class="h-16 border-b-4 border-indigo-500 border-dashed"></div>
                        </div>
                        <div class="w-16 mt-16 ml-16 h-16 border-l-4 border-indigo-500 border-dashed border-t-4 rounded-tl-full"></div>
                    </div>
                    <div class="flex flex-row">
                        <div class="hidden md:flex flex-col items-center">
                            <div class="w-32 py-5 border  rounded mr-4 uppercase flex flex-col items-center justify-center">
                                <div class="text-3xl font-black text-gray-500">Step 3</div>
                                <div class="text-gray-500 text-sm px-4">Document Verification</div>
                            </div>

                        </div>
                        <div class="flex-auto border rounded  border-indigo-500">
                            <div class="flex md:flex-row flex-col items-center">
                                <div class="flex-auto">
                                    <div class="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500"><span class="font-black">Step 3</span> - Document Verification</div>
                                    <div class="p-3 text-3xl text-gray-800 font">Make a good plan and prepare tasks</div>
                                    <div class="px-3 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.</div>
                                </div>
                                <div className="md:w-85 w-full p-1">
                                    <img src={img3} alt="step 1" className="w-full h-full object-cover" />
                                </div>                             
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
})

export default Steps;
