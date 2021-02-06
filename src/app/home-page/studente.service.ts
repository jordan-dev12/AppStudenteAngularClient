import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// questo e la classe service per implementare i metodi da inviare sul serveur

export class StudenteService {

  constructor(private http: HttpClient) { }



  aggiungereStudente(studente)
  {
    return  this.http.post("http://localhost:8080/studente",studente,{responseType:'text' as 'json'});

  }

}



