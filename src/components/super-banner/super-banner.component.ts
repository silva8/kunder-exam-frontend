import { Component, OnInit } from '@angular/core';
import { BannerService } from '../../app/banner.service';

@Component({
  selector: 'app-super-banner',
  templateUrl: './super-banner.component.html',
  styleUrls: ['./super-banner.component.scss']
})
export class SuperBannerComponent implements OnInit {

  banner;

  constructor(private bannerService: BannerService) { }

  ngOnInit() {
    this.getBanner();
  }

  async getBanner() {
    let data = await this.bannerService.getBannerData().toPromise();
    this.banner = data['product'];
    if (this.banner.backgroundImg == '')
      this.banner.backgroundImg = '../../assets/imgs/waves-2.png';
    console.log(this.banner);
  }

}
