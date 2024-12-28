"use client";

import React from 'react';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { RiMenu4Line } from 'react-icons/ri';

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          className="xl:hidden"
          aria-label="Open mobile menu"
        >
          <RiMenu4Line className="text-2xl" />
        </Button>
      </SheetTrigger>
      {/* Rest of the component */}
    </Sheet>
  );
};

export default MobileNav; 