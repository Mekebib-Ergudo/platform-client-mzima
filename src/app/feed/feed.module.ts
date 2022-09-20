import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { SharedModule } from '../shared/shared.module';
import { FeedRoutingModule } from './feed-routing.module';
import { EditFeedItemComponent } from './edit-feed-item/edit-feed-item.component';
import { PostModule } from '../post/post.module';

@NgModule({
  declarations: [FeedComponent, EditFeedItemComponent],
  imports: [CommonModule, SharedModule, FeedRoutingModule, PostModule],
})
export class FeedModule {}