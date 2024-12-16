// app/Controllers/Http/UserController.js
import User from '#models/user';
import Hash from '@adonisjs/core/services/hash';
import type { HttpContext } from '@adonisjs/core/http';
export default class UserController {
  // Criar um novo usuário
  async store({ request, response }: HttpContext) {
    const { email, name, password } = request.all();

    const user = new User();
    user.email = email;
    user.name = name;
    user.password = await Hash.make(password); // Hash da senha

    await user.save();

    return response.status(201).json(user);
  }

  // Listar todos os usuários
  async index({ response }: HttpContext) {
    const users = await User.all();
    return response.status(200).json(users);
  }

  // Exibir um usuário específico
  async show({ params, response }: HttpContext) {
    const user = await User.find(params.id);
    if (!user) {
      return response.status(404).json({ message: 'User not found' });
    }
    return response.status(200).json(user);
  }

  // Atualizar um usuário
  async update({ params, request, response }: HttpContext) {
    const user = await User.find(params.id);
    if (!user) {
      return response.status(404).json({ message: 'User not found' });
    }

    const { email, name, password } = request.all();
    user.email = email || user.email;
    user.name = name || user.name;
    user.password = password ? await Hash.make(password) : user.password;

    await user.save();

    return response.status(200).json(user);
  }

  // Excluir um usuário
  async destroy({ params, response }: HttpContext) {
    const user = await User.find(params.id);
    if (!user) {
      return response.status(404).json({ message: 'User not found' });
    }

    await user.delete();

    return response.status(204).json({ message: 'User deleted' });
  }
}
