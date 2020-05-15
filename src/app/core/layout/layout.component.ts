import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { MenuService } from '../menu.service';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  loading = false;

  private mediaMatcher: MediaQueryList =
  matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  private isSideNavToggled = false;

  public appNavSidenavClass = 'app-layout__app-nav';
  public appLayoutContentClass = 'app-layout__content';
  public appNavToggleClass = 'app-layout__app-nav-toggle';
  public toggleButtonText = '>';

  constructor(private router: Router,
    private menuService: MenuService) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
        setTimeout(() => {
          if (this.loading) {
            this.router.navigate([this.menuService.getRouterLink()]);
          }
        }, 1000);
      }else if (event instanceof NavigationEnd) {
        this.loading = false;
      }
    });
  }

  ngOnInit() {
    this.router.events.subscribe(() => {
      if (this.isScreenSmall()) {
        this.appNavSidenavClass = 'app-layout__app-nav--small-screen';
        this.appLayoutContentClass = 'app-layout__content--small-screen';
        this.appNavToggleClass = 'app-layout__app-nav-toggle--small-screen';
      } else {
        this.appNavSidenavClass = 'app-layout__app-nav';
        this.appLayoutContentClass = 'app-layout__content';
        this.appNavToggleClass = 'app-layout__app-nav-toggle';
      }
    });
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

  toggle(e: any) {
    if (this.isSideNavToggled) {
      this.isSideNavToggled = false;
      this.appNavSidenavClass = 'app-layout__app-nav--small-screen';
      this.toggleButtonText = '>';
    } else {
      this.isSideNavToggled = true;
      this.appNavSidenavClass = 'app-layout__app-nav';
      this.toggleButtonText = '<';
    }
  }

}
