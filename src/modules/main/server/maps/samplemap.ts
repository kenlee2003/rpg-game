import { RpgMap, MapData } from '@rpgjs/server'
import { VillagerEvent } from '../events/villager'

@MapData({
    id: 'mymap',
    file: require('./tmx/simplemap.tmx'),
    name: 'Forest',
    events: [
        VillagerEvent
    ]
})
export class SampleMap extends RpgMap {}