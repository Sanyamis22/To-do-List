const tasks = [
    {
      name: 'car wash',
      disc: 'lorem ipsum',
      status: 'active',
    },
    {
      name: 'bike wash',
      disc: 'lorem ipsum',
      status: 'todo',
    },
    {
      name: 'dish wash',
      disc: 'lorem ipsum',
      status: 'completed',
    },
    {
      name: 'read book',
      disc: 'lorem ipsum',
      status: 'todo',
    },
  ];

  const item = tasks.filter((item) => item.status === 'todo')

  console.log('tasks ===>', tasks)

  console.log('filteredItem ===>', item)