import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appPermission]',
})
export class PermissionDirective implements OnInit {
  private permissions: string[] = [];
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appPermission(val: string[]) {
    this.permissions = val;
  }

  ngOnInit(): void {
    const y = localStorage.getItem('permissions') || '[]';
    const x = JSON.parse(y);

    if (x.includes(this.permissions[0])) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
