import { NgModule } from '@angular/core';
import { SearchPipe } from './search/search';
import { SafeHtmlPipe } from './safe-html/safe-html';
@NgModule({
	declarations: [SearchPipe,
    SafeHtmlPipe],
	imports: [],
	exports: [SearchPipe,
    SafeHtmlPipe]
})
export class PipesModule {}
