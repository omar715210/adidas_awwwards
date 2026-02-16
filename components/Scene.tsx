import { ShirtType } from '@/lib/textures';
import { View } from '@react-three/drei'
import { FirstWhiteModel } from './FirstWhiteModel';
import { FirstGrayModel } from './FirstGrayModel';
import { FirstSportModel } from './FirstSportModel';
import { SecondModel } from './SecondModel';
import ThirdModel from './ThirdModel';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

type Props = {
    shirtType?: ShirtType;
}

gsap.registerPlugin(ScrollTrigger)

const Scene = ({ shirtType }: Props) => {
  return (
    <main className='min-h-screen'>
        {/* first section */}
        <section id='first-section' className='h-screen'>
            <View className='w-dvw h-dvh'>
                {shirtType === 'white' && <FirstWhiteModel />}
                {shirtType === 'gray' && <FirstGrayModel />}
                {shirtType === 'sport' && <FirstSportModel />}
            </View>
        </section>
        {/* third section  */}
        <section id='third-section' className='absolute left-0 top-[500vh] h-screen'>
            <View className='w-dvw h-dvh'>
               {shirtType && <ThirdModel shirtType={shirtType} />}
            </View>
        </section>
        {/* second section  */}
        <section id='second-section' className='h-screen absolute inset-0 -z-10'>
            <View className='w-dvw h-dvh'>
                {shirtType && <SecondModel shirtType={shirtType} />}
            </View>
        </section>
    </main>
)
}

export default Scene