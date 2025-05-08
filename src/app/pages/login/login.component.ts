import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../../services/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginObj: any = {
    emaiId: '',
    password: '',
  };

  masterSrv = inject(MasterService);
  router = inject(Router);

  onLogin() {
    debugger;
    this.masterSrv.login(this.loginObj).subscribe((res: any) => {
      debugger;
      if (res.result) {
        localStorage.setItem('ticketUser', JSON.stringify(res.data));
        this.router.navigateByUrl('dashboard');
      } else {
        alert(res.message);
      }
    });
  }
}
