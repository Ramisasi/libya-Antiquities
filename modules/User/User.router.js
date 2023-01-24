import {Router} from 'express'
import {AddUser, DeleteUser, GetAllUsers, GetCountUsers, GetUserBetweenAge, GetUserByEndName, GetUserById, GetUserByStartName, GetUserFirstNameAndlastName, GetUserStartNameAndLessAge, loginControl, UpdateUser} from './Controller/user.js'

const router = Router();

router.post('/login',loginControl)

router.post('/AddUsers',AddUser)

router.put('/UpdateUser/:id',UpdateUser)

router.delete('/DeleteUser/:id',DeleteUser)

router.get('/GetAllUsers',GetAllUsers)

router.get('/GetUserByStartName/:StartName',GetUserByStartName )

router.get('/GetUserByEndName/:EndName',GetUserByEndName )

router.get('/GetUserById/:id',GetUserById )

router.post('/GetUserBetweenAge',GetUserBetweenAge )

router.post('/GetUserStartNameAndLessAge',GetUserStartNameAndLessAge )

router.get('/GetUserFirstNameAndlastName/:StartName',GetUserFirstNameAndlastName )

router.get('/GetCountUsers',GetCountUsers )

export default router