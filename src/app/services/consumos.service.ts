import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConsumosService {
  dominio = 'https://apirsapal.grupoapd.mx/api/';
  // dominio = 'https://api-sapal.azurewebsites.net/api/';



 //dominio = 'https://localhost:44312/api/';

 //  dominio = 'https://192.168.100.13:44312/api/';

   //  dominio = 'http://192.168.100.93/APDSAPAL/api/';

  constructor(private httpClient: HttpClient) { }
  gethost(){
    if(location.host=='localhost'){
      return this.dominio;
    }else{
    //  return 'https://localhost:44312/api/'
    return this.dominio;
    }

  }
  // consumos USUARIOS
  async getPing() {
    const url = this.dominio + 'usuarios/ping';
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      )};

    try {
      return await this.httpClient.get(url).pipe();
    } catch (error) {
      throw await error;
    }
  }
  async postLogear(LUS_CORREO,LUS_CONTRASENA) {
    const data = {
      LUS_CORREO: LUS_CORREO,
      LUS_CONTRASENA: LUS_CONTRASENA
    };

    const url = this.dominio + 'usuarios/logear';
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      )};

    try {
      return await this.httpClient.post(url, await data, await httpOptions).pipe();
    } catch (error) {
      throw await error;
    }
  }
  async postGuardaUsuario(LUS_CLAVE,LUS_NOMBRE,LUS_APELLIDOS,LUS_CORREO,LUS_TELEFONO,LUS_CONTRASENA) {
    const data = {
      LUS_CLAVE: LUS_CLAVE,
      LUS_NOMBRE: LUS_NOMBRE,
      LUS_APELLIDOS: LUS_APELLIDOS,
      LUS_CORREO: LUS_CORREO,
      LUS_TELEFONO: LUS_TELEFONO,
      LUS_CONTRASENA: LUS_CONTRASENA
    };

    const url = this.dominio + 'usuarios/guardar';
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      )};

    try {
      return await this.httpClient.post(url, await data, await httpOptions).pipe();
    } catch (error) {
      throw await error;
    }
  }
  async postRecuperaPassword(LUS_CORREO) {
    const data = {
      LUS_CORREO: LUS_CORREO
    };

    const url = this.dominio + 'usuarios/recuperar';
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      )};

    try {
      return await this.httpClient.post(url, await data, await httpOptions).pipe();
    } catch (error) {
      throw await error;
    }
  }
  async postContacto(nombre,correo,asunto,mensaje) {
    const data = {
      nombre: nombre,
      correo: correo,
      asunto: asunto,
      mensaje: mensaje
    };

    const url = this.dominio + 'usuarios/contacto';
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      )};

    try {
      return await this.httpClient.post(url, await data, await httpOptions).pipe();
    } catch (error) {
      throw await error;
    }
  }
  // consumos PAGOS
  async postRecuperaPagos(PAG_CUENTA) {
    const data = {
      PAG_CUENTA: PAG_CUENTA
    };

    const url = this.dominio + 'pago/recuperar';
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      )};

    try {
      return await this.httpClient.post(url, await data, await httpOptions).pipe();
    } catch (error) {
      throw await error;
    }
  }
  async postGeneraPagos(TARJETA, RECIBO, EXPIRACION, CCV, ECI, XID, CAVV, REFERENCE3D, estatus, tipo) {
    const data = {
      TARJETA: TARJETA,
      RECIBO: RECIBO,
      EXPIRACION: EXPIRACION,
      CCV: CCV,
      ECI: ECI,
      XID: XID,
      CAVV: CAVV,
      REFERENCE3D: REFERENCE3D,
      ESTATUS: estatus,
      usuario: localStorage.getItem("LUS_CLAVE"),
      tipo: tipo
    };

    const url = this.dominio + 'pago/pagar';
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      )};

    try {
      return await this.httpClient.post(url, await data, await httpOptions).pipe();
    } catch (error) {
      throw await error;
    }
  }
  // consumos FACTURACION
  async recuperaestados() {
    let url: string;
    url =  this.dominio + 'Facturacion/RecuperaEstados';

    return this.httpClient.get(url);
  }
  async guardarRFC(RFC,nombre,tipopersona,direccion,colonia,CP,email,celular,estado,municipio,regimen) {

    let url: string;
    url =  this.dominio + 'Facturacion/guardacliente?RFC=' + RFC + '&nombre=' + nombre + '&tipopersona=' + tipopersona + '&direccion=' + direccion + '&colonia=' + colonia + '&CP=' + CP + '&email=' + email + '&celular=' + celular + '&estado=' + estado + '&municipio=' + municipio+ '&regimen=' + regimen;

    return this.httpClient.get(url);
  }
  async recuperamunicipios() {
    let url: string;
    url =  this.dominio + 'Facturacion/RecuperaMunicipios';

    return this.httpClient.get(url);
  }
  async getRecuperaCliente(RFC) {
    const url = this.dominio + 'Facturacion/Recuperacliente?RFC=' + RFC;
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      )};

    try {
      return await this.httpClient.get(url).pipe();
    } catch (error) {
      throw await error;
    }
  }
  async getValidaFolio(folio) {
    const url = this.dominio + 'Facturacion/validafolio?folio=' + folio;
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      )};

    try {
      return await this.httpClient.get(url).pipe();
    } catch (error) {
      throw await error;
    }
  }
  async getFacturaFolio(rfc,folio,UsoCFDI) {
    const url = this.dominio + 'Facturacion/facturafolio?rfc=' + rfc + '&folio=' + folio + '&UsoCFDI=' + UsoCFDI;
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      )};

    try {
      return await this.httpClient.get(url).pipe();
    } catch (error) {
      throw await error;
    }
  }
  // reportes  ======================================================================================================================================================
  async getReporteCobrosSAPALIndicadores(FCH_INICIO,FCH_FIN) {
    try {
      let url: string;
      url =  await this.dominio + 'Reportes/ReporteCobrosGlobal?fechaInicio=' + FCH_INICIO + '&fechaFin=' + FCH_FIN;

      await console.log(url);
      return await this.httpClient.get(url);
    } catch (error) {
      throw error;
    }
  }


  async consulta_qr_empleado( CEM_CLAVE) {
    const data = {
      CEM_CLAVE: CEM_CLAVE
    };

    const url = this.dominio + 'pago/Verifica_empleado';
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      )};

    try {
      return await this.httpClient.post(url, await data, await httpOptions).pipe();
    } catch (error) {
      throw await error;
    }





  }
  async consulta_qr(inn_clave) {

    const url = await this.dominio + 'verifica/verifica_qr2?iin_clave='+inn_clave;

    try {
      let r= await this.httpClient.get(url);

      return r;
    } catch (error) {
      throw await error;
    }
  }



  async get_regimen_fiscal() {

    const url = this.dominio + 'Facturacion/recupera_regimen';
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      )};

    try {
      return await this.httpClient.get(url).pipe();
    } catch (error) {
      throw await error;
    }

  }
  async getGuardaCliente_regimen(rrfc,regimen) {
    let url: string;
    url =  this.dominio + 'Facturacion/guardacliente_regimen?RFC=' + rrfc +
                                                    '&regimen=' + regimen;

    return this.httpClient.get(url);
  }
  getClienteregimen(rfc) {
    let url: string;
    url =  this.dominio + 'Facturacion/Recupera_regimen_cliente?RFC=' + rfc;

    return this.httpClient.get(url);
  }
}
