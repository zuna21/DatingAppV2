import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Member } from '../_models/member';
import { map, of } from 'rxjs';
import { PaginatedResult } from '../_models/pagination';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  baseUrl: string = environment.apiUrl;
  members: Member[] = [];
  paginationResult: PaginatedResult<Member[]> = new PaginatedResult<Member[]>;

  constructor(private http: HttpClient) {}

  getMembers(page?: number, itemsPerPage?: number) {
    let params = new HttpParams();
    if (page && itemsPerPage) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
    }

    return this.http
      .get<Member[]>(`${this.baseUrl}/users`, { observe: 'response', params })
      .pipe(
        map(response => {
          if(response.body) {
            this.paginationResult.result = response.body;
          }
          const pagination = response.headers.get('Pagination');
          if (pagination) {
            this.paginationResult.pagination = JSON.parse(pagination);
          }
          return this.paginationResult;
        })
      );
  }

  getMember(username: string) {
    const member = this.members.find((x) => x.userName === username);
    if (member) return of(member);
    return this.http.get<Member>(`${this.baseUrl}/users/${username}`);
  }

  editMember(member: Member) {
    return this.http.put(`${this.baseUrl}/users`, member).pipe(
      map(() => {
        const index = this.members.indexOf(member);
        this.members[index] = { ...this.members[index], ...member };
      })
    );
  }
}
