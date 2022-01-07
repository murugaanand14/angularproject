import { Component } from '@angular/core';
import { Sidebar } from 'ng-sidebar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:'<!-- Container for sidebar(s) + page content -->
  // <ng-sidebar-container>

  //   <!-- A sidebar -->
  //   <ng-sidebar [(opened)]="_opened">
  //     <p>Sidebar contents</p>
  //   </ng-sidebar>

  //   <!-- Page content -->
  //   <div ng-sidebar-content>
  //     <button (click)="_toggleSidebar()">Toggle sidebar</button>
  //   </div>

  // </ng-sidebar-container>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _opened: boolean = false;
  public sidebarShow: boolean = false;

  private _toggleSidebar() {
    this._opened = !this._opened;
  }

  title = 'EmployeeCRUD';
}

