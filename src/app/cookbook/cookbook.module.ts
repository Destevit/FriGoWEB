import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { CookbookRoutingModule } from './cookbook-routing.module';
import { CookbookComponent } from './cookbook/cookbook.component';
import { RecipeTileComponent } from './recipe-tile/recipe-tile.component';
import { CookbookService } from './cookbook.service';

import { FindRecipeByName } from './find-by-name.pipe';
import { FindRecipeByCategory } from './find-by-category.pipe';

@NgModule({
  imports: [
    SharedModule,
    CookbookRoutingModule
  ],
  declarations: [CookbookComponent, RecipeTileComponent, FindRecipeByName, FindRecipeByCategory],
  providers: [CookbookService]
})
export class CookbookModule { }
