import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snape.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

butonContenu!: string;

ngOnInit() {
this.butonContenu = 'Oh snap'

}

  onSnap(){
    
    if(this.butonContenu == 'Oh snap'){
      this.butonContenu = 'Oops, unsnap';
      this.faceSnap.snaps++
    }else{
      this.butonContenu = 'Oh snap'
      this.faceSnap.snaps--
    }
  }
}
