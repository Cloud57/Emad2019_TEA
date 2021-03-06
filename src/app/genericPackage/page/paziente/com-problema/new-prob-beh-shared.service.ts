import { Injectable } from '@angular/core';
import { Problem_behaviour } from 'src/app/models/Problem_behaviour';

@Injectable({
  providedIn: 'root'
})
export class NewProbBehSharedService {
  problem:Problem_behaviour
  public fileVideoToUpload: any
  public fileAudioToUpload: any
  public videoBlob: Blob = null;
  public audioBlob: Blob = null;
  constructor() { }
}
