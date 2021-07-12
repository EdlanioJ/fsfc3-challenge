<h1 align="center">FSFC 3 - Second Challenge</h1>

## Running the app

With Docker:

```bash
# development
$ docker-compose up -d

#run on http://localhost:3001
```

With Kubernetes:

To start locally first you need to install [Kind](https://kind.sigs.k8s.io/), then:

```bash
$ kind create cluster --config=k8s/kind.yaml
$ kubectl cluster-info --context kind-imersao-fsfc3

$ kubectl apply -f k8s/backend.yaml
$ kubectl apply -f k8s/frontend.yaml

$ kubectl port-forward service/backend-service 3000
$ kubectl port-forward service/frontend-service 3001

#run on http://localhost:3001
```
