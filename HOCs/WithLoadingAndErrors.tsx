import Error from "@/components/shared/Error";
import NoData from "@/components/shared/NoData";
import { ReactNode } from "react";

const WithLoadingAndErrors = ({
  isError,
  isLoading,
  LoadingComponent,
  noDataMessage,
  lengthOfData,
  children,
}: {
  isLoading: boolean;
  isError: boolean;
  LoadingComponent: ReactNode;
  noDataMessage?: string;
  lengthOfData: number;
  children: ReactNode;
}) => {
  if (isLoading) return LoadingComponent;
  if (isError) return <Error />;
  return (
    <>
      {lengthOfData == 0 ? (
        <NoData messageClassName="text-primary!" message={noDataMessage} />
      ) : (
        children
      )}
    </>
  );
};

export default WithLoadingAndErrors;
