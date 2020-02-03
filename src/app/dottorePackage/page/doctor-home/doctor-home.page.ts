import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RubyApiService } from 'src/app/service/ruby-api.service';
import { GlobalService } from 'src/app/service/global.service';
import { EnvService } from 'src/app/service/env.service';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.page.html',
  styleUrls: ['./doctor-home.page.scss'],
})
export class DoctorHomePage implements OnInit {
  public response : any = [];
  title = "Lista pazienti"
  constructor(private navCtrl: NavController,
    public rubyService: RubyApiService, public globalService:GlobalService, public env:EnvService) {
     }

  ngOnInit() {
    if(this.globalService.currentUser.user_type ==2)
      this.getListaPazientiForMedico()
    else
      this.getListaPazientiForCaregiver()
  }
  loginPage() {
    this.navCtrl.navigateRoot('/');
  }
  penMenu() {
    document.querySelector('ion-menu-controller')
      .open();
  }
  inserisciPaziente() {
    this.globalService.modify = false;
    this.navCtrl.navigateRoot('/tabs/tab1');
  }
  ComProblema() {
    this.navCtrl.navigateRoot('/com-problema');
  }
  homeDoctor() {
    this.navCtrl.navigateRoot('/doctor-home');
  }

  getListaPazientiForMedico() {
    
    this.rubyService.get_patients(this.globalService.currentUser.id).subscribe(
      data => {
        console.log(data);
        this.response = data   
        for(let item of this.response){
          if(item.patient.profile_pic == undefined){
            item.patient.profile_pic = "../../assets/img/profilo.png"
          } else {
            item.patient.profile_pic = this.env.API_URL +  item.patient.profile_pic
          }
        }
      },
      error => {
        console.log(error);
      },
      () => {
       
      }
    );
  }

  getListaPazientiForCaregiver() {
    
    this.rubyService.get_patients_alliance(this.globalService.currentUser.id).subscribe(
      data => {
        console.log(data);
        this.response = data   
      },
      error => {
        console.log(error);
      },
      () => {
       
      }
    );
  }

  openDetail(patient) {
    console.log(this.globalService.currentUser)
    if(this.globalService.currentUser.user_type ==2) {
      this.globalService.currentPatient= patient.patient;
      this.globalService.currentPatient.user_in_alliance= patient.user_in_alliance;
      this.globalService.currentPatient.alliance= patient.alliance;
      this.navCtrl.navigateRoot('/profilo-paziente');
    } else {
      this.globalService.currentPatient= patient.patient;
      this.navCtrl.navigateRoot('/paziente-home');
    }
  }
}
