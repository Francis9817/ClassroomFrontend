// import {Injectable} from '@angular/core';
// import {HttpClient} from '@angular/common/http';
// import {ResponseModel} from '../models/response.model';
// import {CategoryModel} from '../models/category.model';
// import {environment} from '../../environments/environment';

// @Injectable({
//   providedIn: 'root'
// })

// export class CategoryHttpService {
//   API_URL: string;

//   constructor(private httpClient: HttpClient) {
//     this.API_URL = environment.API_URL;
//   }

//   index() {
//     const url = `${this.API_URL}/categories`
//     return this.httpClient.get<ResponseModel>(url);
//   }

//   show(id: number) {
//     const url = `${this.API_URL}/categories/${id}`
//     return this.httpClient.get<ResponseModel>(url);
//   }

//   store(category: CategoryModel) {
//     const url = `${this.API_URL}/categories`
//     return this.httpClient.post<ResponseModel>(url, category);
//   }

//   update(id: number, category: CategoryModel) {
//     const url = `${this.API_URL}/categories/${id}`
//     return this.httpClient.put<ResponseModel>(url, category);
//   }

//   destroy(id: number) {
//     const url = `${this.API_URL}/categories/${id}`
//     return this.httpClient.delete<ResponseModel>(url);
//   }
// }
