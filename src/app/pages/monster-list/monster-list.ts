import { Component, computed, inject, model, signal } from '@angular/core';
import { MonsterService } from '../../services/monster/monster.service';
import { Monster } from '../../models/monster.models';
import { PlayingCard } from '../../components/playing-card/playing-card';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../../components/search-bar.component/search-bar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monster-list',
  imports: [PlayingCard, CommonModule, SearchBarComponent],
  templateUrl: './monster-list.html',
  styleUrl: './monster-list.scss'
})
export class MonsterList {
    private router = inject(Router);
    monsterService = inject(MonsterService);

    monsters = signal<Monster[]>([]);
    search = model('');

    filteredMonsters = computed(() => {
    return this.monsters().filter(monster => monster.name.toLowerCase().includes(this.search().toLocaleLowerCase()));
    })

    constructor() {
        this.monsters.set(this.monsterService.getAll());
    }

    addMonster() {
        this.router.navigate(['monster'])
    }

    openMonster(monster: Monster) {
        this.router.navigate(['monster', monster.id])
    }
}
