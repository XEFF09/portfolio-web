import type { IconType } from "react-icons";
import { createElement } from "react";

interface SkillItemType {
    title: string;
    description: string;
    icon: IconType;
}

export default function SkillItem({ title, description, icon }: SkillItemType) {
    return (
        <div className='bg-[#e1e1e1] p-5'>
            <div className="text-amber-600">
                <div className="text-3xl">
                    { createElement(icon) }
                </div>
                <h2 className="font-semibold text-xl">
                    { title }
                </h2>
            </div>
            <p className="text-gray-500 text-sm">
                { description }
            </p>
        </div>
    )
}