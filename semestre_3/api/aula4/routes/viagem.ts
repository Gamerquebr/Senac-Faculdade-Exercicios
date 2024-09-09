import { ROLE, PrismaClient } from '@prisma/client'
import { Router } from "express"
import { z } from "zod"

const router = Router()
const prisma = new PrismaClient

const viagemSchema = z.object({
    id: z.number(),
    destino: z.string(),
    transporte: z.nativeEnum(ROLE),
    dataSaida: z.string(),
    preco: z.number(),
    duracao: z.number(),
})

router.get("/", async(req, res) => {
    const viagem = await prisma.viagens.findMany()
    res.status(200).json(viagem)
})

router.post("/", async(req, res) => {
    const result = viagemSchema.safeParse(req.body)

    const viagem = await prisma.viagens.create({data: result})

    res.status(201).json(viagem)
})