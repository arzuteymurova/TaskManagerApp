export class Task {
  public name: string;
  public dueDate: string;
  public isCompleted: boolean;

  constructor(name: string, dueDate: string) {
    this.name = name;
    this.dueDate = dueDate;
    this.isCompleted = false;
  }
}
