> ## GET /user/random
>
> get random user

> ## GET /user/all
>
> get all users<br> > `/user/all?limit=4`<br>
> by using the `limit` query server will provide limited number of users.

> ## POST /user/save
>
> save a user<br>
> body content (required):<br>
>
> - Id
> - gender
> - name
> - contact
> - address
> - photoUrl

> ## PATCH /user/update
>
> Update a user's information<br>
> body content (required): id

> ## PATCH /user/bulk-update
>
> Update multiple users' information<br>
> body content (required): array of object which contains atleast id property

> ## DELETE /user/ delete
>
> Delete a user
> body content (required): id
