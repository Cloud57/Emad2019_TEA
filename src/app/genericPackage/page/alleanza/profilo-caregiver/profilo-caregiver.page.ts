import { Component, OnInit } from '@angular/core';
import {User} from 'src/app/models/user';
import { GlobalService } from 'src/app/service/global.service';
import { NavController } from '@ionic/angular';
  import { from } from 'rxjs';
@Component({
  selector: 'app-profilo-caregiver',
  templateUrl: './profilo-caregiver.page.html',
  styleUrls: ['./profilo-caregiver.page.scss'],
})
export class ProfiloCaregiverPage implements OnInit {
  public title:string = "Profilo Caregiver"
  public age:number;
  public caregiver:User = new User();

  constructor(private navCtrl: NavController, public global : GlobalService)
 { 
    this.caregiver = global.currentUser
  }

  ngOnInit() {
  }

}
