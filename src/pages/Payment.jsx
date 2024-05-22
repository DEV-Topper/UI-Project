import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export const Payment = () => {
  const schema = yup.object({
    name: yup.string().required("Enter name field"),
    email: yup.string().email().required("Enter email address"),
    address1: yup.string().required("Enter address field"),
    address2: yup.string(),
    lga: yup.string().required("Enter local government area"),
    state: yup.string().required("Enter state"),
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
        <div className="flex flex-col mt-[0px]">
          <label className="font-bold text-[19px] flex gap-2 pb-2">
            Name
            {errors?.name?.message && <div className="text-red-600">*</div>}
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            className="border border-black p-4 rounded-md outline-none mb-3"
            {...register("name")}
          />
        </div>

        <div className="flex flex-col">
          <label className="font-bold text-[19px] flex gap-2 pb-2">
            Email Address
            {errors?.email?.message && <div className="text-red-600">*</div>}
          </label>
          <input
            type="email"
            placeholder="Enter Email Address"
            className="border border-black p-4 rounded-md outline-none mb-3"
            {...register("email")}
          />
        </div>

        <div className="flex flex-col">
          <label className="font-bold text-[19px] flex gap-2 pb-2">
            Address 1
            {errors?.address1?.message && <div className="text-red-600">*</div>}
          </label>
          <input
            type="text"
            placeholder="Enter Address"
            className="border border-black p-4 rounded-md outline-none mb-3"
            {...register("address1")}
          />
        </div>

        <div className="flex flex-col">
          <label className="font-bold text-[19px] pb-2">Address 2</label>
          <input
            type="text"
            placeholder="Enter Address"
            className="border border-black p-4 rounded-md outline-none mb-3"
            {...register("address2")}
          />
        </div>

        <div className="flex flex-col md:flex-row md:justify-between space-y-6 md:space-y-0">
          <div className="flex flex-col md:w-[48%]">
            <label className="font-bold text-[19px] flex gap-2 pb-2">
              Local Government
              {errors?.lga?.message && <div className="text-red-600">*</div>}
            </label>
            <input
              type="text"
              placeholder="Enter Local Government"
              className="border border-black p-4 rounded-md outline-none mb-3"
              {...register("lga")}
            />
          </div>

          <div className="flex flex-col md:w-[48%]">
            <label className="font-bold text-[19px] flex gap-2 pb-2">
              State
              {errors?.state?.message && <div className="text-red-600">*</div>}
            </label>
            <select
              className="border border-black p-4 rounded-md outline-none text-[19px] font-medium mb-3"
              {...register("state")}
            >
              <option value="lagos">Lagos</option>
              <option value="kano">Kano</option>
            </select>
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
