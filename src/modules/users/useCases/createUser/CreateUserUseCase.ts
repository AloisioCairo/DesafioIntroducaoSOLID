import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ email, name }: IRequest): User {
    const user = this.usersRepository.findByEmail(email)

    if (!user) {
      return this.usersRepository.create({ name, email });
    }
    else {
      throw new Error("Já existe um cadastro de usuário com o email informado.");
    }
  }
}

export { CreateUserUseCase };
