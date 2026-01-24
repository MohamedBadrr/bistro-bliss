"use client";
import Divider from "@/components/shared/Divider";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { formatCurrency } from "@/lib/formatter";
import { OrderWithRelations } from "@/types/Orders";
import Image from "next/image";
import React, { useState } from "react";
import { Clock, Package, MapPin, CreditCard, CheckCircle2 } from "lucide-react";
import { formatDate } from "@/lib/formateDate";

const DetailsOrderModal = ({
  OrderItem,
}: {
  OrderItem: OrderWithRelations;
}) => {
  const [openDialog, setOpenDialog] = useState(false);
  const address = OrderItem.order_addresses[0];

  return (
    <div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogTrigger asChild>
          <Button variant="default" size="sm">
            Show Details
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-3xl bg-white max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              Order Details
            </DialogTitle>
            <DialogDescription>Order ID: {OrderItem.id}</DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            {/* Order Status & Date */}
            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="text-sm text-gray-600">Order Date</p>
                  <p className="font-semibold">
                    {formatDate(OrderItem.created_at)}
                  </p>
                </div>
              </div>
            </div>

            <Divider />

            {/* Products List */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Package className="w-5 h-5 text-gray-700" />
                <h3 className="text-lg font-semibold">Products</h3>
              </div>
              <div className="space-y-3">
                {OrderItem.order_products.map((orderProduct) => (
                  <div
                    key={orderProduct.id}
                    className="flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    {orderProduct.products?.image && (
                      <Image
                        src={orderProduct.products.image}
                        alt={orderProduct.products.name || "Product"}
                        width={80}
                        height={80}
                        className="rounded-md object-cover"
                      />
                    )}
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">
                        {orderProduct.products?.name || "Unknown Product"}
                      </h4>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                        <span>Quantity: {orderProduct.quantity}</span>
                        {orderProduct.selected_size && (
                          <span className="bg-white px-2 py-1 rounded">
                            Size: {orderProduct.selected_size.size}
                          </span>
                        )}
                      </div>

                      {/* Extras */}
                      {orderProduct.order_product_extras.length > 0 && (
                        <div className="mt-2">
                          <p className="text-xs text-gray-500 font-semibold">
                            Extras:
                          </p>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {orderProduct.order_product_extras.map((extra) => (
                              <span
                                key={extra.id}
                                className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded"
                              >
                                {extra.product_extras?.name} (+
                                {formatCurrency(extra.price)})
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">
                        {formatCurrency(
                          (orderProduct.selected_size?.price ||
                            orderProduct.products?.price ||
                            0) * orderProduct.quantity
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Divider />

            {/* Delivery Address */}
            {address && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-gray-700" />
                  <h3 className="text-lg font-semibold">Delivery Address</h3>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                  <p>
                    <span className="font-semibold">Email:</span>{" "}
                    {address.user_email}
                  </p>
                  <p>
                    <span className="font-semibold">Phone:</span>{" "}
                    {address.phone}
                  </p>
                  <p>
                    <span className="font-semibold">Address:</span>{" "}
                    {address.street_address}
                  </p>
                  <p>
                    {address.city}
                    {address.postal_code && `, ${address.postal_code}`},{" "}
                    {address.country}
                  </p>
                </div>
              </div>
            )}

            <Divider />

            {/* Payment Summary */}
            <div className="bg-linear-to-r from-gray-50 to-gray-100 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-gray-700" />
                  <h3 className="text-lg font-semibold">Payment Summary</h3>
                </div>
                {OrderItem.paid && (
                  <div className="flex items-center gap-1 text-green-600">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm font-semibold">Paid</span>
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold">Total Amount:</span>
                <span className="text-2xl font-bold text-primary">
                  {formatCurrency(OrderItem.total)}
                </span>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              size={"sm"}
              onClick={() => setOpenDialog(false)}
              className="w-full sm:w-auto"
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DetailsOrderModal;
