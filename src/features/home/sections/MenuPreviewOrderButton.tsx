"use client";

import { useState } from "react";
import { OrderModal } from "@/components/shared/ui/OrderModal";
import type { Dictionary } from "@/lib/i18n/en";
import { getPageFonts } from "@/lib/utils/fonts";

type MenuPreviewOrderButtonProps = {
  label: string;
  ctaId: string;
  isRTL: boolean;
  orderModal: Dictionary["orderModal"];
};

export function MenuPreviewOrderButton({
  label,
  ctaId,
  isRTL,
  orderModal,
}: MenuPreviewOrderButtonProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const { arabicFont } = getPageFonts(isRTL);

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        data-cta={ctaId}
        className="premium-button-glow flex-1 py-2.5 rounded-lg text-sm font-semibold text-white"
        style={{ backgroundColor: "#E51E2A", ...arabicFont }}
      >
        {label}
      </button>
      {modalOpen ? (
        <OrderModal
          open={modalOpen}
          onOpenChange={setModalOpen}
          dict={orderModal}
        />
      ) : null}
    </>
  );
}
