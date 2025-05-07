"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"

interface CertificationCardProps {
  title: string
  link: string
}

export default function CertificationCard({ title, link }: CertificationCardProps) {
  return (
    <div className="transition-all duration-300 hover:-translate-y-2 h-full">
      <Card className="h-full flex flex-col border border-primary/10 dark:border-primary/5 shadow-lg">
        <CardContent className="p-6 flex-grow flex flex-col justify-center">
          <h3 className="font-semibold text-xl text-center">{title}</h3>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-center border-t border-primary/5 mt-auto">
          <Link href={link} target="_blank" className="inline-flex items-center gap-2 text-sm font-medium hover:underline text-primary">
            View Certificate
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
