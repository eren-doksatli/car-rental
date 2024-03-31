import { CarType } from "../../types";
import { AnimatePresence, motion } from "framer-motion";
import { genereteImage } from "../../utils";

type DetailProps = {
  isOpen: boolean;
  closeModel: () => void;
  car: CarType;
};

const DetailModel = ({ isOpen, closeModel, car }: DetailProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-25 z-20 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="p-6 relative bg-white w-full max-w-lg max-h-[90vh] rounded-2xl flex flex-col gap-5 shadow-xl overflow-auto"
          >
            <button
              onClick={closeModel}
              className="p-1 bg-white cursor-pointer z-10 absolute top-1 end-1 rounded-full "
            >
              <img src="/close.svg" alt="close" />
            </button>

            <div className="flex-1 flex flex-col gap-3">
              <div className="w-full relative h-40 bg-pattern bg-cover bg-center rounded-lg">
                <img
                  src={genereteImage(car)}
                  alt=""
                  className="h-full mx-auto"
                />
              </div>

              <div className="flex gap-3">
                <div className="flex-1 flex relative w-full h-24 bg-primary-blue-100">
                  <img
                    src={genereteImage(car, "29")}
                    alt=""
                    className="h-full object-contain mx-auto"
                  />
                </div>
                <div className="flex-1 flex relative w-full h-24 bg-primary-blue-100">
                  <img
                    src={genereteImage(car, "33")}
                    alt=""
                    className="h-full object-contain mx-auto"
                  />
                </div>
                <div className="flex-1 flex relative w-full h-24 bg-primary-blue-100">
                  <img
                    src={genereteImage(car, "13")}
                    alt=""
                    className="h-full object-contain mx-auto"
                  />
                </div>
              </div>
            </div>

            {Object.entries(car)
              .filter((i) => i[0] !== "year")
              .map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <h4 className="capitalize text-gray">
                    {key.replace("_", " ")}
                  </h4>
                  <p className="text-black-100 font-semibold">{value}</p>
                </div>
              ))}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DetailModel;
