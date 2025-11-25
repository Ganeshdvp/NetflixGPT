import React from 'react'

export const Trending = () => {

    const images =[
        "https://occ-0-3783-3663.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABXRA550L4KAjwchmUf2zeOf_rWM1nH-uDQFDoh41qAMS9vxUNU-UXY9CZnBTMgnaGrNN4F0ckkH-FG4CU30a6lbA4b_EdowofMwag6zkwZIuA3E4jt4iuLG1PfROYx1fgIdS.jpg?r=e79",
        "https://occ-0-3783-3663.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABRm796OC7r1j9ViDTbyrUSWrpx11ZybtxwW877vsv9pb7vTauicewUi9GoYgIOE66LMP9vyb9NW-IWaOzEblhcyWzbxSaqQUwAQ.jpg?r=960",
        "https://occ-0-3783-3663.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZBNpPRqz7ENbI6RF8S5l0eLsB1t5Oa-Cn0VuRlMPOiPP5wEQyrBk8XtUBGMAotP0Vf-MiBNM4nlaScaQw9VjPqx3Dghp0Lgj9BBHm4gNY0dD9B5KPCkaFqqUJDZbl1M8pNB.jpg?r=466",
        "https://occ-0-3783-3663.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABVCFw8MF6uGSOWNdDuWDceFWSWZ_MZr2EVeAVUKKwem4V55-hgOZIN4bL1ec88hlPQR8gCcr5Kjh3D5ooumjy06p86FGLS_UZOw.jpg?r=267",
        "https://occ-0-3783-3663.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABXS6ej1m7H2Fq2aw-QomCWu-DJTj5D8BSC6NGrYz_2-mqMCn1l3SwOBKilDzaOkXVpCAOLsi6JbnqxWs4EEkadtVTF95SeCabZg.jpg?r=914",
    ]

  return (
    <>
    <div className='bg-black'>

        <h2 className='text-white text-2xl ml-38 font-bold py-6'>Trending Now</h2>

        <div className='flex space-x-6 ml-45 pb-12'>
            {
            images.map((item,index)=>{
                return (
                <img src={item} alt='trending-images' key={index} className='object-cover hover:scale-105 transition-transform duration-300 ease-in-out rounded-xl'/>
                )
            })
        }
        </div>
    </div>
    </>
  )
}
