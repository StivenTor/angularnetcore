import {
  Component,
  OnInit,
  ViewChild,
  Inject,
  AfterViewInit,
  HostListener
} from "@angular/core";
import { PersonService } from "../../services/person.service";
import { FormControl, FormGroup, Validators, FormArray } from "@angular/forms";
import {
  MatTableDataSource,
  MatPaginator,
  MatSnackBar
} from "@angular/material";
import { FormValidatorService } from "../../services/infrastructure/form-validator.service";
import { AlertService } from "../../services/infrastructure/alert.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-person",
  templateUrl: "./person.component.html",
  styleUrls: ["./person.component.scss"]
})
export class PersonComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  public personTableDataSource = new MatTableDataSource<any>();
  public displayedColumns = [
  "id",
  "name",
  "lastname",
  "age",
  "email"  
  ];

  public showDialog = false;
  public personForm: any;
  public model: any;
  public idPerson: string;
  public editReadOnly = false;
  currentCity ='';

  constructor(
    private personService: PersonService,
    private alertService: AlertService,
    private router: Router
    ) {
  }

  formSetup() {
    this.personForm = new FormGroup(
    {
      name: new FormControl("", [Validators.required]),
      lastname: new FormControl("", [Validators.required]),
      age: new FormControl("", [Validators.required]),
      cellphone: new FormControl("", []),
      address: new FormControl("", []),
      email: new FormControl("", [
        Validators.required,
        FormValidatorService.emailCheck()
        ]),
    });
  }

  loadData() {
    this.loadPersons();
  }

  loadPersons() {
    this.personService.getPersons().subscribe((result: any) => {
      this.personTableDataSource.data = result.data.items;
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase();
    this.personTableDataSource.filter = filterValue;
  }

  ngAfterViewInit() {
    this.personTableDataSource.paginator = this.paginator;
  }

  ngOnInit() {
    // console.log(this.contextService.user);

    this.formSetup();
    this.loadData();
  }

  personFormSubmit(): void {
    // console.log(this.userForm);

    if (!this.personForm.valid) {
      return;
    }


    const dataForm = {
      name: this.personForm.controls.name.value,
      lastname: this.personForm.controls.lastname.value,
      age: this.personForm.controls.age.value,
      address: this.personForm.controls.address.value,
      cellphone: this.personForm.controls.cellphone.value,
      email: this.personForm.controls.email.value,
    };


    if (this.idPerson) {

      const dataForm = {
        id: this.idPerson,
        name: this.personForm.controls.name.value,
        lastname: this.personForm.controls.lastname.value,
        age: this.personForm.controls.age.value,
        address: this.personForm.controls.address.value,
        cellphone: this.personForm.controls.cellphone.value,
        email: this.personForm.controls.email.value,
      };


      this.personService.updatePerson(dataForm)
      .subscribe((result: any) => {
        if (result.status) {
          this.loadPersons();
          this.alertService.info("La información fue guardada con éxito");
          this.showDialog = false;
        } else {
          this.alertService.error("Error");
        }
      });

    }else{

      const dataForm = {
        name: this.personForm.controls.name.value,
        lastname: this.personForm.controls.lastname.value,
        age: this.personForm.controls.age.value,
        address: this.personForm.controls.address.value,
        cellphone: this.personForm.controls.cellphone.value,
        email: this.personForm.controls.email.value,
      };


      this.personService.savePerson(dataForm)
      .subscribe((result: any) => {
        if (result.status) {
          this.loadPersons();
          this.alertService.info("La información fue guardada con éxito");
          this.showDialog = false;
        } else {
          this.alertService.error("Error");
        }
      });
    }
  }

  addPerson() {
    this.editReadOnly = false;
    this.idPerson = null;
    this.personForm.reset();
    this.showDialog = true;
  }

  deletePerson(element){

    const dataForm = {
      id: element.id
    };    

    this.personService.deletePerson(dataForm)
    .subscribe((result: any) => {
      if (result.status) {
        this.loadPersons();
        this.alertService.info("Persona borrada con éxito");
        this.showDialog = false;
      } else {
        this.alertService.error("Error");
      }
    });
  }

  editPerson(person, readOnly) {
    this.idPerson = person.id;

    this.personForm.controls.name.setValue(person.name);
    this.personForm.controls.lastname.setValue(person.lastname);
    this.personForm.controls.age.setValue(person.age);
    this.personForm.controls.cellphone.setValue(person.cellphone);
    this.personForm.controls.address.setValue(person.address);
    this.personForm.controls.email.setValue(person.email);
    

    this.showDialog = true;
    this.editReadOnly = readOnly;
  }

}