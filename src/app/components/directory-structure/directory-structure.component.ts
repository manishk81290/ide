import { Component, ViewChild, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { fromEvent, Subscription } from 'rxjs';
import { take, filter } from 'rxjs/operators';

@Component({
  selector: 'app-directory-structure',
  templateUrl: './directory-structure.component.html',
  styleUrls: ['./directory-structure.component.css']
})
export class DirectoryStructureComponent implements OnInit {
  showProjectFiles:boolean=false;
  constructor(public overlay: Overlay, public viewContainerRef: ViewContainerRef) { }
  @ViewChild('userMenu') userMenu: TemplateRef<any>;
  overlayRef: OverlayRef | null;
  sub: Subscription;
  ngOnInit(): void {
  }

  open({ x, y }: MouseEvent) { 
    this.close();
    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo({ x, y })
      .withPositions([
        {
          originX: 'end',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top',
        }
      ]);

    this.overlayRef = this.overlay.create({
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.close()
    });

    this.overlayRef.attach(new TemplatePortal(this.userMenu, this.viewContainerRef, {
      $implicit: []
    }));

    this.sub = fromEvent<MouseEvent>(document, 'click')
      .pipe(
        filter(event => {
          const clickTarget = event.target as HTMLElement;
          return !!this.overlayRef && !this.overlayRef.overlayElement.contains(clickTarget);
        }),
        take(1)
      ).subscribe(() => this.close())

  }

  delete(user) {
    // delete user
    this.close();
  }

  close() {
    this.sub && this.sub.unsubscribe();
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }

}
