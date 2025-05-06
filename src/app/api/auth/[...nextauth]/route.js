import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';

const autHandler = NextAuth({
    providers:[
        CredentialsProvider({
            name:'Credentials' ,
            credentials:{
                email:{label: "email", type: "text"},
                password: {label: "password", type: 'password'}
            },
            async authorize(credentials) {
                try {
                    const{email,password} = credentials;
                    if(email === "demo"  && password === "demo"){
                        return { id: 1, name: "demo user"}
                    }
                } catch (e) {
                    return null
                }
            }
        })
    ],
    pages: {
        signIn:'/login'
    }
})

export{autHandler as GET, autHandler as POST};