import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Market } from '../../services/market.service';

@Component({
  selector: 'app-restriction-modal',
  templateUrl: './restriction-modal.component.html',
  styleUrls: ['./restriction-modal.component.css']
})
export class RestrictionModalComponent {
  @Input()
  market: Market;

  constructor(private modalService:NgbModal) { }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-beer-title'})    
    
  }

}