import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snape.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  mySnap2!: FaceSnap;
  mySnap3!: FaceSnap;

  ngOnInit(){
      this.mySnap = new FaceSnap(
        'A moi Angular',
        "https://www.nglesson.com/assets/imgs/img_articles/solutiontechniques/angular-logo.jpg",
        'Après avoir souffer avec la fibre optic',
        new Date(),
        0,


      );

      this.mySnap2 = new FaceSnap(
        "L'objectif en marche",
        "https://lh3.googleusercontent.com/6NSoWYXyYJpap_3f-NYS8TrZV2kEonYxsadyT7Z5av1oPHWASNezAY9A662LozBnSXgHE7AUi5MPWw57wkr4zyeuEt1spcs-a6gFUh3WGULUT_TTQVecj19YOpMwxIfOdZWlRhkr",
        'Metrisez le JavaScript et ses Framwork',
        new Date(),
        0,


      );

      this.mySnap3 = new FaceSnap(
        "Je serai l'un des meilleur developpeur",
        "https://media.gettyimages.com/id/1150528651/fr/photo/d%C3%A9veloppeur-it-r%C3%A9ussi.jpg?s=612x612&w=gi&k=20&c=1iHBdaK0-RMmcu8Gz-6wel0fsXK9kWJdF4hrqoyA1TA=",
        "C'est pas un reve mais une réalité, j'adore coder",
        new Date(),
        0,


      );
  }
}
