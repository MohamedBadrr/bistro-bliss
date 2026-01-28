"use client";
import { Formik, Form } from "formik";
import InputField from "@/components/fields/InputField";
import { Button } from "@/components/ui/button";
import { makeReservation } from "@/services/reservations/updateReservation";
import { toast } from "sonner";
import * as Yup from "yup";
import { useCustomMutation } from "@/hooks/useCustomMutation";
import { useRouter } from "next/navigation";

export const ReservationValidationSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too short").required("Name is required"),
  phone: Yup.string().min(8, "Invalid phone").required("Phone is required"),
  date: Yup.string().required("Date is required"),
  time: Yup.string().required("Time is required"),
  totalPersons: Yup.number()
    .min(1, "At least 1 person")
    .required("Total persons is required"),
});
const ReservationForm = ({ userId }: { userId: string }) => {
  const { mutate, isPending } = useCustomMutation({
    mutationFn: makeReservation,
  });
  const router = useRouter();

  const initialValues = {
    name: "",
    phone: "",
    date: "",
    time: "",
    totalPersons: 1,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ReservationValidationSchema}
      onSubmit={async (values, { resetForm }) => {
        mutate(
          {
            userId: userId, // set userId if available from auth context
            ...values,
          },
          {
            onSuccess: () => {
              toast.success("Reservation made successfully");
              router.push(
                "/cart/success?message=Your Reservation was made successfully. Thank you for choosing Bistro Bliss!"
              );
              resetForm();
            },
          }
        );
      }}
    >
      {({ isValid }) => (
        <Form className="flex flex-col gap-4 w-full max-w-md mx-auto mt-8  p-2 rounded-4xl!">
          <InputField
            name="name"
            label="Name"
            placeholder="Your Name"
            type="input"
          />
          <InputField
            name="phone"
            label="Phone"
            placeholder="Phone Number"
            type="input"
          />
          <InputField
            name="date"
            label="Date"
            placeholder="YYYY-MM-DD"
            type="date"
          />
          <InputField
            name="time"
            label="Time"
            placeholder="HH:mm"
            type="time"
          />
          <InputField
            name="totalPersons"
            label="Total Persons"
            placeholder="Number of Persons"
            type="number"
          />
          <Button
            type="submit"
            isLoading={isPending}
            disabled={!isValid || isPending}
          >
            Book Table
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ReservationForm;
