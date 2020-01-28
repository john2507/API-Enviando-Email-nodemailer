import Mail from '../lib/Mail';

export default{

    key: 'RegistrationMail',

    async handle({ date }){
    const { user } = date ;


        await Mail.sendMail({
            from: 'Gueue Test <gueue@hotmail.com',
            to: `${user.name} <${user.email}>`,
            subject: 'cadastro de usuario',
             html: `Ola, ${user.name}, bem vubndo`
         })
    },
};