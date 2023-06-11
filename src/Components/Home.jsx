import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
export  const MacBokimage =
    "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const shoesImag =
    "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";
function Home() {
    const dispatch=useDispatch()
 
    const productList = [
        {
            name: "Mac Book",
            price: 12000,
            id: "djndjnsjn",
            imgSrc: MacBokimage,

        },
        {
            name: "Black shoes",
            price: 3000,
            id: "djndjns",

            imgSrc: shoesImag
        }
    ]
    function AddtohandlerCard(options) {
        dispatch({type:"addToCart",payload:options})
        toast.success("added To cart")
     
    }

    return (
        <div className='homeOne'>
            {
                productList.map((item) => {
                    return (

                        <ProductCard
                            imgSrc={item.imgSrc}
                            id={item.id}
                            key={item.id}
                            name={item.name}
                            price={item.price}
                            handler={AddtohandlerCard}
                        />

                    )
                })
            }
        </div>
    )
}

function ProductCard({ imgSrc, id, name, price, handler }) {
    return (
        <div className="productCardOne">
            <img src={imgSrc} alt='name' />
            <h4>{name}</h4>
            <p>{price}</p>
            <button onClick={() => handler({ name, id, price, quantity: 1, imgSrc })}>
                add To Card
            </button>
        </div>
    )
}

export default Home;