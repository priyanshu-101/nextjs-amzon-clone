import { OrderUpdateManyWithoutUsersInput } from "./OrderUpdateManyWithoutUsersInput";
import { ReviewWhereUniqueInput } from "../review/ReviewWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: string | null;
  isAdmin?: boolean | null;
  lastName?: string | null;
  orders?: OrderUpdateManyWithoutUsersInput;
  password?: string;
  review?: ReviewWhereUniqueInput | null;
  roles?: InputJsonValue;
  username?: string;
};
