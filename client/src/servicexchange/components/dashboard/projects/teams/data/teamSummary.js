// Create a JSON summary that has ...
export const teamSummary = [
  {
    name: "Art Gallery",
    type: "T (root)",
    _collapsed: true,
    children: [
      {
        name: "Angelo Michael",
        type: "M (Proj. Mgr.)"
      },
      {
        name: "Leonardo Da Vinci",
        type: "M (Construction)"
      },
      {
        name: "Sappho De Lesbos",
        type: "M (Marketing)"
      },
      {
        name: "Elephants",
        type: "T (Artists)",
        _collapsed: true,
        children: [
          {
            name: "Salvador Dali",
            type: "M (Artist)"
          },
          {
            name: "Hawks",
            type: "T (Setup)",
            _collapsed: true,
            children: [
              {
                name: "Nelson Mandela",
                type: "M (Site Plan)"
              },
              {
                name: "Hippos",
                type: "T (Setup)",
                _collapsed: true,
                children: [
                  {
                    name: "Marcus Aurelius",
                    type: "M (Security)"
                  },
                  {
                    name: "Steve Jobs",
                    type: "M (Production)"
                  }
                ]
              }
            ]
          },
          {
            name: "Jane Austen",
            type: "M (Artist)"
          }
        ]
      },
      {
        name: "Albert Einstein",
        type: "M (Accounting)"
      },
      {
        name: "Wolves",
        type: "Team (Opening)",
        _collapsed: true,
        children: [
          {
            name: "Marcus Aurelius",
            type: "M (Security)"
          },
          {
            name: "Steve Jobs",
            type: "M (Production)"
          },
          {
            name: "Neil Armstrong",
            type: "M (Take Off)"
          }
        ]
      }
    ]
  }
];