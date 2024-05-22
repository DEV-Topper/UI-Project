import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export const Payment2 = () => {
  const schema = yup.object({
    nameOnCard: yup.string().required("Enter name field"),
    cardType: yup.string().email().required("Enter email address"),
    cardDetails: yup.string().required("Enter address field"),
    expiryDate: yup.string(),
    cvv: yup.string().required("Enter local government area"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onHandleSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="w-full h-screen ">
      <div className="flex justify-between w-full md:text-[23px] text-[14px] font-semibold text-[#bdbdbd] pt-[50px]"></div>
      <form className="flex flex-col space-y-6" onSubmit={onHandleSubmit}>
        <div className="flex flex-col ">
          <label className="font-bold text-[19px] flex gap-2 pb-2">
            Name on Card
            {errors?.nameOnCard?.message && (
              <div className="text-red-600">*</div>
            )}
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            className="border border-black p-4 rounded-md outline-none mb-3"
            {...register("nameOnCard")}
          />
        </div>

        <div className="flex flex-col">
          <label className="font-bold text-[19px] flex gap-2 pb-2">
            Card Type
            {errors?.cardType?.message && <div className="text-red-600">*</div>}
          </label>
          <select
            placeholder=""
            className="border border-black p-4 rounded-md outline-none mb-3"
            {...register("cardType")}
          >
            <option value="visa">visa</option>
            <option value="mastercard">mastercard</option>
          </select>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between space-y-6 md:space-y-0">
          <div className="flex flex-col w-full md:w-[48%]">
            <label className="font-bold text-[19px] flex gap-2 pb-2">
              Card details
              {errors?.cardDetails?.message && (
                <div className="text-red-600">*</div>
              )}
            </label>
            <input
              type="text"
              placeholder="Enter Card Details"
              className="border border-black p-4 rounded-md outline-none mb-3 w-full"
              {...register("cardDetails")}
            />
          </div>
          <div className="flex flex-col w-full md:w-[30%]">
            <label className="font-bold text-[19px] flex gap-2 pb-2">
              Expiry date
              {errors?.cardDetails?.message && (
                <div className="text-red-600">*</div>
              )}
            </label>
            <input
              type="text"
              placeholder="MM / YY"
              className="border border-black p-4 rounded-md outline-none mb-3 w-full"
              {...register("expiryDate")}
            />
          </div>

          <div className="flex flex-col w-full md:w-[10%]">
            <label className="font-bold text-[19px] flex gap-2 pb-2 text-center">
              CVV
              {errors?.cvv?.message && <div className="text-red-600">*</div>}
            </label>
            <input
              type="text"
              placeholder="CVV"
              className="border border-black p-4 rounded-md outline-none mb-3 w-full placeholder:text-center"
              {...register("cvv")}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:gap-11 space-y-6 md:space-y-0 mt-8 pb-9">
          <button
            className="px-[90px] py-3 text-white text-[19px] rounded-md "
            style={{
              backgroundColor: "rgb(242,191,76)",
              background: `linear-gradient(180deg, rgba(242,191,76,1) 0%, rgba(242,161,75,1) 58%, rgba(242,161,75,1) 100%)`,
            }}
            type="submit"
          >
            Next
          </button>
          <button className="text-[#4e598c] text-[19px] font-semibold md:border-none border-[2px] border-[#4e598c] py-3 rounded-md">
            Cancel Payment
          </button>
        </div>
      </form>
    </div>
  );
};
