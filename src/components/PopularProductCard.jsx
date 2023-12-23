import { star } from "../assets/icons"

function PopularProductCard({imgURL, name, price}) {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
        <div className="mt-8 flex justify-start gap-2.5">
            <img src={star} alt="Rating" width={24} height={24}/>
            <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
        </div>
        <h3 className="font-palanquin mt-2 text-2xl leading-normal font-semibold">
            {name}
        </h3>
        <p className="font-montserrat mt-2 font-semibold text-[#ed1c24] leading-normal text-2xl">{price}</p>
    </div>

  )
}

export default PopularProductCard