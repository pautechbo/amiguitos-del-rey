import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PROGRAMS, SITE } from '../../../../core/site-content';
import { Icon } from '../../../../shared/icon/icon';
import { Reveal } from '../../../../shared/reveal/reveal';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, Icon, Reveal],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly site = SITE;
  protected readonly programs = PROGRAMS;
  protected readonly sent = signal(false);

  private readonly fb = inject(FormBuilder);

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    program: [''],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // TODO: conectar con la API del colegio (POST /api/leads).
    // Por ahora el envío se resuelve en el cliente para la demo.
    this.sent.set(true);
    this.form.reset();
  }

  protected reset(): void {
    this.sent.set(false);
    this.form.reset();
  }
}
