// simulando como estivesse com acesso ao banco atravez do metodo store
import Mail from '../lib/Mail';
export default{
    async store(req, res){
        const {name, email, password} = req.body;
    
        const user = {
            name,
            email,
            password,
        };

      
        return res.json(user);
    }
}


















































