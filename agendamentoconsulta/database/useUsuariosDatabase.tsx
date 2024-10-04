import { useSQLiteContext } from "expo-sqlite"

export type UsuariosDatabase = {
    id: number;
    email: string;
    senha: string;
    nome: string;
    cep: string;
    endereco: string;
    numero: string;
    complemento: string;
    telefone: string;
    plano: string;
}

export function useUsuariosDatabase(){
    const database = useSQLiteContext()

    async function inserir(email: string, senha: string, nome: string, cep: string, endereco: string, numero: string, complemento: string, telefone: string, plano: string){  
        try{
            console.log("Iniciando inserção de usuário:", { email, nome, plano });

            const query = "SELECT * FROM usuarios WHERE email = ?";
            const result = await database.getAllAsync(query, [email.toString()])

            if (result.length != 0){
                throw new Error("Usuário já cadastrado")
            }

            console.log("Executando inserção no banco de dados");

            await database.runAsync(`INSERT INTO usuarios (email, senha, nome, cep, endereco, numero, complemento, telefone, plano)
                                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
                                    [email.toString(), senha.toString(), nome.toString(), cep.toString(), endereco.toString(), numero.toString(), complemento.toString(), telefone.toString(), plano.toString()]);
            
            console.log("Inserção concluída com sucesso");
            return true
        }catch(error){
            console.error("Erro na inserção:", error);
            throw error
        }
    }

    async function login(email: string, senha: string) {
        try {
            const query = "SELECT * FROM usuarios WHERE email = ? AND senha = ?";
            const resultado = await database.getAllAsync(query, [email, senha]);

            if (resultado.length > 0) {
                return resultado[0];
            } else {
                throw new Error("E-mail ou senha inválidos.");
            }
        } catch (error) {
            throw error;
        }
    }
    return { inserir, login };
}