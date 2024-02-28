import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.scss'
})
export class ConfirmationDialogComponent {
  @Input('messageBody') messageBody!: String;
  public modelRef?: BsModalRef;
  resolve: any;
  @ViewChild('template') modalTemplate!: TemplateRef<void>; //getting access to html,

  constructor(private modalService: BsModalService){}

  public openModal(){
    this.modelRef = this.modalService.show(this.modalTemplate);
    return new Promise((resolve) =>{
      this.resolve = resolve;
    })
  }

  public confirm(){
    this.resolve(true);
    this.modelRef?.hide();
  }

  public decline(){
    this.modelRef?.hide();
    this.resolve(false);
  }
}
