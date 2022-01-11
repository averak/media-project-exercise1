## URI とは

URI とは Uniform Resource Identifier の略で、Web 上に存在するリソースを指す識別子になります。

例えば、本 Web サイトのリソース識別子は`https://media-project-exercise1.abelab.dev`であり、一意性が約束されているため別のページが表示されることなく目的のページに辿り着けるわけです。

## URI の仕組み

```
 ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
 │                                              href                                              │
 ├──────────┬──┬─────────────────────┬────────────────────────┬───────────────────────────┬───────┤
 │ protocol │  │        auth         │          host          │           path            │ hash  │
 │          │  │                     ├─────────────────┬──────┼──────────┬────────────────┤       │
 │          │  │                     │    hostname     │ port │ pathname │     search     │       │
 │          │  │                     │                 │      │          ├─┬──────────────┤       │
 │          │  │                     │                 │      │          │ │    query     │       │
 "  https:   //    user   :   pass   @ sub.example.com : 8080   /p/a/t/h  ?  query=string   #hash "
 │          │  │          │          │    hostname     │ port │          │                │       │
 │          │  │          │          ├─────────────────┴──────┤          │                │       │
 │ protocol │  │ username │ password │          host          │          │                │       │
 ├──────────┴──┼──────────┴──────────┼────────────────────────┤          │                │       │
 │   origin    │                     │         origin         │ pathname │     search     │ hash  │
 ├─────────────┴─────────────────────┴────────────────────────┴──────────┴────────────────┴───────┤
 │                                              href                                              │
 └────────────────────────────────────────────────────────────────────────────────────────────────┘
 (All spaces in the "" line should be ignored. They are purely for formatting.)
```

> 出典: [Node.js v16.4.0 Documentation](https://nodejs.org/api/url.html)
