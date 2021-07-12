<h1 align="center">FSFC 3 - Third Challenge</h1>

## Running the app

First you need to install [Kind](https://kind.sigs.k8s.io/), then:

```bash
$ kind create cluster --config=kind.yaml
$ kubectl cluster-info --context kind-imersao-fsfc3

$ kubectl apply -f backend.yaml
$ kubectl apply -f frontend.yaml

$ kubectl port-forward service/backend-service 3000
$ kubectl port-forward service/frontend-service 3001

#run on http://localhost:3001
```
