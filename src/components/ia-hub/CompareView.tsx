import DashboardLayout from './DashboardLayout';
import Comparador from './Comparador';
import type { IAData } from '../../lib/types';

interface CompareViewProps {
    data: IAData[];
}

export default function CompareView({ data }: CompareViewProps) {
    return (
        <DashboardLayout activePage="compare">
            <div className="p-6 md:p-10 max-w-5xl mx-auto">
                <div className="mb-8 text-center md:text-left">
                    <h1 className="text-3xl font-bold mb-2">Comparador</h1>
                    <p className="text-zinc-500">Analiza puntos fuertes y precios lado a lado.</p>
                </div>

                <Comparador allData={data} />
            </div>
        </DashboardLayout>
    );
}
