import { Component } from '@angular/core';

// component decorator - a decorator enhances ts classes (and other elements) - decorators are defined with the @ symbol
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})

// a component is a typescript class
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';

  //define a method - methods can be used in string interpolation
  getServerStatus() {
    return this.serverStatus;
  }
}
