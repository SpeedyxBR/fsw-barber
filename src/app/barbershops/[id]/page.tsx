import { db } from "@/app/_lib/prisma"
import Image from "next/image"
import { ChevronLeftIcon, Menu } from "lucide-react"
import { Button } from "../../_components/ui/button"
import Link from "next/link"

interface BarberShopPageProps {
  params: {
    id: string
  }
}

const BarberShopPage = async ({ params }: BarberShopPageProps) => {
  // chamar meu banco de dados para buscar a barbearia pelo id
  const barbershop = await db.barberShop.findUnique({
    where: {
      id: params.id,
    },
  })

  return (
    <div className="relative h-[250px] w-full">
      {/* Sintaxe correta para o componente Image */}
      <Image
        alt={barbershop?.name ?? "Imagem da barbearia"}
        src={barbershop?.imageUrl ?? "/Capa.png"}
        fill
        className="object-cover"
        sizes="100vw"
      />

      <Button size="icon" variant="secondary" className="absolute left-4 top-4" asChild>

        <Link href="/">
        <ChevronLeftIcon />
        </Link>
      </Button>

      <Button
        size="icon"
        variant="secondary"
        className="absolute right-4 top-4"
      >
        <Menu />
      </Button>
    </div>

    <div className="p-5">
      <h1 className="text-xl font--bold">{barbershop}</h1>
    </div className="flex itemns center">
  )
}

export default BarberShopPage
