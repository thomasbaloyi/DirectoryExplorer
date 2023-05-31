import { Component, OnInit } from '@angular/core';
import { Directory } from 'src/app/model/directory.model';
import { ExplorerService } from 'src/app/services/explorer.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  directories: Directory[] = [];

  constructor(private explorerService: ExplorerService) {}

  ngOnInit(): void {
    this.getDirectoryDetails(`C:\\Projects`);
  }

  public getDirectoryDetails(directory: string): void {
    this.explorerService.getDirectory(directory).subscribe((response: Directory[]) => {
      this.directories =response;
    });
  }

}
