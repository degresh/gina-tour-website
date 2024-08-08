"use client";

import { PackageVariant } from "@/app/lib/entity/package-variant";
import React, { useState } from "react";

export default function PackageRegistrationVariant({packageVariants}: {
    packageVariants: PackageVariant[]
}) {
    const [selectedVariantId, setSelectedVariantId] = useState<number>(0);

    return (
        <div className="flex flex-row gap-4">
            {
                packageVariants.map((variant) => {
                    const isSelected = selectedVariantId == variant.id;

                    return (
                        <div
                            key={variant.id}
                            onClick={() => setSelectedVariantId(variant.id)}
                            className={`grow basis-1/4 border rounded-lg ${
                                isSelected ? 'border-blue-600 bg-blue-200' : 'border-gray-300'
                            }`}>
                            <div className="p-4">
                                <h3 className="text-lg font-bold mt-2">{variant.name}</h3>
                                <p className="text-gray-700">{variant.description}</p>
                                <span> {
                                    new Intl.NumberFormat('id-ID', {
                                        style: 'currency',
                                        currency: 'IDR'
                                    }).format(variant.price)
                                } </span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}