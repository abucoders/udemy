"use client";

import { t } from "i18next";
import ReactStars from "react-stars";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const ReviewCard = () => {
  return (
    <div className="border-t-secondary mt-6 border-t">
      <div className="mt-8 flex gap-2">
        <Avatar>
          <AvatarImage src={""} />

          <AvatarFallback className="uppercase">SB</AvatarFallback>
        </Avatar>

        <div className="flex flex-col">
          <h1 className="">John Doe</h1>

          <div className="flex items-center gap-1">
            <ReactStars value={4.5} edit={false} color2="#DD6B20" />
            <p className="text-sm opacity-50 max-sm:text-xs">
              5 {t("minutes")}
            </p>
          </div>

          <div className="mt-2 max-sm:text-sm">Kurs prosta bomba 👌👍</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
