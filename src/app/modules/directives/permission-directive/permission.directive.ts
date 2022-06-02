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
    const permissionsStr = localStorage.getItem('permissions') || '[]';
    const permissionsArr = JSON.parse(permissionsStr);

    if (permissionsArr.includes(this.permissions[0])) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
