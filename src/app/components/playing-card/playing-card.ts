import { MonsterTypeProperties } from './../../utils/monster.utils';
import { Component, input, computed } from '@angular/core';

import {Monster} from '../../models/monster.models';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.html',
  styleUrl: './playing-card.scss',
  standalone: true
})
export class PlayingCard {
	monster = input<Monster>(new Monster());
  monsterTypeIcon = computed(() => {
    return MonsterTypeProperties[this.monster().type].imageUrl;
  })
  backgroundColor = computed(() => {
    return MonsterTypeProperties[this.monster().type].color;
  })
}
