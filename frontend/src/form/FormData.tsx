
interface FormDataProps {
  formData: {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    district: string;
    postal: string;
    region: string;
    nation: string;
  };
}

function FormData(props: FormDataProps) {
  const { formData } = props;

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-black">
          Form Data
        </h4>
      </div>

      <div className="grid grid-cols-1 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">{formData.firstname}</p>
          <p className="font-medium ml-1">{formData.lastname}</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">{formData.email}</p>
        </div>
        <div className=" flex items-center">
          <p className="font-medium">{formData.phone}</p>
        </div>
        <div className=" flex items-center">
          <p className="font-medium">{formData.address}</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">{formData.nation}</p>
        </div>
      </div>

      {/* Add more rows to display the other form data */}
    </div>
  );
}

export default FormData;