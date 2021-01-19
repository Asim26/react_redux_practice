import React from 'react'

export default function Home() {
    return (
        <div>
           <h1>Home</h1> 
           <div>
                <div>
                    {/* <img src="https://www.freepnglogos.com/uploads/mobile-png/samsung-mobile-phone-png-transparent-images-png-only-0.png" /> */}
                </div>
                <div>
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <br />
                <div className="btn-wrapper item">
                        <button>
                            Add To Cart
                        </button>
                    <br />
                    <br />
                        <button>
                            Remove From Cart
                        </button>
                </div>
            </div>
        </div>
    )
}
