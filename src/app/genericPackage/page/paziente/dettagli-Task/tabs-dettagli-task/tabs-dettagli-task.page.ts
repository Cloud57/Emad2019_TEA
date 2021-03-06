import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';
import { RubyApiService } from 'src/app/service/ruby-api.service';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-tabs-dettagli-task',
  templateUrl: './tabs-dettagli-task.page.html',
  styleUrls: ['./tabs-dettagli-task.page.scss'],
})
export class TabsDettagliTaskPage implements OnInit {
  public title:String;
  constructor(public global:GlobalService, public location:Location, public navCtrl:NavController, public ruby:RubyApiService) { 
    this.title = global.currentTask.name;
    console.log(this.global.currentTask.autonomy);
    
  }

  ngOnInit() {

  }

  goBack(){
    if(this.global.currentUser.user_type == 2)
      this.navCtrl.navigateRoot('/lista-task');
    else 
      this.navCtrl.navigateRoot('/paziente-home');
  }

  modify(){
    this.global.modify=true
    this.navCtrl.navigateRoot('/new-task');
  }

}
