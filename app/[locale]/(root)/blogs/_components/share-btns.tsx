"use client";

import { Facebook, Link2, Linkedin, Send, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

const ShareBtns = () => {
  const pathname = usePathname();

  const onCopy = () => {
    const link = process.env.NEXT_PUBLIC_BASE_URL + pathname;
    navigator.clipboard.writeText(link).then(() => {
      toast.success("Copied to clipboard");
    });
  };
  return (
    <div className="mt-4 flex flex-col max-md:flex-row max-md:space-x-3 md:space-y-3">
      <Button size={"icon"} variant={"outline"} onClick={onCopy}>
        <X />
      </Button>
      <Button size={"icon"} variant={"outline"} onClick={onCopy}>
        <Facebook />
      </Button>
      <Button size={"icon"} variant={"outline"} onClick={onCopy}>
        <Linkedin />
      </Button>
      <Button size={"icon"} variant={"outline"} onClick={onCopy}>
        <Send />
      </Button>
      <Button size={"icon"} variant={"outline"} onClick={onCopy}>
        <Link2 />
      </Button>
    </div>
  );
};

export default ShareBtns;
