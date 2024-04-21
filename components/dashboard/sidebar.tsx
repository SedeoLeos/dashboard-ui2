import React from 'react'
import { BellIcon, HomeIcon, LineChartIcon, Package2Icon, PackageIcon, ShoppingCartIcon, UsersIcon } from './icons'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'


const sidebar =() =>{
  return (
    <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-[60px] items-center border-b px-6">
        <Link className="flex items-center gap-2 font-semibold" href="#">
          <Package2Icon className="h-6 w-6" />
          <span className="">Finance</span>
        </Link>
        <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
          <BellIcon className="h-4 w-4" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-4 text-sm font-medium">
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            <HomeIcon className="h-4 w-4" />
            Home
          </Link>
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            <ShoppingCartIcon className="h-4 w-4" />
            Orders
            <Badge className="ml-auto bg-blue-600 hover:bg-blue-600 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">6</Badge>
          </Link>
          <Link
            className="flex items-center gap-3 rounded-lg bg-blue-100 px-3 py-2 text-blue-600 transition-all hover:text-blue-600 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
            href="#"
          >
            <PackageIcon className="h-4 w-4" />
            Products
          </Link>
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            <UsersIcon className="h-4 w-4" />
            Customers
          </Link>
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            <LineChartIcon className="h-4 w-4" />
            Analytics
          </Link>
        </nav>
      </div>
      <div className="mt-auto p-4">
        <Card>
          <CardHeader className="pb-4">
            <CardTitle>Nanocreatives Support</CardTitle>
            <CardDescription>Unlock all features and get unlimited access to our support team</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-blue-600 hover:bg-blue-700" size="sm">
              Contact nous
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
  )
}

export default sidebar