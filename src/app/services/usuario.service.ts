import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl = 'http://ec2-18-224-25-113.us-east-2.compute.amazonaws.com:9091/api/';

  constructor(private http: HttpClient) { }

  getStates() {
    return this.http.get(this.baseUrl + 'domains/domainvalues/select?domain=ESTADOS');
  }

  getSucursales() {
    return this.http.get(this.baseUrl + 'branchoffices/select');
  }
  getUsuarioByState(state: string) {
    return this.http.get(this.baseUrl + 'users?state='+ state);
  }
  getUsuarioBySucursal(branch: string) {
    return this.http.get(this.baseUrl + 'users/' + branch);
  }


}
