import { FaCartPlus } from "react-icons/fa";

const AddToCart = () => {
    return <button className="flex bg-[#023047] p-3 text-white space-x-3 justify-center items-center w-36">
        <FaCartPlus />
        <span>Add To Cart</span>
    </button>
}

export default AddToCart;