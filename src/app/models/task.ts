export class Task {
    address: string;
    auditDate: string;
    category: string;
    completed: boolean;
    contactName: string;
    contactNumber: string
    endDate: string;
    infrastructureType: string;
    numberOfBathrooms: number;
    numberOfFloors: number;
    reference: string;
    selectedUser: string;
    selectedUserName: string;
    startDate: string;
    status: boolean;
    surfaceArea: string
    tid: string;
    title: string;
    venueName: string;

  constructor(task) {
    this.address = task.address
    this.auditDate = task.auditDate
    this.category = task.category
    this.completed = task.completed
    this.contactName = task.contactName
    this.contactNumber = task.contactNumber
    this.endDate = task.endDate
    this.infrastructureType = task.infrastructureType
    this.numberOfBathrooms = task.numberOfBathrooms
    this.numberOfFloors = task.numberOfFloors
    this.reference = task.reference
    this.selectedUser = task.selectedUser
    this.selectedUserName = task.selectedUserName
    this.startDate = task.startDate
    this.status = task.status
    this.surfaceArea = task.surfaceArea
    this.tid = task.tid
    this.title = task.title
    this.venueName = task.venueName
  }

}