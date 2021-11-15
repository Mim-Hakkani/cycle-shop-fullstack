import React from 'react';


const Gallery = () => {
    return (
        <div>
               <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 col-md-12 col-sm-12">
                        <h1 className="text-center py-4 shadow text-capitalize">Bycycle Gallery</h1>
                        </div>
                    </div>
                  
                    <div class="row">
                    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <img
                        src="https://5.imimg.com/data5/SELLER/Default/2020/12/LN/PH/EO/2515756/heclues-stimulus-pro-rf-26-t-500x500.jpg"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                        />

                        <img
                        src="https://5.imimg.com/data5/SELLER/Default/2021/1/HV/OW/OY/88188025/brand-new-mtb-slim-tyre-stylish-cycle-500x500.jpg"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                        />
                    </div>

                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                        src="https://5.imimg.com/data5/EQ/LT/VX/SELLER-39372274/1dba86f1-91c0-4f2f-8810-c399f405efe9-500x500.jpg"
                        class="w-100 shadow-1-strong rounded mb-4"

                        alt=""
                        />

                        <img
                        src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmljeWNsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                        />
                    </div>

                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                        src="https://media.architecturaldigest.com/photos/578558478fa9d0fe611e20cd/16:9/w_2560%2Cc_limit/cyclotron-bicycle-of-future-01.png"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                        />

                        <img
                        src="https://m.media-amazon.com/images/I/81wGn2TQJeL._SX425_.jpg"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                        />
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default Gallery;