import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormField} from '../../../../shared/models/interfaces';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent implements OnInit {

  constructor(private fb: FormBuilder) {
  }

  // Elementos de entrada y salida
  @Input() formFields: FormField[] = [];
  @Output() saveForm: EventEmitter<any> = new EventEmitter<any>();
  // Formulario
  public form: FormGroup;

  ngOnInit() {
    this.form = this.initForm(this.formFields);
    this.subscribeFormChanges();
  }

  /**
   * @description inicialización del formulario
   */
  initForm(camposFormulario: FormField[]): FormGroup {
    const fb = this.fb.group({});
    camposFormulario.forEach((field: FormField) => {
      fb.addControl(field.id,
        new FormControl(field.value ? field.value : null, field.mandatory === true ? [Validators.required] : []));
    });
    return fb;
  }

  submitForm() {
    this.saveForm.emit(this.form.value);
  }

  setValues(): void {
    Object.keys(this.form.controls).forEach((key: string) => {
      this.form.controls[key].setValue(null, {emitEvent: false});
    });
    this.form.controls['nombre'].setValue('Ángel');
  }

  subscribeFormChanges(): void {
    this.form.controls['nombre'].valueChanges.subscribe((value: any) => {
      console.log(value);
    });
  }

}
