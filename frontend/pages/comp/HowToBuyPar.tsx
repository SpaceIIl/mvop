import type { NextPage} from 'next'
import Link from 'next/link'
import BuyInfo from './BuyInfo'
import Paragraph from './Paragraph'
import { useState } from 'react'

const HowToBuyPar: NextPage = () => {
    const [showTextBuy, setShowTextBuy] = useState(false);
    const [showTextBuy2, setShowTextBuy2] = useState(false);
    const [showTextBuy3, setShowTextBuy3] = useState(false);
    const [showTextBuy4, setShowTextBuy4] = useState(false);

    return (
        <div className=''>
            <div className='py-32'>
                <Paragraph title='Opurtnitn 1' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus congue lectus at fermentum pellentesque. Pellentesque ullamcorper, neque vel sagittis posuere, justo ex bibendum ligula, sed scelerisque mauris nulla eget lectus. Nullam ligula libero, aliquet eu tincidunt at, posuere molestie odio. Sed bibendum fermentum orci. Nam a nisl varius, molestie nisi quis, mattis nisi. Nullam sit amet nisl lobortis, pretium sem non, vehicula odio. Duis et semper metus. Nulla eget pretium nunc, non viverra dolor' />
            </div>
            <div className='bg-black text-white py-32'>
                <div className=' w-[640px] mx-auto'>
                    <div className='pb-12'>
                        <button className='mb-3 flex justify-between w-[640px]' onClick={()=> setShowTextBuy(!showTextBuy)}><h3 className='NavButton !text-white'>Nejjednodušší cesta, jak nakoupit</h3><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z" fill="currentColor" /></svg></button>
                        {showTextBuy ? <BuyInfo content='sdlfsdkjfkjsdh h ksdjfhksh fdkjh fkjshd kjfhsk h'/> : null}
                    </div>
                    <div className='pb-12'>
                        <button className='mb-3 NavButton !text-white' onClick={()=> setShowTextBuy2(!showTextBuy2)}><h3>Koupit pro delší držení</h3></button>
                        {showTextBuy2 ? <BuyInfo content='sdlfsdkjfkjsdh h ksdjfhksh fdkjh fkjshd kjfhsk h'/> : null}
                    </div>
                    <div className='pb-12'>
                        <button className='mb-3 NavButton !text-white' onClick={()=> setShowTextBuy3(!showTextBuy3)}><h3>Obchodovani</h3></button>
                        {showTextBuy3 ? <BuyInfo content='sdlfsdkjfkjsdh h ksdjfhksh fdkjh fkjshd kjfhsk h'/> : null}
                    </div>
                    <div>
                        <button className='mb-3 NavButton !text-white' onClick={()=> setShowTextBuy4(!showTextBuy4)}><h3>Lmao neco proste</h3></button>
                        {showTextBuy4 ? <BuyInfo content='sdlfsdkjfkjsdh h ksdjfhksh fdkjh fkjshd kjfhsk h'/> : null}
                    </div>
                </div>
            </div>
            <div className='py-32'>
                <Paragraph title='Opurtnitn 1' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus congue lectus at fermentum pellentesque. Pellentesque ullamcorper, neque vel sagittis posuere, justo ex bibendum ligula, sed scelerisque mauris nulla eget lectus. Nullam ligula libero, aliquet eu tincidunt at, posuere molestie odio. Sed bibendum fermentum orci. Nam a nisl varius, molestie nisi quis, mattis nisi. Nullam sit amet nisl lobortis, pretium sem non, vehicula odio. Duis et semper metus. Nulla eget pretium nunc, non viverra dolor' />
            </div>
        </div>
    )
}

export default HowToBuyPar