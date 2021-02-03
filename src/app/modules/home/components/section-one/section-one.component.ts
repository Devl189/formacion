import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormField} from '../../../../shared/models/interfaces';
import { MessageService } from 'src/app/services/message.service';
import {Subject} from 'rxjs/internal/Subject';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent implements OnInit, OnDestroy {
  private unsubscribe: Subject<void> = new Subject();

  // Elementos de entrada y salida
  private privateFormFields: FormField[];
  // @Input() formFields: FormField[] = [];
  @Input() set formFields(form: FormField[]) {
    console.log(form);
    this.privateFormFields = form;
  }
  get formFields(): FormField[] {
    return this.privateFormFields;
  }
  @Output() saveForm: EventEmitter<any> = new EventEmitter<any>();

  // Formulario
  public form: FormGroup;
  // Lista de mensajes que se reciben desde el servicio de mensajeria
  public messages: any[] = [];

  constructor(private fb: FormBuilder, private messageService: MessageService) {
    // Escucha los cambios del observable del servico de mensajeria
    this.messageService.getMessage().subscribe(message => {
      if (message) {
        console.log(message);
        this.messages.push(message);
      } else {
        console.log(message);
        this.messages = [];
      }
    });
  }

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

  /**
   * @description emite el valor del formulario para que sea guardado
   */
  submitForm() {
    this.saveForm.emit(this.form.value);
  }

  /**
   * @description setea datos al formulario
   */
  setValues(): void {
    Object.keys(this.form.controls).forEach((key: string) => {
      this.form.controls[key].setValue(null, {emitEvent: false});
    });
    this.form.controls['nombre'].setValue('Ángel');
  }

  /**
   * @description se encarga de tener agrupados los escuchadores del formulario
   */
  subscribeFormChanges(): void {
    this.form.controls['nombre'].valueChanges.subscribe((value: any) => {
      console.log(value);
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
