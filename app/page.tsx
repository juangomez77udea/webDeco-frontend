import Header from '@/app/components/organism/Header';
import Hero from '@/app/components/organism/Hero';
import Grid from '@/app/components/organism/Grid';
import { ToggleGroup } from './components/molecules/Toggle-group';


export default function Home() {
  return (
    <div >
      <Header />
      <Hero />
      <Grid />

    </div>
  );
}
