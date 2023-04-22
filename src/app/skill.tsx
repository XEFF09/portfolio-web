import PageHeader from '@/components/PageHeader'
import SkillItem from './skillItem'
import { RiHtml5Fill } from "react-icons/Ri"

export default function Skill() {
    return (
        <div className="bg-slate-800 py-4 md:py-24 px-4">
            <div className='container mx-auto px-2'>
                <PageHeader header="Skill" />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        Array(9).fill(0).map((value, index) => {
                            return (
                                <SkillItem
                                    key={ index }
                                    title='HTML'
                                    icon={ RiHtml5Fill }
                                    description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium sequi inventore optio dicta atque laborum illo non, autem recusandae error fuga consequuntur magnam aut ab dignissimos. Cum, tempora animi! Laboriosam?'
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}