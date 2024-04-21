import React from 'react'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from 'next/link'
function Login() {
  return (
    <div className="h-screen flex justify-center items-center w-full ">
       <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto w-[350px] space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Entrez votre email ci-dessous pour vous connecter à votre compte
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="m@example.com" required type="email" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Label htmlFor="password">Mot de passe</Label>
                <Link className="ml-auto inline-block text-sm underline" href="#">
                  Mot de passe oublié ?
                </Link>
              </div>
              <Input id="password" required type="password" />
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-900"  type="submit">
              Se connecter
            </Button>
          </div>
          
        </div>
      </div>
      <div className="hidden bg-gray-100 lg:block dark:bg-gray-800">
        <Image
          alt="Image"
          className="h-full w-full object-cover"
          height="1080"
          src="/placeholder.svg"
          style={{
            aspectRatio: "1920/1080",
            objectFit: "cover",
          }}
          width="1920"
        />
      </div>
    </div>
    </div>
  )
}

export default Login;
