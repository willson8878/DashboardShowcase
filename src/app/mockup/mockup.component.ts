import { Component } from '@angular/core';
import { MockupServices } from "./mockup.services";

@Component({
  selector: 'mockup-cmp',
  templateUrl: './mockup.component.html'
})

export class MockupComponent {
  isLoading: boolean;
  overAllData: any;
  mainStatus: any;
  constructor(private _service: MockupServices) {
    this.isLoading = true;
  }

  ngOnInit(): void {
    this.getOverallInfo();
    this.getRoomsDetail();
  }

  public getOverallInfo() {
    // let result = this._service.getOverallInfo();
    // console.log(result);
    this._service.getOverallInfo().subscribe(
      (res: any) => {
        this.overAllData = res.hasOwnProperty('Data') ? res.Data : undefined;
        console.log(this.overAllData);
      },
      (err: any) => {
        console.error('房态图，访问链接信息报错');
      }
    );
  }

  public getRoomsDetail() {
    this._service.getRoomsDetail().subscribe(
      (res: any) => {
        this.mainStatus = res.hasOwnProperty('Data') ? res.Data : undefined;
        console.log(this.mainStatus);
      },
      (err: any) => {
        console.error('房间信息， 访问链接信息报错');
      }
    )
  }
}

