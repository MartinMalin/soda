import { Component, OnInit } from '@angular/core';
import { ImageLoadService } from '../../services/image-load.service';
import { Subject } from 'rxjs/';


@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {

    query: string = '';

    images: any[] = [];
    searchTerm$ = new Subject<string>();

    constructor(private loadImageService: ImageLoadService) { }

    ngOnInit() {
        this.loadImageService.search(this.searchTerm$)
        .subscribe((images: { data: any[] }) => {
            this.images = images.data;
            console.log(this.images);
        });
    }

    onSearchChange(searchValue : string ) {  
        this.query = searchValue;
    }
  
}
