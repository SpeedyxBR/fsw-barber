import { Button } from "./_components/ui/button"
import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { CardContent, Card } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop.item"

const Home = async () => {
  const barbershops = await db.barberShop.findMany({})
  const popularBarbershops = await db.barberShop.findMany({
    orderBy: {
      name: "desc"
    },
  })

  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá. Andrel!</h2>
        <p>Segunda-feira, 16 de Setembro.</p>
        <p className="text-sm text-gray-500"></p>

        {/* BUSCA */}
        <div className="mt-6 flex items-center gap-8">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        {/* BUSCA RAPIDA */}
        <div className="flex gap-3 mt-6 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          <Button className="gap-2" variant="secondary">
            <Image 
            src="/cabelo.svg" 
            width={16} height={16} 
            alt="Cabelo" />
            Cabelo

          </Button>

            <Button className="gap-2" variant="secondary">
            <Image 
            src="/barba.svg" 
            width={16} height={16} 
            alt="Barba" />
            Barba
          </Button>

            <Button className="gap-2" variant="secondary">
            <Image 
            src="/acabamento.svg" 
            width={16} 
            height={16} 
            alt="Acabamento" />
            Acabamento
          </Button>

           <Button className="gap-2" variant="secondary">
            <Image 
            src="/massagem.svg" 
            width={16} height={16} 
            alt="Massagem" />
            Massagem

          </Button>

            <Button className="gap-2" variant="secondary">
            <Image 
            src="/sobrancelha.svg" 
            width={16} height={16} 
            alt="Sobrancelha" />
            Sobrancelha
          </Button>

            <Button className="gap-2" variant="secondary">
            <Image 
            src="/Hidratacao.svg" 
            width={16} 
            height={16} 
            alt="Hidratação" />
            Hidratação
          </Button>
          
        </div>


        {/* IMAGEM */}
        <div className="relative mt-6 h-[150px] w-full overflow-hidden rounded-lg">
          <Image
            alt="Agende nos melhores com FSW Barber"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/* AGENDAMENTO */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>
        <Card>
          <CardContent className="flex justify-between p-0">
            {/* ESQUERDA */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="fonte font-semibold">Corte de Cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>
            {/* Direita */}
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">14:00</p>
            </div>
          </CardContent>
        </Card>
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}

        </div>

           <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>
        <div className="flex gap-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
      <footer>
          <Card>
            <CardContent className="px-5 py-6">
              <p className="text-sm text-gray-400">
                © 2025 Copyright <span className="font-bold">FSW Barber</span>
              </p>
            </CardContent>
          </Card>
        </footer>
    </div>
  )
}

export default Home
