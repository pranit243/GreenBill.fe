import { Component, EventEmitter, Input, Output } from '@angular/core';

interface SubMenu {
  name: string;
  icon: string;
}

interface MenuItem {
  name: string;
  icon: string;
  children?: SubMenu[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() isOpen = false;
  @Input() selectedMenu = 'Dashboard';
  @Output() menuSelected = new EventEmitter<string>();
  @Output() sidebarClosed = new EventEmitter<void>();

  expandedMenu = 'Settings';

  menuItems: MenuItem[] = [
    {
      name: 'Dashboard',
      icon: 'dashboard'
    },
    {
      name: 'Settings',
      icon: 'settings',
      children: [
        {
          name: 'General Settings',
          icon: 'tune'
        }
      ]
    }
  ];

  selectMenu(menuName: string): void {
    this.menuSelected.emit(menuName);
    this.sidebarClosed.emit();
  }

  toggleMenu(menuName: string): void {
    if (this.expandedMenu === menuName) {
      this.expandedMenu = '';
    } else {
      this.expandedMenu = menuName;
    }
  }
}