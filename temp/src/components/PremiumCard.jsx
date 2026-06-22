import React from 'react'
import diamondImage from "../assets/sidebar/diamond.png"
import { Button } from './ui/button'

const PremiumCard = () => {
    return (
        <div className="rounded-xl p-3 text-white bg-[linear-gradient(160deg,var(--card-from),var(--card-via),var(--card-to))] space-y-4">
            <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center shrink-0">
                    <img src={diamondImage} alt="Premium" className="h-6 w-6" />
                </div>

            </div>
            <div>
                <h3 className="text-sm font-semibold">Upgrade to Premium !</h3>
                <p className="text-[11px] text-white/80 mt-2">
                    Upgrade your account for unlimited premium access.
                </p>
            </div>

            <Button className=" rounded-md w-full bg-[linear-gradient(180deg,var(--button-from),var(--button-to))] text-white cursor-pointer">
                Upgrade Premium
            </Button>
        </div>
    )
}

export default PremiumCard