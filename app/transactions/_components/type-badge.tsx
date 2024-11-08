import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TransactionTypeProps {
  transaction: Transaction;
}

const TransactionTypeProperty = ({ transaction }: TransactionTypeProps) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <div className="inline-flex items-center rounded-full bg-muted bg-opacity-100 px-2 font-medium text-primary">
        <CircleIcon className="mr-1 fill-primary" size={8} />
        <p>Depósito</p>
      </div>
    );
  }
  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <div className="inline-flex items-center rounded-full bg-danger bg-opacity-20 px-2 font-medium text-danger">
        <CircleIcon className="mr-1 fill-danger" size={8} />
        <p>Despesa</p>
      </div>
    );
  }
  if (transaction.type === TransactionType.INVESTMENT) {
    return (
      <div className="inline-flex items-center rounded-full bg-white bg-opacity-20 px-2 font-medium text-white">
        <CircleIcon className="mr-1 fill-white" size={8} />
        <span>Investimento</span>
      </div>
    );
  }
};

export default TransactionTypeProperty;
