import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  nombre: number = 10;
  constructor(
    private readonly _activatedRoute: ActivatedRoute
  ) { 

  }

  ngOnInit(): void {
    const { idContact } = this._activatedRoute.snapshot.params;
  }

}
