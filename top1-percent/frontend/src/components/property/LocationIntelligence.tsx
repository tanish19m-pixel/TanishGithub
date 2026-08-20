import {
  Train, Bus, Car, School, GraduationCap, Hospital, Pill,
  ShoppingCart, Store, CreditCard, Fuel, Utensils, Dumbbell, TreePine, TrainFront,
} from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { formatDistance } from '@/lib/utils'
import type { NearbyPlace } from '@/types'

const typeIcons: Record<string, React.ElementType> = {
  metro: Train,
  bus: Bus,
  auto: Car,
  school: School,
  college: GraduationCap,
  hospital: Hospital,
  medical: Pill,
  grocery: ShoppingCart,
  dmart: Store,
  atm: CreditCard,
  petrol: Fuel,
  restaurant: Utensils,
  gym: Dumbbell,
  park: TreePine,
  railway: TrainFront,
}

const typeLabels: Record<string, string> = {
  metro: 'Nearest Metro Station',
  bus: 'Nearest Bus Stop',
  auto: 'Nearest Auto Stand',
  school: 'Nearest School',
  college: 'Nearest College',
  hospital: 'Nearest Hospital',
  medical: 'Nearest Medical Store',
  grocery: 'Nearest Grocery Store',
  dmart: 'Nearest Dmart',
  atm: 'Nearest ATM',
  petrol: 'Nearest Petrol Pump',
  restaurant: 'Nearest Restaurant',
  gym: 'Nearest Gym',
  park: 'Nearest Park',
  railway: 'Nearest Railway Station',
}

export function LocationIntelligence({ proximity }: { proximity: NearbyPlace[] }) {
  return (
    <GlassCard strong className="p-6">
      <h3 className="text-lg font-bold text-slate-900">Smart Location Intelligence</h3>
      <p className="mt-1 text-sm text-slate-500">Automatically detected nearby amenities</p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {proximity.map((place) => {
          const Icon = typeIcons[place.type] ?? Store
          const label = typeLabels[place.type] ?? place.type
          return (
            <div
              key={`${place.type}-${place.name}`}
              className="flex items-start gap-3 rounded-xl bg-slate-50/80 p-3"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                <Icon className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">{label}</p>
                <p className="truncate text-sm font-medium text-slate-800">{place.name}</p>
                <p className="text-xs text-slate-500">
                  {formatDistance(place.distanceKm)} · ~{place.travelTimeMin} min
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </GlassCard>
  )
}
