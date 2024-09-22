import { Combustiveis, PrismaClient } from '@prisma/client'
import { Router } from "express"
import { z } from "zod"

const router = Router()
const prisma = new PrismaClient()

const carroSchema = z.object({
    modelo: z.string(),
    marca: z.string(),
    preco: z.number(),
    ano: z.number(),
    cor: z.string(),
    combustivel: z.nativeEnum(Combustiveis),
    km: z.number()
})

router.get("/", async(req, res) => {
    const carros = await prisma.carro.findMany({
        orderBy: { id: "desc"}
    })
    res.status(200).json(carros)
})

router.get("pesquisa/:modelo", async(req, res) => {
    const { modelo } = req.params

    const carros = await prisma.carro.findMany({
        orderBy: {id: "desc"},
        where: {modelo: { contains: modelo }}
    })
    res.status(200).json(carros)
})

router.post("/", async(req, res) => {
    const {modelo, ano, preco, marca, cor, combustivel, km} = req.body
    
    const result = carroSchema.safeParse(req.body)

    if(!result.success){
        res.status(400).json({erro: result.error})
        return
    }

    if(!modelo || !ano || !preco || !marca || !cor || !combustivel || !km){
        res.status(400).send("Erro! informe: modelo, ano, preco, marca, cor, combustivel")
        return
    }

    const carro = await prisma.carro.create({
    data: {
        modelo,
        ano,
        preco,
        marca,
        cor,
        combustivel,
        km 
    }})

    res.status(201).json(carro) 
})

router.put("/:id", async(req, res) => {
    const { id } = req.params
    
    const result = carroSchema.safeParse(req.body)

    if(!result.success) {
        res.status(400).json({ erro: result.error})
        return
    }

    const carro = await prisma.carro.update({
        where: { id: Number(id) },
        data: result.data
    })
    res.status(200).json(carro)
})

router.delete("/:id", async(req, res) => {
    const { id } = req.params

    const carro = await prisma.carro.delete({
        where: { id: Number(id) }
    })
    res.status(200).json(carro)
})

export default router