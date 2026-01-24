"use client";

import InputField from "@/components/fields/InputField";
import { Button } from "@/components/ui/button";
import { useCustomMutation } from "@/hooks/useCustomMutation";
import { formatCurrency } from "@/lib/formatter";
import { getTotalAmount } from "@/lib/getTotalAmount";
import { createOrder } from "@/services/orders/createOrder";
import { UserProfile } from "@/services/user/getMe";
import { useCart } from "@/store/cart.store";
import { checkoutValidationSchema } from "@/validations";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function CheckoutForm({ profile }: { profile: UserProfile }) {
  const { cart, clearCart } = useCart();
  const initialValues = {
    phone: "",
    address: "",
    postalCode: "",
    city: "",
    country: "",
    email: "",
  };
  const totalAmount = getTotalAmount(cart);
  const router = useRouter();
  const { mutate, isPending } = useCustomMutation({
    mutationFn: createOrder,
    onError: () => {
      toast.error("Some thing went wrong");
    },
    onSuccess: () => {
      toast.success("Order make done");
      router.push("/cart/success");
      clearCart();
    },
  });
  return (
    <div className="grid gap-6 bg-gray-100 rounded-md p-4 h-fit! max-h-140!">
      <h2 className="text-2xl text-black font-semibold">Checkout</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log("ITEMS SENT", cart, values);
          mutate({
            cart: cart,
            city: values.city,
            country: values.country,
            delivery_fee: 5,
            phone: values.phone,
            postal_code: values.postalCode,
            street_address: values.address,
            user_email: profile.email,
            user_id: profile.id,
          });
        }}
        validationSchema={checkoutValidationSchema}
      >
        {({ isValid }) => (
          <Form>
            <div className="grid gap-4">
              <div className="grid gap-1">
                <InputField
                  label="Phone"
                  name={"phone"}
                  placeholder="Enter your phone number..."
                  type="input"
                />
              </div>
              <div className="grid gap-1">
                {" "}
                <InputField
                  label="Street address"
                  name={"address"}
                  placeholder="Enter your street address..."
                  type="textarea"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="grid gap-1">
                  <InputField
                    label="Postal code"
                    name={"postalCode"}
                    placeholder="Enter postal code..."
                    type="input"
                  />
                </div>
                <div className="grid gap-1">
                  <InputField
                    label="City"
                    name={"city"}
                    placeholder="Enter your City..."
                    type="input"
                  />
                </div>
              </div>
              <div className="w-full!">
                <InputField
                  label="Country"
                  name={"country"}
                  placeholder="Enter your country..."
                  type="input"
                />
              </div>
              <Button
                className="h-10"
                type="submit"
                isLoading={isPending}
                disabled={!(cart && cart.length > 0) || !isValid}
              >
                {cart && cart.length > 0
                  ? `Place order ${formatCurrency(totalAmount)}`
                  : `Place order`}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CheckoutForm;
