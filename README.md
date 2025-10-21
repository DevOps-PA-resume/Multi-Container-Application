# Multi-Container-Application

https://roadmap.sh/projects/multi-container-service


## How to use

### POST
```bash
curl -X POST http://164.92.164.107/api/v1/todos \
            -H "Content-Type: application/json" \
            -d '{"title": "Buy milk 2", "completed": false}'
```

### GET (all)
```bash
curl http://164.92.164.107/api/v1/todos
```

### GET (one)
```bash
curl http://164.92.164.107/api/v1/todos/68f6abfdc8c0e68780b70c46
```

### PUT
```bash
curl -X PUT http://164.92.164.107/api/v1/todos/68f6abfdc8c0e68780b70c46 \
            -H "Content-Type: application/json" \
            -d '{"title":"Buy milk and eggs","completed":true}'
```

### DELETE
```bash
curl -X DELETE http://164.92.164.107/api/v1/todos/68f6abfdc8c0e68780b70c46
```
