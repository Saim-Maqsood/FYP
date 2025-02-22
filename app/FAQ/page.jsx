import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import React from 'react'

const page = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-white">Is it accessible?</AccordionTrigger>
          <AccordionContent className="text-white">
            Yes. As it is an online platform it is accessible to general public
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-white">Does Med Magic support delivery providers?</AccordionTrigger>
          <AccordionContent className="text-white">
            Yes. We support popular delivery providers like indrive courier and yango delivery
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-white">What kind of products do you offer?</AccordionTrigger>
          <AccordionContent className="text-white">
            We provide OTC medications as well as high quality medical equipment
          </AccordionContent>
        </AccordionItem>
      </Accordion>
  )
}

export default page

  