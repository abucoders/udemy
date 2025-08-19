import { Mail, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";

import ContactForm from "@/components/forms/contact.form";
import TopBar from "@/components/shared/top-bar";

async function Page() {
  const t = await getTranslations();

  return (
    <>
      <div className="container mx-auto mt-24 mb-8 max-w-6xl">
        <TopBar label="Footer.contacts" />
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49060.96213555021!2d64.38151276852007!3d39.777594951060856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f50060e65993cd5%3A0xc87beaf40e48e767!2sBuxoro%2C%20Buxoro%20Viloyati%2C%20O%60zbekiston!5e0!3m2!1suz!2s!4v1721321802634!5m2!1suz!2s"
        loading="lazy"
        className="h-96 w-full"
      />

      <div className="container mx-auto max-w-6xl">
        <div className="mt-6 grid grid-cols-2 gap-4 max-md:grid-cols-1">
          <div className="flex flex-col">
            <h1 className="font-spaceGrotesk text-4xl font-bold">
              {t("ContactPage.title")}
            </h1>
            <p className="text-muted-foreground mt-2">
              {t("ContactPage.description")}
            </p>

            <div className="mt-12 flex items-center gap-3">
              <Mail className="size-4" />
              <p className="text-sm">abdulloyev.uz@gamil.com</p>
            </div>
            <div className="mt-2 flex items-center gap-3">
              <Phone className="size-4" />
              <p className="text-sm">+998 (93) 444-34-88</p>
            </div>
          </div>

          <div>
            <h1 className="font-spaceGrotesk mb-2 text-4xl font-bold">
              {t("ContactPage.form.title")}
            </h1>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
