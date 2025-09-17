import { Button } from "./_components/ui/button"
import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Input } from "./_components/ui/input"
import Image from "next/image"

const Home = () => {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá. Andrel!</h2>
        <p>Segunda-feira, 16 de Setembro.</p>

        <div className="mt-6 flex items-center gap-8">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full overflow-hidden rounded-lg">
          <Image
            alt="Agende nos melhores com FSW Barber"
            src="/banner-01.png"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
