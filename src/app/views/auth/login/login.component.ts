import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { AuthService } from '../auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'

})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  errorMessage: string | null = null

  constructor (
    private readonly fb: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit (): void {
    // Aquí puedes agregar lógica adicional si es necesario
  }

  onSubmit (): void {
    console.log(this.loginForm.value)
    if (this.loginForm.invalid) {
      this.errorMessage = 'Por favor, completa todos los campos requeridos.'
    }
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          this.authService.setToken(response.token)
          void this.router.navigate(['/admin']) // Redirige a la página de administración
        },
        error: (error) => {
          this.errorMessage = error.error.message ?? 'Error de inicio de sesión'
        }
      })
    }
  }
}
