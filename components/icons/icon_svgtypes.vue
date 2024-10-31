<template>
  <i>
    <component :is="getIcon" v-if="getIcon" />
  </i>
</template>
  
<script setup>

import BugIcon from './types_icons/Bug.vue';
import DarkIcon from './types_icons/Dark.vue';
import DragonIcon from './types_icons/Dragon.vue';
import ElectrikIcon from './types_icons/Electrik.vue';
import FairyIcon from './types_icons/Fairy.vue';
import FightingIcon from './types_icons/Fighting.vue';
import FireIcon from './types_icons/Fire.vue';
import FlyingIcon from './types_icons/Flying.vue';
import GhostIcon from './types_icons/Ghost.vue';
import GrassIcon from './types_icons/Grass.vue';
import GroundIcon from './types_icons/Ground.vue';
import IceIcon from './types_icons/Ice.vue';
import NormalIcon from './types_icons/Normal.vue';
import PoisonIcon from './types_icons/Poison.vue';
import PsychicIcon from './types_icons/Psychic.vue';
import SteelIcon from './types_icons/Steel.vue';
import RockIcon from './types_icons/Rock.vue';
import WaterIcon from './types_icons/Water.vue';

const props = defineProps({
  name: String
})

const getIcon = computed(() => {
  switch (props.name) {
    case 'Bug': return BugIcon;
    case 'Dark': return DarkIcon;
    case 'Dragon': return DragonIcon;
    case 'Electrik': return ElectrikIcon;
    case 'Fairy': return FairyIcon;
    case 'Fighting': return FightingIcon;
    case 'Fire': return FireIcon;
    case 'Flying': return FlyingIcon;
    case 'Ghost': return GhostIcon;
    case 'Grass': return GrassIcon;
    case 'Ground': return GroundIcon;
    case 'Ice': return IceIcon;
    case 'Normal': return NormalIcon;
    case 'Poison': return PoisonIcon;
    case 'Psychic': return PsychicIcon;
    case 'Steel': return SteelIcon;
    case 'Rock': return RockIcon;
    case 'Water': return WaterIcon;
    default: return null;
  }
});

</script>