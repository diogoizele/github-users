import type { User } from "shared/user.types";
import type { Repository } from "shared/repository.types";

export interface GithubContextSchema {
  currentUser?: User;
  repositories?: Repository[];
}
