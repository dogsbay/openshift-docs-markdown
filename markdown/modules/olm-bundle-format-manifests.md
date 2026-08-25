{%- set _mod_docs_content_type = "CONCEPT" %}
# Manifests {id="olm-bundle-format-manifests_{{ context }}"}

Bundle manifests are Kubernetes objects in an Operator bundle that define the deployment and role based access control (RBAC) model for an Operator. A bundle includes one cluster service version (CSV) and typically the custom resource definitions (CRDs) for APIs owned by that CSV in its `/manifests` directory. {._abstract}

```terminal title="Example bundle format layout"
etcd
├── manifests
│   ├── etcdcluster.crd.yaml
│   └── etcdoperator.clusterserviceversion.yaml
│   └── secret.yaml
│   └── configmap.yaml
└── metadata
    └── annotations.yaml
    └── dependencies.yaml
```