//====== SIN TERMINAR======

const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

async function main(){

    const post = await prisma.usuario.create({
        data:{
            codigo_estudiante:'Jose Luis',
            contraseña:'123',
        }
    })
    console.log(post)
}

main()
    .catch((e)=>{
        throw e
    })
    .finally(async ()=> {
        await prisma.$disconnect()
    })