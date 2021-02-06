import { Component, OnInit } from '@angular/core';
import { StudenteData } from '../studenteData';
import { StudenteService } from './studente.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  user: StudenteData=new StudenteData();
  constructor(private studente : StudenteService) { }

  

  ngOnInit(): void {
  }

  onSubmit(heroForm)
  {

    console.log(this.user);
    let resp = this.studente.aggiungereStudente(this.user);
    resp.subscribe(data => console.log(data));
    heroForm.form.reset();
  }


  annullare(heroForm)
  {
    heroForm.form.reset();

  }
}
