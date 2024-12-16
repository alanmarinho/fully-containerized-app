import router from '@adonisjs/core/services/router';
const UserController = () => import('#controllers/http/user_controller');

router.get('/', async () => {
  return {
    hello: 'world',
  };
});
router.get('users', [UserController, 'index']);
router.post('users', [UserController, 'store']);
router.get('users/:id', [UserController, 'show']);
router.put('users/:id', [UserController, 'update']);
router.delete('users/:id', [UserController, 'destroy']);
