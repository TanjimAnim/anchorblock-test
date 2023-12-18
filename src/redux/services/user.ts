import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
interface Post {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
interface ListResponse<T> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: T[];
}

export const usersListApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api/" }),
  endpoints: (builder) => ({
    listUsers: builder.query<ListResponse<Post>, number | void>({
      query: (page = 1) => `users?page=${page}`,
    }),
  }),
});

export const { useListUsersQuery } = usersListApi;
