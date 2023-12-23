import { shoe8 } from "../assets/images"
import Button from "../components/Button"

function SuperQuality() {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
        <div className="flex flex-col flex-1">
            <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
                    We Provide You
                <br />
                <span className="text-[#ed1c24]">
                    Super Quality
                </span> Shoes
            </h2>
            <p className="mt-4 lg:max-w-lg info-text">
            Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
            </p>
            <p className="mt-6 lg:max-w-lg info-text">
            Our dedication to detail and excellence ensures yoursatisfaction
            </p>
            <div className="mt-11">
            <Button label="View details" />
            </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
            <img src={shoe8} alt="Shoe Image" width={570} height={520} className="object-contain"/>
        </div>
    </section>
  )
}

export default SuperQuality