import Image from "next/image"
import { Card, CardContent } from "./ui/card"

const Header = () => {
  return (
    <Card>
      <CardContent>
        <Image src="/logo.png" height={18} width={120} alt="Logo" />
      </CardContent>
    </Card>
  )
}

export default Header
